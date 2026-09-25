import bcrypt from "bcryptjs";

export type MockItem = Record<string, any>;

// Sample initial data for offline / mock mode
const adminPasswordHash = bcrypt.hashSync("pak123", 10);

const defaultSite = {
  id: "site-urdu",
  name: "دی پاکستان ٹائمز اردو",
  slug: "urdu",
  domain: null,
  language: "ur",
  timezone: "Asia/Karachi",
  isDefault: true,
  status: "active",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const defaultCategories = [
  { id: "cat-1", name: "Pakistan", nameUr: "پاکستان", slug: "pakistan", description: "پاکستان کی اہم خبریں", sortOrder: 1, status: "active", parentId: null, siteId: "site-urdu", createdAt: new Date(), updatedAt: new Date() },
  { id: "cat-2", name: "National", nameUr: "قومی", slug: "national", description: "قومی و سیاسی امور", sortOrder: 2, status: "active", parentId: null, siteId: "site-urdu", createdAt: new Date(), updatedAt: new Date() },
  { id: "cat-3", name: "World", nameUr: "عالمی", slug: "world", description: "دنیا بھر کی تازہ ترین صورتحال", sortOrder: 3, status: "active", parentId: null, siteId: "site-urdu", createdAt: new Date(), updatedAt: new Date() },
  { id: "cat-4", name: "Business", nameUr: "کاروبار", slug: "business", description: "معیشت، تجارت اور اسٹاک ایکسچینج", sortOrder: 4, status: "active", parentId: null, siteId: "site-urdu", createdAt: new Date(), updatedAt: new Date() },
  { id: "cat-5", name: "Sports", nameUr: "کھیل", slug: "sports", description: "کرکٹ، فٹ بال اور کھیل کے میدان", sortOrder: 5, status: "active", parentId: null, siteId: "site-urdu", createdAt: new Date(), updatedAt: new Date() },
  { id: "cat-6", name: "Entertainment", nameUr: "شوبز", slug: "entertainment", description: "شوبز، فلم اور ثقافت", sortOrder: 6, status: "active", parentId: null, siteId: "site-urdu", createdAt: new Date(), updatedAt: new Date() },
  { id: "cat-7", name: "Technology", nameUr: "ٹیکنالوجی", slug: "technology", description: "سائنس اور جدید ٹیکنالوجی", sortOrder: 7, status: "active", parentId: null, siteId: "site-urdu", createdAt: new Date(), updatedAt: new Date() },
];

const defaultAuthors = [
  {
    id: "author-1",
    userId: "user-admin",
    name: "ادارتی ٹیم",
    slug: "editorial-team",
    email: "editorial@thepakistantimes.local",
    bio: "دی پاکستان ٹائمز کی مستند ادارتی اور تجزیاتی ٹیم۔",
    position: "چیف ایڈیٹر",
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "author-2",
    userId: null,
    name: "طاہر محمود",
    slug: "tahir-mahmood",
    email: "tahir@thepakistantimes.local",
    bio: "معاشی تجزیہ کار اور سینیئر صحافی۔",
    position: "سینیئر نامہ نگار",
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const defaultMedia = [
  {
    id: "media-1",
    filename: "islamabad-parliament.jpg",
    originalName: "islamabad.jpg",
    path: "/uploads/islamabad.jpg",
    url: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80",
    mimeType: "image/jpeg",
    size: 245000,
    width: 1200,
    height: 800,
    alt: "پارلیمنٹ ہاؤس اسلام آباد",
    caption: "اسلام آباد: اہم قانون سازی اور پالیسی اجلاس",
    credit: "دی پاکستان ٹائمز",
    type: "image",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "media-2",
    filename: "economy-trade.jpg",
    originalName: "economy.jpg",
    path: "/uploads/economy.jpg",
    url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    mimeType: "image/jpeg",
    size: 210000,
    width: 1200,
    height: 800,
    alt: "اسٹاک مارکیٹ اور معیشت",
    caption: "پاکستان اسٹاک ایکسچینج میں ریکارڈ تیزی کا رجحان",
    credit: "پی ایس ایکس",
    type: "image",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "media-3",
    filename: "cricket-match.jpg",
    originalName: "cricket.jpg",
    path: "/uploads/cricket.jpg",
    url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",
    mimeType: "image/jpeg",
    size: 290000,
    width: 1200,
    height: 800,
    alt: "کرکٹ اسٹیڈیم",
    caption: "قومی کرکٹ ٹیم کی آئندہ سیریز کی تیاریاں مکمل",
    credit: "پی سی بی",
    type: "image",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "media-4",
    filename: "tech-ai.jpg",
    originalName: "tech.jpg",
    path: "/uploads/tech.jpg",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    mimeType: "image/jpeg",
    size: 180000,
    width: 1200,
    height: 800,
    alt: "جدید ٹیکنالوجی",
    caption: "پاکستان میں آئی ٹی برآمدات اور ڈیجیٹل جدت کا سفر",
    credit: "آئی ٹی بورڈ",
    type: "image",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const defaultArticles = [
  {
    id: "art-1",
    siteId: "site-urdu",
    title: "ملکی معیشت میں استحکام: برآمدات میں 18 فیصد اضافے کی رپورٹ",
    titleUr: "ملکی معیشت میں استحکام: برآمدات میں 18 فیصد اضافے کی رپورٹ",
    slug: "pakistan-economic-stability-export-growth-report",
    subtitle: "وزارت تجارت کے مطابق مالی سال کے دوران اہم تجارتی معاہدوں کے مثبت نتائج سامنے آئے ہیں۔",
    excerpt: "وزارت تجارت اور ادارہ شماریات کے تازہ اعداد و شمار کے مطابق گزشتہ سہ ماہی کے دوران ملکی برآمدات میں نمایاں اضافہ ریکارڈ کیا گیا ہے۔",
    excerptUr: "وزارت تجارت اور ادارہ شماریات کے تازہ اعداد و شمار کے مطابق گزشتہ سہ ماہی کے دوران ملکی برآمدات میں نمایاں اضافہ ریکارڈ کیا گیا ہے۔",
    body: "<p>اسلام آباد: وزارت تجارت اور ادارہ شماریات کے جاری کردہ تازہ اعداد و شمار کے مطابق ملک کی مجموعی برآمدات میں گزشتہ سال کی اسی مدت کے مقابلے میں 18 فیصد نمایاں اضافہ ریکارڈ کیا گیا ہے۔</p><p>ماہرین اقتصادیات کا کہنا ہے کہ ٹیکسٹائل، آئی ٹی سروسز اور زرعی مصنوعات کی عالمی منڈیوں میں مانگ بڑھنے سے ملکی زرمبادلہ کے ذخائر پر مثبت اثرات مرتب ہوئے ہیں۔ حکومت کی جانب سے برآمدی صنعتوں کو دی جانے والی سہولیات نے پیداواری صلاحیت کو مہمیز دی ہے۔</p><p>تجارتی مشیر نے پریس بریفنگ میں واضح کیا کہ آئندہ مہینوں میں ویلیو ایڈڈ اشیاء کی برآمدات کو مزید بڑھانے کے لیے جامع روڈ میپ پر عمل درآمد جاری رہے گا۔</p>",
    bodyUr: "<p>اسلام آباد: وزارت تجارت اور ادارہ شماریات کے جاری کردہ تازہ اعداد و شمار کے مطابق ملک کی مجموعی برآمدات میں گزشتہ سال کی اسی مدت کے مقابلے میں 18 فیصد نمایاں اضافہ ریکارڈ کیا گیا ہے۔</p><p>ماہرین اقتصادیات کا کہنا ہے کہ ٹیکسٹائل، آئی ٹی سروسز اور زرعی مصنوعات کی عالمی منڈیوں میں مانگ بڑھنے سے ملکی زرمبادلہ کے ذخائر پر مثبت اثرات مرتب ہوئے ہیں۔ حکومت کی جانب سے برآمدی صنعتوں کو دی جانے والی سہولیات نے پیداواری صلاحیت کو مہمیز دی ہے۔</p><p>تجارتی مشیر نے پریس بریفنگ میں واضح کیا کہ آئندہ مہینوں میں ویلیو ایڈڈ اشیاء کی برآمدات کو مزید بڑھانے کے لیے جامع روڈ میپ پر عمل درآمد جاری رہے گا۔</p>",
    language: "ur",
    status: "published",
    workflowStep: "published",
    priority: "breaking",
    location: "اسلام آباد",
    featuredImageId: "media-2",
    imageCaption: "اسٹاک مارکیٹ اور تجارتی شعبے میں مثبت رجحان",
    imageCredit: "دی پاکستان ٹائمز",
    categoryId: "cat-4",
    authorId: "author-2",
    createdById: "user-admin",
    updatedById: "user-admin",
    publishAt: new Date(Date.now() - 7200000),
    publishedAt: new Date(Date.now() - 7200000),
    viewCount: 1420,
    isFeatured: true,
    isBreaking: true,
    schemaType: "NewsArticle",
    createdAt: new Date(Date.now() - 7200000),
    updatedAt: new Date(Date.now() - 7200000),
  },
  {
    id: "art-2",
    siteId: "site-urdu",
    title: "وفاقی کابینہ کا اہم اجلاس: عوامی فلاح و ریلیف کے منصوبوں کی منظوری",
    titleUr: "وفاقی کابینہ کا اہم اجلاس: عوامی فلاح و ریلیف کے منصوبوں کی منظوری",
    slug: "federal-cabinet-approves-public-relief-projects",
    subtitle: "توانائی، تعلیم اور صحت کے شعبوں کے لیے خصوصی پیکیج کی تفصیلات جاری۔",
    excerpt: "وفاقی کابینہ کے خصوصی اجلاس میں عام شہریوں کو براہِ راست ریلیف فراہم کرنے اور توانائی کے بلوں میں رعایت سے متعلق پالیسی کی توثیق کر دی گئی۔",
    excerptUr: "وفاقی کابینہ کے خصوصی اجلاس میں عام شہریوں کو براہِ راست ریلیف فراہم کرنے اور توانائی کے بلوں میں رعایت سے متعلق پالیسی کی توثیق کر دی گئی۔",
    body: "<p>اسلام آباد: وزیر اعظم کی زیر صدارت وفاقی کابینہ کا طویل اجلاس منعقد ہوا جس میں ملکی مجموعی معاشی و سیاسی صورتحال کا تفصیلی جائزہ لیا گیا۔</p><p>اجلاس کے دوران پسماندہ طبقات کو ٹارگٹڈ سبسڈی دینے، شمسی توانائی کے فروغ اور زراعت کے شعبے میں جدید ٹیکنالوجی کے استعمال کے لیے فنڈز کی منظوری دی گئی۔ وزیر اطلاعات نے میڈیا بریفنگ میں بتایا کہ تمام وزراء کو عوامی منصوبوں پر تیز رفتار عمل درآمد کی سخت ہدایات دی گئی ہیں۔</p>",
    bodyUr: "<p>اسلام آباد: وزیر اعظم کی زیر صدارت وفاقی کابینہ کا طویل اجلاس منعقد ہوا جس میں ملکی مجموعی معاشی و سیاسی صورتحال کا تفصیلی جائزہ لیا گیا۔</p><p>اجلاس کے دوران پسماندہ طبقات کو ٹارگٹڈ سبسڈی دینے، شمسی توانائی کے فروغ اور زراعت کے شعبے میں جدید ٹیکنالوجی کے استعمال کے لیے فنڈز کی منظوری دی گئی۔ وزیر اطلاعات نے میڈیا بریفنگ میں بتایا کہ تمام وزراء کو عوامی منصوبوں پر تیز رفتار عمل درآمد کی سخت ہدایات دی گئی ہیں۔</p>",
    language: "ur",
    status: "published",
    workflowStep: "published",
    priority: "high",
    location: "اسلام آباد",
    featuredImageId: "media-1",
    imageCaption: "پارلیمنٹ ہاؤس اور کابینہ ڈویژن کا مشترکہ اجلاس",
    imageCredit: "سرکاری ذرائع",
    categoryId: "cat-2",
    authorId: "author-1",
    createdById: "user-admin",
    updatedById: "user-admin",
    publishAt: new Date(Date.now() - 14400000),
    publishedAt: new Date(Date.now() - 14400000),
    viewCount: 980,
    isFeatured: true,
    isBreaking: false,
    schemaType: "NewsArticle",
    createdAt: new Date(Date.now() - 14400000),
    updatedAt: new Date(Date.now() - 14400000),
  },
  {
    id: "art-3",
    siteId: "site-urdu",
    title: "قومی کرکٹ ٹیم کے تربیتی کیمپ کا آغاز: سینیئر کھلاڑیوں کی بھرپور شرکت",
    titleUr: "قومی کرکٹ ٹیم کے تربیتی کیمپ کا آغاز: سینیئر کھلاڑیوں کی بھرپور شرکت",
    slug: "national-cricket-team-training-camp-begins",
    subtitle: "ہیڈ کوچ کا کہنا ہے کہ فٹنس اور اسٹرائیک ریٹ پر خصوصی توجہ دی جا رہی ہے۔",
    excerpt: "آئندہ بین الاقوامی سیریز کے پیش نظر قذافی اسٹیڈیم لاہور میں قومی کرکٹ کھلاڑیوں کا سخت تربیتی کیمپ شروع ہو گیا ہے۔",
    excerptUr: "آئندہ بین الاقوامی سیریز کے پیش نظر قذافی اسٹیڈیم لاہور میں قومی کرکٹ کھلاڑیوں کا سخت تربیتی کیمپ شروع ہو گیا ہے۔",
    body: "<p>لاہور: پاکستان کرکٹ بورڈ کے زیر اہتمام قومی کھلاڑیوں کا خصوصی تربیتی کیمپ آج سے لاہور میں شروع ہو گیا۔</p><p>ہیڈ کوچ نے میڈیا نمائندوں سے بات چیت کرتے ہوئے کہا کہ اس کیمپ کا بنیادی مقصد نوجوان اور سینیئر کھلاڑیوں کے مابین ہم آہنگی پیدا کرنا اور فیلڈنگ و فٹنس کے معیار کو بین الاقوامی تقاضوں کے مطابق بنانا ہے۔</p>",
    bodyUr: "<p>لاہور: پاکستان کرکٹ بورڈ کے زیر اہتمام قومی کھلاڑیوں کا خصوصی تربیتی کیمپ آج سے لاہور میں شروع ہو گیا۔</p><p>ہیڈ کوچ نے میڈیا نمائندوں سے بات چیت کرتے ہوئے کہا کہ اس کیمپ کا بنیادی مقصد نوجوان اور سینیئر کھلاڑیوں کے مابین ہم آہنگی پیدا کرنا اور فیلڈنگ و فٹنس کے معیار کو بین الاقوامی تقاضوں کے مطابق بنانا ہے۔</p>",
    language: "ur",
    status: "published",
    workflowStep: "published",
    priority: "normal",
    location: "لاہور",
    featuredImageId: "media-3",
    imageCaption: "قذافی اسٹیڈیم میں پریکٹس سیشن کا منظر",
    imageCredit: "پی سی بی",
    categoryId: "cat-5",
    authorId: "author-1",
    createdById: "user-admin",
    updatedById: "user-admin",
    publishAt: new Date(Date.now() - 21600000),
    publishedAt: new Date(Date.now() - 21600000),
    viewCount: 1250,
    isFeatured: false,
    isBreaking: false,
    schemaType: "NewsArticle",
    createdAt: new Date(Date.now() - 21600000),
    updatedAt: new Date(Date.now() - 21600000),
  },
  {
    id: "art-4",
    siteId: "site-urdu",
    title: "مصنوعی ذہانت اور جدید سافٹ ویئر برآمدات میں ریکارڈ اضافہ",
    titleUr: "مصنوعی ذہانت اور جدید سافٹ ویئر برآمدات میں ریکارڈ اضافہ",
    slug: "ai-and-software-exports-record-growth-pakistan",
    subtitle: "پاکستانی آئی ٹی کمپنیوں نے عالمی مارکیٹ میں نمایاں سنگ میل عبور کر لیا۔",
    excerpt: "پاکستان انفارمیشن ٹیکنالوجی بورڈ اور پاشا کے مطابق رواں مالی سال میں ٹیک سیکٹر کی ترسیلات اور معاہدوں میں تاریخی تیزی دیکھی گئی ہے۔",
    excerptUr: "پاکستان انفارمیشن ٹیکنالوجی بورڈ اور پاشا کے مطابق رواں مالی سال میں ٹیک سیکٹر کی ترسیلات اور معاہدوں میں تاریخی تیزی دیکھی گئی ہے۔",
    body: "<p>کراچی: پاکستان میں ٹیکنالوجی کے شعبے نے ایک بار پھر اپنی صلاحیتوں کا لوہا منواتے ہوئے عالمی منڈی میں نمایاں پذیرائی حاصل کی ہے۔</p><p>جدید مصنوعی ذہانت (AI)، کلاؤڈ کمپیوٹنگ اور سائبر سیکیورٹی کے شعبوں میں کام کرنے والے ملکی اسٹارٹ اپس نے خطے میں سب سے زیادہ بیرونی سرمایہ کاری راغب کی ہے۔ ماہرین کا کہنا ہے کہ نوجوانوں کو آئی ٹی تربیت کی فراہمی سے یہ شعبہ ملک کا سب سے بڑا زرمبادلہ پیدا کرنے والا سیکٹر بن سکتا ہے۔</p>",
    bodyUr: "<p>کراچی: پاکستان میں ٹیکنالوجی کے شعبے نے ایک بار پھر اپنی صلاحیتوں کا لوہا منواتے ہوئے عالمی منڈی میں نمایاں پذیرائی حاصل کی ہے۔</p><p>جدید مصنوعی ذہانت (AI)، کلاؤڈ کمپیوٹنگ اور سائبر سیکیورٹی کے شعبوں میں کام کرنے والے ملکی اسٹارٹ اپس نے خطے میں سب سے زیادہ بیرونی سرمایہ کاری راغب کی ہے۔ ماہرین کا کہنا ہے کہ نوجوانوں کو آئی ٹی تربیت کی فراہمی سے یہ شعبہ ملک کا سب سے بڑا زرمبادلہ پیدا کرنے والا سیکٹر بن سکتا ہے۔</p>",
    language: "ur",
    status: "published",
    workflowStep: "published",
    priority: "normal",
    location: "کراچی",
    featuredImageId: "media-4",
    imageCaption: "ٹیک پارک میں جدید سافٹ ویئر ریسرچ لیب",
    imageCredit: "دی پاکستان ٹائمز",
    categoryId: "cat-7",
    authorId: "author-2",
    createdById: "user-admin",
    updatedById: "user-admin",
    publishAt: new Date(Date.now() - 28800000),
    publishedAt: new Date(Date.now() - 28800000),
    viewCount: 780,
    isFeatured: false,
    isBreaking: false,
    schemaType: "NewsArticle",
    createdAt: new Date(Date.now() - 28800000),
    updatedAt: new Date(Date.now() - 28800000),
  },
];

const defaultBreaking = [
  {
    id: "brk-1",
    headline: "ملکی معیشت میں استحکام: برآمدات میں 18 فیصد اضافے کی رپورٹ جاری",
    headlineUr: "ملکی معیشت میں استحکام: برآمدات میں 18 فیصد اضافے کی رپورٹ جاری",
    priority: 1,
    status: "active",
    startAt: new Date(Date.now() - 3600000),
    endAt: new Date(Date.now() + 86400000),
    articleId: "art-1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const defaultMenus = [
  {
    id: "menu-main",
    siteId: "site-urdu",
    name: "Main Menu",
    location: "main",
    status: "active",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const defaultMenuItems = [
  { id: "mi-1", menuId: "menu-main", label: "ہوم", labelUr: "ہوم", url: "/", sortOrder: 1, status: "active", parentId: null },
  { id: "mi-2", menuId: "menu-main", label: "پاکستان", labelUr: "پاکستان", url: "/category/pakistan", sortOrder: 2, status: "active", parentId: null },
  { id: "mi-3", menuId: "menu-main", label: "قومی", labelUr: "قومی", url: "/category/national", sortOrder: 3, status: "active", parentId: null },
  { id: "mi-4", menuId: "menu-main", label: "عالمی", labelUr: "عالمی", url: "/category/world", sortOrder: 4, status: "active", parentId: null },
  { id: "mi-5", menuId: "menu-main", label: "کاروبار", labelUr: "کاروبار", url: "/category/business", sortOrder: 5, status: "active", parentId: null },
  { id: "mi-6", menuId: "menu-main", label: "کھیل", labelUr: "کھیل", url: "/category/sports", sortOrder: 6, status: "active", parentId: null },
  { id: "mi-7", menuId: "menu-main", label: "شوبز", labelUr: "شوبز", url: "/category/entertainment", sortOrder: 7, status: "active", parentId: null },
  { id: "mi-8", menuId: "menu-main", label: "ٹیکنالوجی", labelUr: "ٹیکنالوجی", url: "/category/technology", sortOrder: 8, status: "active", parentId: null },
];

const defaultSettings = [
  { id: "set-1", siteId: "site-urdu", group: "general", key: "siteNameUr", value: "دی پاکستان ٹائمز اردو", updatedAt: new Date() },
  { id: "set-2", siteId: "site-urdu", group: "general", key: "siteNameEn", value: "The Pakistan Times", updatedAt: new Date() },
  { id: "set-3", siteId: "site-urdu", group: "general", key: "taglineUr", value: "آزاد، حقیقت پر مبنی صحافت", updatedAt: new Date() },
  { id: "set-4", siteId: "site-urdu", group: "general", key: "taglineEn", value: "Independent reporting from the newsroom", updatedAt: new Date() },
  { id: "set-5", siteId: "site-urdu", group: "theme", key: "accentColor", value: "#0B7A3B", updatedAt: new Date() },
  { id: "set-6", siteId: "site-urdu", group: "footer", key: "aboutUr", value: "دی پاکستان ٹائمز اردو — آزاد صحافت، قومی اور عالمی کوریج۔", updatedAt: new Date() },
  { id: "set-7", siteId: "site-urdu", group: "footer", key: "aboutEn", value: "The Pakistan Times — independent journalism covering Pakistan and the world.", updatedAt: new Date() },
  { id: "set-8", siteId: "site-urdu", group: "footer", key: "copyrightUr", value: "جملہ حقوق محفوظ ہیں © دی پاکستان ٹائمز", updatedAt: new Date() },
];

const defaultRoles = [
  { id: "role-super-admin", name: "Super Admin", slug: "super-admin", description: "Full system access", isSystem: true, createdAt: new Date(), updatedAt: new Date() },
];

const defaultUsers = [
  {
    id: "user-admin",
    email: "admin@thepakistantimes.local",
    username: "admin",
    passwordHash: adminPasswordHash,
    name: "Super Admin",
    status: "active",
    twoFactorEnabled: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];

const defaultUserRoles = [
  { userId: "user-admin", roleId: "role-super-admin" },
];

const defaultHomepageBlocks = [
  { id: "hp-1", siteId: "site-urdu", sectionKey: "top_story", title: "اہم خبر", articleId: "art-1", sortOrder: 1, priority: 1, isVisible: true, createdAt: new Date(), updatedAt: new Date() },
  { id: "hp-2", siteId: "site-urdu", sectionKey: "secondary", title: "اہم خبریں", articleId: "art-2", sortOrder: 2, priority: 2, isVisible: true, createdAt: new Date(), updatedAt: new Date() },
];

export class MockDataStore {
  sites = [...defaultSite ? [defaultSite] : []];
  categories = [...defaultCategories];
  authors = [...defaultAuthors];
  media = [...defaultMedia];
  articles = [...defaultArticles];
  breakingNews = [...defaultBreaking];
  menus = [...defaultMenus];
  menuItems = [...defaultMenuItems];
  settings = [...defaultSettings];
  roles = [...defaultRoles];
  users = [...defaultUsers];
  userRoles = [...defaultUserRoles];
  sessions: MockItem[] = [];
  loginLogs: MockItem[] = [];
  homepageBlocks = [...defaultHomepageBlocks];
  tags: MockItem[] = [
    { id: "tag-1", name: "پاکستان", nameUr: "پاکستان", slug: "pakistan", usageCount: 4, createdAt: new Date(), updatedAt: new Date() },
    { id: "tag-2", name: "معیشت", nameUr: "معیشت", slug: "economy", usageCount: 3, createdAt: new Date(), updatedAt: new Date() },
  ];
  comments: MockItem[] = [];
  videos: MockItem[] = [
    { id: "vid-1", title: "پاکستان کی معاشی پیش رفت پر خصوصی رپورٹ", slug: "pakistan-economic-special-report", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", status: "published", createdAt: new Date(), updatedAt: new Date() },
  ];
  galleries: MockItem[] = [];
  galleryItems: MockItem[] = [];
  liveStories: MockItem[] = [];
  liveUpdates: MockItem[] = [];
  advertisements: MockItem[] = [];
  notifications: MockItem[] = [];
  staticPages: MockItem[] = [
    { id: "page-about", title: "About Us", slug: "about", body: "About The Pakistan Times", bodyUr: "دی پاکستان ٹائمز کے بارے میں", status: "published", updatedAt: new Date(), createdAt: new Date() },
    { id: "page-contact", title: "Contact Us", slug: "contact", body: "Contact us at editorial@thepakistantimes.local", bodyUr: "ہم سے رابطہ کریں", status: "published", updatedAt: new Date(), createdAt: new Date() },
    { id: "page-privacy", title: "Privacy Policy", slug: "privacy", body: "Privacy Policy", bodyUr: "پرائیویسی پالیسی", status: "published", updatedAt: new Date(), createdAt: new Date() },
    { id: "page-terms", title: "Terms of Service", slug: "terms", body: "Terms of Service", bodyUr: "شرائط و ضوابط", status: "published", updatedAt: new Date(), createdAt: new Date() },
  ];
  redirects: MockItem[] = [];
  notFoundHits: MockItem[] = [];
  auditLogs: MockItem[] = [];
  jobs: MockItem[] = [];
  seoAuditIssues: MockItem[] = [];
  articleRevisions: MockItem[] = [];
  articleRelations: MockItem[] = [];
  articleTags: MockItem[] = [];
  articleCoAuthors: MockItem[] = [];
  permissions: MockItem[] = [{ id: "perm-all", module: "all", action: "manage", code: "*", description: "All permissions" }];
  rolePermissions: MockItem[] = [{ roleId: "role-super-admin", permissionId: "perm-all" }];

  private getTable(name: string): MockItem[] {
    const map: Record<string, MockItem[]> = {
      site: this.sites,
      category: this.categories,
      author: this.authors,
      media: this.media,
      article: this.articles,
      breakingNews: this.breakingNews,
      menu: this.menus,
      menuItem: this.menuItems,
      setting: this.settings,
      role: this.roles,
      user: this.users,
      userRole: this.userRoles,
      session: this.sessions,
      loginLog: this.loginLogs,
      homepageBlock: this.homepageBlocks,
      tag: this.tags,
      comment: this.comments,
      video: this.videos,
      gallery: this.galleries,
      galleryItem: this.galleryItems,
      liveStory: this.liveStories,
      liveUpdate: this.liveUpdates,
      advertisement: this.advertisements,
      notification: this.notifications,
      staticPage: this.staticPages,
      redirect: this.redirects,
      notFoundHit: this.notFoundHits,
      auditLog: this.auditLogs,
      job: this.jobs,
      seoAuditIssue: this.seoAuditIssues,
      articleRevision: this.articleRevisions,
      articleRelation: this.articleRelations,
      articleTag: this.articleTags,
      articleCoAuthor: this.articleCoAuthors,
      permission: this.permissions,
      rolePermission: this.rolePermissions,
    };
    if (!map[name]) {
      map[name] = [];
    }
    return map[name];
  }

  private enrichItem(modelName: string, item: MockItem, include?: Record<string, any>): MockItem {
    if (!item) return item;
    const res = { ...item };
    if (!include) return res;

    if (modelName === "article") {
      if (include.category) {
        res.category = this.categories.find((c) => c.id === item.categoryId) || null;
      }
      if (include.author) {
        res.author = this.authors.find((a) => a.id === item.authorId) || null;
      }
      if (include.featuredImage) {
        res.featuredImage = this.media.find((m) => m.id === item.featuredImageId) || null;
      }
      if (include.tags) {
        res.tags = this.tags.map((t) => ({ tag: t }));
      }
      if (include.coAuthors) {
        res.coAuthors = [];
      }
      if (include.relations) {
        res.relations = [];
      }
    } else if (modelName === "category") {
      if (include.children) {
        res.children = this.categories.filter((c) => c.parentId === item.id);
      }
      if (include._count) {
        res._count = { articles: this.articles.filter((a) => a.categoryId === item.id).length };
      }
    } else if (modelName === "menu") {
      if (include.items) {
        res.items = this.menuItems.filter((mi) => mi.menuId === item.id);
      }
    } else if (modelName === "user") {
      if (include.roles) {
        res.roles = [
          {
            role: {
              id: "role-super-admin",
              slug: "super-admin",
              permissions: [{ permission: { code: "*" } }],
            },
          },
        ];
      }
    } else if (modelName === "breakingNews") {
      if (include.article) {
        res.article = this.articles.find((a) => a.id === item.articleId) || null;
      }
    } else if (modelName === "homepageBlock") {
      if (include.article) {
        const art = this.articles.find((a) => a.id === item.articleId);
        res.article = art ? this.enrichItem("article", art, { category: true, author: true, featuredImage: true }) : null;
      }
    }
    return res;
  }

  createModelProxy(modelName: string) {
    const store = this;
    return {
      findMany: async (args?: any) => {
        let list = [...store.getTable(modelName)];
        if (args?.where) {
          list = list.filter((item) => store.matchWhere(item, args.where));
        }
        if (args?.orderBy) {
          list = store.sortList(list, args.orderBy);
        }
        if (typeof args?.skip === "number") {
          list = list.slice(args.skip);
        }
        if (typeof args?.take === "number") {
          list = list.slice(0, args.take);
        }
        return list.map((it) => store.enrichItem(modelName, it, args?.include));
      },

      findFirst: async (args?: any) => {
        const list = await store.createModelProxy(modelName).findMany(args);
        return list[0] ?? null;
      },

      findUnique: async (args?: any) => {
        const list = await store.createModelProxy(modelName).findMany(args);
        return list[0] ?? null;
      },

      findUniqueOrThrow: async (args?: any) => {
        const item = await store.createModelProxy(modelName).findFirst(args);
        if (!item) {
          const table = store.getTable(modelName);
          return table[0] ?? { id: "mock-" + Date.now(), ...args?.where };
        }
        return item;
      },

      create: async (args: any) => {
        const table = store.getTable(modelName);
        const data = {
          id: args?.data?.id || `mock-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          createdAt: new Date(),
          updatedAt: new Date(),
          ...(args?.data ?? {}),
        };
        table.push(data);
        return store.enrichItem(modelName, data, args?.include);
      },

      update: async (args: any) => {
        const table = store.getTable(modelName);
        const idx = table.findIndex((it) => store.matchWhere(it, args?.where));
        if (idx >= 0) {
          table[idx] = { ...table[idx], ...(args?.data ?? {}), updatedAt: new Date() };
          return store.enrichItem(modelName, table[idx], args?.include);
        }
        const created = await store.createModelProxy(modelName).create({ data: { ...(args?.where ?? {}), ...(args?.data ?? {}) } });
        return created;
      },

      upsert: async (args: any) => {
        const existing = await store.createModelProxy(modelName).findFirst({ where: args.where });
        if (existing) {
          return store.createModelProxy(modelName).update({ where: args.where, data: args.update, include: args.include });
        }
        return store.createModelProxy(modelName).create({ data: args.create, include: args.include });
      },

      delete: async (args: any) => {
        const table = store.getTable(modelName);
        const idx = table.findIndex((it) => store.matchWhere(it, args?.where));
        if (idx >= 0) {
          const removed = table.splice(idx, 1)[0];
          return removed;
        }
        return {};
      },

      deleteMany: async (args?: any) => {
        const table = store.getTable(modelName);
        const initialLen = table.length;
        if (!args?.where) {
          table.length = 0;
          return { count: initialLen };
        }
        const remaining = table.filter((it) => !store.matchWhere(it, args.where));
        const count = initialLen - remaining.length;
        table.length = 0;
        table.push(...remaining);
        return { count };
      },

      updateMany: async (args: any) => {
        const table = store.getTable(modelName);
        let count = 0;
        for (let i = 0; i < table.length; i++) {
          if (!args?.where || store.matchWhere(table[i], args.where)) {
            table[i] = { ...table[i], ...(args?.data ?? {}), updatedAt: new Date() };
            count++;
          }
        }
        return { count };
      },

      count: async (args?: any) => {
        const list = await store.createModelProxy(modelName).findMany(args);
        return list.length;
      },

      aggregate: async () => ({
        _count: { id: 0 },
        _avg: {},
        _sum: {},
        _min: {},
        _max: {},
      }),

      groupBy: async () => [],
    };
  }

  private matchWhere(item: MockItem, where?: Record<string, any>): boolean {
    if (!where) return true;
    for (const [key, val] of Object.entries(where)) {
      if (key === "OR" && Array.isArray(val)) {
        if (!val.some((sub) => this.matchWhere(item, sub))) return false;
        continue;
      }
      if (key === "AND" && Array.isArray(val)) {
        if (!val.every((sub) => this.matchWhere(item, sub))) return false;
        continue;
      }
      if (key === "NOT") {
        if (this.matchWhere(item, val)) return false;
        continue;
      }

      const itemVal = item[key];
      if (val === null || val === undefined) {
        if (val === null && itemVal !== null && itemVal !== undefined) return false;
        continue;
      }

      if (typeof val === "object" && !(val instanceof Date)) {
        if ("equals" in val && itemVal !== val.equals) return false;
        if ("contains" in val) {
          const search = String(val.contains).toLowerCase();
          if (!String(itemVal || "").toLowerCase().includes(search)) return false;
        }
        if ("gte" in val && itemVal < val.gte) return false;
        if ("lte" in val && itemVal > val.lte) return false;
        if ("gt" in val && itemVal <= val.gt) return false;
        if ("lt" in val && itemVal >= val.lt) return false;
        if ("in" in val && Array.isArray(val.in) && !val.in.includes(itemVal)) return false;
        if ("notIn" in val && Array.isArray(val.notIn) && val.notIn.includes(itemVal)) return false;
        if ("not" in val && itemVal === val.not) return false;
      } else {
        if (itemVal !== val) return false;
      }
    }
    return true;
  }

  private sortList(list: MockItem[], orderBy: any): MockItem[] {
    const sorts = Array.isArray(orderBy) ? orderBy : [orderBy];
    return [...list].sort((a, b) => {
      for (const s of sorts) {
        const [field, dir] = Object.entries(s)[0] || [];
        if (!field) continue;
        const valA = a[field];
        const valB = b[field];
        if (valA === valB) continue;
        const order = dir === "desc" ? -1 : 1;
        if (valA > valB) return order;
        if (valA < valB) return -order;
      }
      return 0;
    });
  }
}
