import Link from "next/link";
import { menuCategories, siteConfig, whatsappHref } from "@/lib/siteData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileQuickActions from "@/components/MobileQuickActions";

export const metadata = {
  title: "المنيو",
};

export default function MenuPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F4EBDD] pb-24 md:pb-0">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden bg-[#1F2E24] py-14 text-white">
          <div className="absolute inset-0">
            <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-[#C6A75E]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/90 hover:border-[#C6A75E] hover:text-[#C6A75E]"
            >
              ← العودة للرئيسية
            </Link>

            <div className="mt-6">
              <p className="text-sm font-bold tracking-[0.2em] text-[#E7D1A0]">
                قائمة الطعام
              </p>
              <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
                منيو {siteConfig.shortName}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                اختر القسم الذي ترغب في تصفحه من أصنافنا المتنوعة.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href={siteConfig.phoneHref}
                className="rounded-2xl bg-[#C6A75E] px-5 py-4 text-center font-bold text-[#1F2E24] hover:bg-[#d6b56a]"
              >
                📞 اتصال مباشر
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-5 py-4 text-center font-bold text-white hover:border-[#C6A75E] hover:text-[#C6A75E]"
              >
                💬 واتساب
              </a>

              <a
                href={siteConfig.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 px-5 py-4 text-center font-bold text-white hover:border-[#C6A75E] hover:text-[#C6A75E]"
              >
                📍 الموقع
              </a>
            </div>
          </div>
        </section>

        {/* ===== CATEGORIES GRID ===== */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-bold tracking-[0.15em] text-[#8D6B2D]">
                الأقسام المتوفرة
              </p>
              <h2 className="mt-1 text-3xl font-extrabold text-[#1F2E24]">
                اختر القسم الذي يناسبك
              </h2>
            </div>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {menuCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/menu/${category.id}`}
                  className="group relative overflow-hidden rounded-[24px] border border-[#E8DAC1] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#C6A75E]/10 transition group-hover:scale-125 group-hover:bg-[#C6A75E]/20" />

                  <div className="relative flex flex-col items-center text-center">
                    <span className="text-5xl transition group-hover:scale-110">
                      {category.icon}
                    </span>

                    <h3 className="mt-4 text-lg font-extrabold text-[#1F2E24]">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#8D6B2D]">
                      {category.items.length} صنف
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#8D6B2D] transition group-hover:text-[#1F2E24]">
                      عرض الأصناف ←
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileQuickActions
        firstItem={{ type: "link", href: "/", label: "الرئيسية", primary: true }}
      />
    </>
  );
}