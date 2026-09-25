import { PrismaClient } from "@prisma/client";
import { MockDataStore } from "./mock-db";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  mockStore?: MockDataStore;
};

const mockStore = globalForPrisma.mockStore ?? new MockDataStore();
globalForPrisma.mockStore = mockStore;

let realPrisma: PrismaClient | null = null;

if (process.env.DATABASE_URL) {
  try {
    realPrisma =
      globalForPrisma.prisma ??
      new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
      });
    globalForPrisma.prisma = realPrisma;
  } catch (err) {
    console.warn("[AI Studio] Database initialization failed — using mock:", err);
    realPrisma = null;
  }
} else {
  console.warn("[AI Studio] DATABASE_URL not set — using in-memory mock store");
}

function wrapModel(realModel: any, modelName: string) {
  const fallbackModel = mockStore.createModelProxy(modelName);
  if (!realModel) return fallbackModel;

  return new Proxy(realModel, {
    get(target, prop, receiver) {
      const orig = Reflect.get(target, prop, receiver);
      if (typeof orig !== "function") return orig;

      return async (...args: any[]) => {
        try {
          return await orig.apply(target, args);
        } catch (err: any) {
          const msg = String(err?.message || "");
          const isConnectionError =
            msg.includes("Can't reach database") ||
            msg.includes("database server") ||
            msg.includes("PrismaClientInitializationError") ||
            msg.includes("Environment variable not found: DATABASE_URL") ||
            msg.includes("ECONNREFUSED") ||
            msg.includes("ETIMEDOUT") ||
            msg.includes("ENOTFOUND") ||
            err?.code?.startsWith?.("P10");

          if (isConnectionError) {
            console.warn(`[AI Studio] Database connection offline for ${modelName}.${String(prop)} — falling back to mock`);
            const fallbackFn = (fallbackModel as any)[prop];
            if (typeof fallbackFn === "function") {
              return await fallbackFn.apply(fallbackModel, args);
            }
          }
          throw err;
        }
      };
    },
  });
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_, prop: string) {
    if (prop === "$transaction") {
      return async (arg: any) => {
        if (realPrisma) {
          try {
            return await (realPrisma as any).$transaction(arg);
          } catch {
            console.warn("[AI Studio] $transaction failed on live DB — using mock");
          }
        }
        if (typeof arg === "function") {
          return await arg(prisma);
        }
        if (Array.isArray(arg)) {
          return await Promise.all(arg);
        }
        return arg;
      };
    }

    if (prop === "$queryRaw" || prop === "$executeRaw") {
      return async () => [];
    }

    const realModel = realPrisma ? (realPrisma as any)[prop] : null;
    return wrapModel(realModel, prop);
  },
});
