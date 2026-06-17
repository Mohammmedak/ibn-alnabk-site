import Link from "next/link";
import {
  siteConfig,
  whatsappHref,
  stats,
  venueSections,
  highlights,
  galleryItems,
} from "@/lib/siteData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileQuickActions from "@/components/MobileQuickActions";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
export default function HomePage() {
  return (
    <>
      <Header />

      <main id="top" className="overflow-hidden pb-24 md:pb-0">
        {/* ===== HERO ===== */}
        <section
          className="relative py-16 text-white sm:py-24"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 46, 36, 0.88), rgba(31, 46, 36, 0.88)), url('${siteConfig.heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute -right-16 top-12 h-64 w-64 rounded-full bg-[#C6A75E]/10 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <span className="inline-flex rounded-full border border-[#C6A75E]/30 bg-[#C6A75E]/10 px-4 py-2 text-sm font-bold text-[#E7D1A0]">
                {siteConfig.slogan}
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
                {siteConfig.name}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                {siteConfig.description}
                <br />
                يقع المكان على {siteConfig.address}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/menu"
                  className="rounded-full bg-[#C6A75E] px-6 py-3 text-center font-bold text-[#1F2E24] hover:bg-[#d6b56a]"
                >
                  تصفح المنيو
                </Link>

                <a
                  href={siteConfig.phoneHref}
                  className="rounded-full border border-white/20 px-6 py-3 text-center font-bold text-white hover:border-[#C6A75E] hover:text-[#C6A75E]"
                >
                  اتصل الآن
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-center font-bold text-white hover:border-[#C6A75E] hover:text-[#C6A75E]"
                >
                  واتساب
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur"
                  >
                    <p className="text-2xl font-extrabold text-[#C6A75E]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-bold tracking-[0.2em] text-[#E7D1A0]">
                تجربة متكاملة
              </p>
              <h3 className="mt-3 text-2xl font-extrabold">
                أكثر من مطعم... وجهة كاملة
              </h3>
              <p className="mt-3 leading-7 text-white/75">
                هذا المكان يجمع بين تجربة المطعم، وأجواء الكافيه والتراس،
                وصالة الأفراح، وقسم الحلويات، ومساحة الأطفال، ضمن موقع مميز
                على الأوتستراد.
              </p>

              <div className="mt-6 space-y-4">
                {venueSections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-2xl border border-white/10 bg-black/10 p-4"
                  >
                    <p className="text-sm font-bold text-[#C6A75E]">
                      {section.title}
                    </p>
                    <h4 className="mt-1 text-lg font-bold">
                      {section.subtitle}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="bg-[#F4EBDD] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="من نحن"
                  title="مكان واحد يلبي تجربة العائلة والضيافة والمناسبات"
                  description="في مطعم واستراحة ابن النبك نقدم تجربة متكاملة تجمع بين الطعام المميز، الجلسات المريحة، أجواء الكافيه الراقية، وصالة الأفراح المناسبة لأجمل المناسبات. الموقع مثالي للعائلات والأصدقاء والمسافرين على الطريق."
                />

                <div className="space-y-4 text-base leading-8 text-[#4F4A43]">
                  <p>
                    تم تصميم الهوية والموقع ليعكسا فكرة أن المكان ليس مجرد
                    مطعم، بل محطة متكاملة تضم أقسامًا متعددة ضمن أجواء مريحة
                    وأنيقة.
                  </p>
                  <p>
                    نحن نؤمن بأن التجربة المتكاملة تبدأ من المكان نفسه، ولهذا السبب تم تصميم المكان ليقدم كل ما تحتاجه لقضاء وقت ممتع مع العائلة والأصدقاء.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#E7D7BC] bg-[#FFFDF8] p-6 shadow-sm">
                  <p className="text-sm font-bold text-[#8D6B2D]">الموقع</p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#1F2E24]">
                    على الأوتستراد مباشرة
                  </h3>
                  <p className="mt-3 leading-7 text-[#5A544B]">
                    مقابل شرطة الطرق العامة - مدخل مدينة النبك الرئيسي، ليكون الوصول إليه سهلًا للزوار
                    والمسافرين.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#E7D7BC] bg-[#FFFDF8] p-6 shadow-sm">
                  <p className="text-sm font-bold text-[#8D6B2D]">الأجواء</p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#1F2E24]">
                    عائلية وراقية
                  </h3>
                  <p className="mt-3 leading-7 text-[#5A544B]">
                    أقسام متنوعة تمنح الزائر تجربة مرنة بين الطعام، الجلسات،
                    الأطفال، والحلويات.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#E7D7BC] bg-[#FFFDF8] p-6 shadow-sm sm:col-span-2">
                  <p className="text-sm font-bold text-[#8D6B2D]">الفكرة</p>
                  <h3 className="mt-2 text-xl font-extrabold text-[#1F2E24]">
                    QR على الطاولات + منيو واضح
                  </h3>
                  <p className="mt-3 leading-7 text-[#5A544B]">
                    الزبون يستطيع مسح الكود والانتقال مباشرة إلى صفحة المنيو أو
                    الموقع، مع إمكانية الاتصال أو الطلب عبر واتساب بسهولة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTIONS ===== */}
        <section id="sections" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="أقسامنا"
              title="تنظيم واضح لكل طابق وقسم"
              description="تم تقسيم الاستراحة إلى عدة مستويات وأقسام لتقديم تجربة متكاملة تناسب مختلف الزوار والمناسبات."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {venueSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[28px] border border-[#E8DAC1] bg-[#FFFDF8] p-7 shadow-sm"
                >
                  <p className="text-sm font-bold tracking-[0.15em] text-[#8D6B2D]">
                    {section.title}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-[#1F2E24]">
                    {section.subtitle}
                  </h3>
                  <p className="mt-4 leading-8 text-[#5A544B]">
                    {section.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#C6A75E]/12 px-4 py-2 text-sm font-bold text-[#8D6B2D]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HIGHLIGHTS ===== */}
        <section className="bg-[#F4EBDD] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="مميزات المكان"
              title="تفاصيل تزيد من قوة البراند وتجربة الزوار"
              description="هذه العناصر هي التي تميز المكان وتجعله أكثر من مجرد مطعم تقليدي."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[#E8DAC1] bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-extrabold text-[#1F2E24]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-[#5A544B]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GALLERY ===== */}
        <section id="gallery" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="المعرض"
              title="لمحة بصرية عن أقسام المكان"
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {galleryItems.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[28px] border border-[#E8DAC1] bg-[#FFFDF8] shadow-sm"
                >
                  <div
                    className="flex h-64 items-center justify-center bg-[#1F2E24]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(31, 46, 36, 0.25), rgba(31, 46, 36, 0.25)), url('${item.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span className="rounded-full bg-black/30 px-4 py-2 text-sm font-bold text-white/70 backdrop-blur">
                      سيتم إضافة الصورة قريبًا
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-extrabold text-[#1F2E24]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-8 text-[#5A544B]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EVENTS ===== */}
        <section id="events" className="bg-[#F4EBDD] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[32px] bg-[#1F2E24] px-6 py-10 text-white shadow-2xl sm:px-10">
              <SectionHeading
                eyebrow="صالة الأفراح"
                title="مناسباتكم الخاصة في أجواء أنيقة"
                description="يضم المكان صالة أفراح مخصصة لاستقبال المناسبات الخاصة، مع إمكانية الاستفسار والتنسيق عبر الهاتف أو واتساب مباشرة."
                light
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="rounded-full bg-[#C6A75E] px-6 py-3 text-center font-bold text-[#1F2E24] hover:bg-[#d6b56a]"
                >
                  اتصل للاستفسار
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-center font-bold text-white hover:border-[#C6A75E] hover:text-[#C6A75E]"
                >
                  تواصل واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT + MAP ===== */}
        <section id="contact" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="تواصل معنا"
              title="الوصول والتواصل بسرعة"
              description="يمكنكم التواصل معنا مباشرة عبر الهاتف أو واتساب أو زيارتنا في الموقع."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-[#E8DAC1] bg-[#FFFDF8] p-7 shadow-sm">
                <p className="text-sm font-bold tracking-[0.15em] text-[#8D6B2D]">
                  العنوان
                </p>
                <h3 className="mt-3 text-2xl font-extrabold text-[#1F2E24]">
                  {siteConfig.address}
                </h3>
                <p className="mt-4 leading-8 text-[#5A544B]">
                  موقع مميز على أوتستراد دمشق، مقابل شرطة الطرق العامة - مدخل مدينة النبك.الرئيسي
                </p>

                <div className="mt-6 space-y-3 text-[#4F4A43]">
  <p>
    <span className="font-bold text-[#1F2E24]">الهاتف:</span>{" "}
    {siteConfig.phoneDisplay}
  </p>
  <p>
    <span className="font-bold text-[#1F2E24]">
      أوقات الدوام:
    </span>{" "}
    {siteConfig.workingHours}
  </p>
</div>

<div className="mt-6 border-t border-[#F0E5D0] pt-6">
  <p className="mb-3 text-sm font-bold text-[#8D6B2D]">تابعنا على</p>
  <SocialLinks size="md" />
</div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={siteConfig.phoneHref}
                    className="rounded-2xl bg-[#1F2E24] px-5 py-4 text-center font-bold text-white hover:bg-[#18241c]"
                  >
                    اتصال مباشر
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-[#D8C6A8] px-5 py-4 text-center font-bold text-[#1F2E24] hover:border-[#C6A75E] hover:text-[#8D6B2D]"
                  >
                    واتساب
                  </a>

                  <Link
                    href="/menu"
                    className="rounded-2xl border border-[#D8C6A8] px-5 py-4 text-center font-bold text-[#1F2E24] hover:border-[#C6A75E] hover:text-[#8D6B2D]"
                  >
                    افتح المنيو
                  </Link>

                  <a
                    href={siteConfig.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-[#D8C6A8] px-5 py-4 text-center font-bold text-[#1F2E24] hover:border-[#C6A75E] hover:text-[#8D6B2D]"
                  >
                    افتح الخريطة
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[#E8DAC1] bg-[#FFFDF8] shadow-sm">
                <iframe
                  src={siteConfig.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع المطعم على الخريطة"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileQuickActions />
    </>
  );
}