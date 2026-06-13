export const siteConfig = {
  name: "مطعم واستراحة ابن النبك",
  shortName: "ابن النبك",
  slogan: "وجهتكم المتكاملة في النبك",
  description:
    "مطعم، كافيه وتراس، صالة أفراح، حلويات، وألعاب أطفال في مكان واحد",
  address: "أوتستراد دمشق، مقابل مدخل مدينة النبك",
  heroImage: "/images/hero.jpg",

  logoSrc: "/branding/logo.png",
  logoAlt: "شعار مطعم واستراحة ابن النبك",

  // ===== بيانات مؤقتة - يتم تحديثها لاحقاً =====
  phoneDisplay: "+963 000 000 000",
  phoneHref: "tel:+963000000000",
  whatsappNumber: "963000000000",
mapsHref: "https://maps.app.goo.gl/ReDofToXDJXsmmVx6",
mapsEmbed:
  "https://www.google.com/maps?q=34.0286,36.7236&hl=ar&z=17&output=embed",
  // ===== السوشال ميديا (اختياري) =====
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },
};

export const whatsappMessage = encodeURIComponent(
  "مرحبًا، أرغب بالطلب أو الاستفسار من مطعم واستراحة ابن النبك"
);

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`;

export const navLinks = [
  { label: "الرئيسية", href: "#top" },
  { label: "أقسامنا", href: "#sections" },
  { label: "المعرض", href: "#gallery" },
  { label: "المنيو", href: "/menu" },
  { label: "صالة الأفراح", href: "#events" },
  { label: "تواصل معنا", href: "#contact" },
];

export const stats = [
  { value: "3", label: "طوابق رئيسية" },
  { value: "عائلي", label: "مناسب للعائلات" },
  { value: "صيفي", label: "تراس خارجي موسمي" },
];

export const venueSections = [
  {
    title: "الطابق الأول",
    subtitle: "المطعم + الحلويات + ألعاب الأطفال",
    description:
      "يضم قسم المطعم الرئيسي، وقسمًا خاصًا بالحلويات، بالإضافة إلى مساحة مخصصة لألعاب الأطفال لتجربة عائلية متكاملة.",
    items: ["قسم المطعم", "قسم الحلويات", "ألعاب الأطفال"],
  },
  {
    title: "الطابق الثاني",
    subtitle: "الكافيه + التراس",
    description:
      "جلسات مريحة وأجواء راقية تناسب اللقاءات العائلية والجلسات المسائية، مع مساحة تراس مميزة.",
    items: ["قسم الكافيه", "التراس", "جلسات مريحة"],
  },
  {
    title: "الطابق الثالث",
    subtitle: "صالة الأفراح",
    description:
      "صالة مخصصة لاستقبال المناسبات الخاصة والأفراح في أجواء أنيقة وخدمة مميزة.",
    items: ["صالة أفراح", "مناسبات خاصة", "استفسار عبر الهاتف"],
  },
  {
    title: "المساحة الخارجية",
    subtitle: "تراس صيفي أمام الاستراحة",
    description:
      "في فصل الصيف، تتوفر جلسات خارجية مميزة أمام الاستراحة لتجربة أكثر انتعاشًا وراحة.",
    items: ["تراس خارجي", "جلسات صيفية", "واجهة مريحة"],
  },
];

export const highlights = [
  {
    title: "قسم الحلويات",
    text: "ركن خاص للحلويات يضيف لمسة ضيافة راقية ويكمل تجربة الزوار بنكهات مميزة.",
  },
  {
    title: "ألعاب الأطفال",
    text: "مساحة مخصصة للأطفال تمنح العائلة راحة أكبر أثناء الجلسة داخل المطعم والاستراحة.",
  },
  {
    title: "الكافيه والتراس",
    text: "جلسات هادئة وتصميم مريح يناسب اللقاءات اليومية والجلسات المسائية مع الأصدقاء والعائلة.",
  },
  {
    title: "صالة الأفراح",
    text: "خيار مثالي للمناسبات الخاصة ضمن مكان واحد يجمع بين الضيافة والأجواء الأنيقة.",
  },
];

// ===== العملات المتاحة =====
export const currencies = [
  { code: "SYP", label: "ل.س", name: "ليرة سورية" },
  { code: "USD", label: "$", name: "دولار" },
  { code: "TRY", label: "₺", name: "ليرة تركية" },
];

// ===== أقسام المنيو =====
export const menuCategories = [
  {
    id: "breakfast",
    title: "الإفطار",
    icon: "🍳",
    items: [
      {
        name: "خبز تميس",
        desc: "",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "10000", USD: "", TRY: "" },
      },
      {
        name: "صحن زيتون",
        desc: "",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "25000", USD: "", TRY: "" },
      },
      {
        name: "صحن لبنة",
        desc: "",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "30000", USD: "", TRY: "" },
      },
      {
        name: "صحن جبنة",
        desc: "",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "30000", USD: "", TRY: "" },
      },
      {
        name: "صحن خضرة",
        desc: "",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "20000", USD: "", TRY: "" },
      },
      {
        name: "حمص باللحمة",
        desc: "100 g",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "80000", USD: "", TRY: "" },
      },
      {
        name: "فول بالزيت",
        desc: "للشخص الواحد",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "25000", USD: "", TRY: "" },
      },
      {
        name: "فول بلبن",
        desc: "للشخص الواحد",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "25000", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "appetizers",
    title: "المقبلات",
    icon: "🥗",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "salads",
    title: "السلطات",
    icon: "🥬",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "eastern",
    title: "المأكولات الشرقية",
    icon: "🍛",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "western",
    title: "المأكولات الغربية",
    icon: "🍝",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "grills",
    title: "المشاوي",
    icon: "🍢",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "pastries",
    title: "المعجنات",
    icon: "🥐",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "sweets",
    title: "الحلويات",
    icon: "🍰",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "icecream",
    title: "البوظة",
    icon: "🍨",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "fruits",
    title: "الفواكه",
    icon: "🍓",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "nuts",
    title: "المكسرات",
    icon: "🥜",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "juices",
    title: "عصائر طبيعية",
    icon: "🧃",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "cold",
    title: "المشروبات الباردة",
    icon: "🥤",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "hot",
    title: "المشروبات الساخنة",
    icon: "☕",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
  {
    id: "shisha",
    title: "الأراجيل",
    icon: "💨",
    items: [
      {
        name: "صنف تجريبي",
        desc: "وصف قصير للصنف",
        image: "/menu/placeholder.jpg",
        prices: { SYP: "", USD: "", TRY: "" },
      },
    ],
  },
];
export const galleryItems = [
  {
    title: "الواجهة",
    text: "واجهة المكان وموقعه المميز على أوتستراد دمشق مقابل مدخل مدينة النبك.",
    image: "/images/front.jpg",
  },
  {
    title: "قسم المطعم",
    text: "جلسات مريحة وتجربة طعام مميزة ضمن الطابق الأول.",
    image: "/images/restaurant.jpg",
  },
  {
    title: "الكافيه والتراس",
    text: "أجواء هادئة وجلسات راقية في الطابق الثاني.",
    image: "/images/cafe-terrace.jpg",
  },
  {
    title: "صالة الأفراح",
    text: "مساحة مخصصة للمناسبات الخاصة في الطابق الثالث.",
    image: "/images/events-hall.jpg",
  },
  {
    title: "قسم الحلويات",
    text: "ركن خاص للحلويات يكمل تجربة الضيافة بنكهات مميزة.",
    image: "/images/sweets.jpg",
  },
  {
    title: "ألعاب الأطفال",
    text: "مساحة مخصصة للأطفال لتجربة عائلية أكثر راحة ومتعة.",
    image: "/images/kids-area.jpg",
  },
];
