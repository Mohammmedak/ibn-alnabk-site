"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  menuCategories,
  siteConfig,
  whatsappHref,
} from "@/lib/siteData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileQuickActions from "@/components/MobileQuickActions";
import CurrencySwitcher from "@/components/CurrencySwitcher";

export default function CategoryPage() {
  const params = useParams();
  const [currency, setCurrency] = useState("SYP");

  const category = menuCategories.find((c) => c.id === params.id);

  if (!category) {
    notFound();
  }

  const currencyLabel = {
    SYP: "ل.س",
    USD: "$",
    TRY: "₺",
  };

  const currentIndex = menuCategories.findIndex((c) => c.id === params.id);
  const prevCategory = menuCategories[currentIndex - 1];
  const nextCategory = menuCategories[currentIndex + 1];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F4EBDD] pb-24 md:pb-0">
        <section className="relative overflow-hidden bg-[#1F2E24] py-12 text-white">
          <div className="absolute inset-0">
            <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-[#C6A75E]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/menu"
              className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/90 hover:border-[#C6A75E] hover:text-[#C6A75E]"
            >
              ← كل الأقسام
            </Link>

            <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold tracking-[0.2em] text-[#E7D1A0]">
                  قسم المنيو
                </p>
                <h1 className="mt-3 flex items-center gap-3 text-4xl font-extrabold sm:text-5xl">
                  <span>{category.icon}</span>
                  <span>{category.title}</span>
                </h1>
                <p className="mt-3 text-sm text-white/70">
                  {category.items.length} صنف متوفر
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-bold text-white/70">العملة:</p>
                <CurrencySwitcher selected={currency} onChange={setCurrency} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[24px] border border-[#E8DAC1] bg-white shadow-sm">
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-4 p-4 transition hover:bg-[#FBF7EF] sm:gap-5 sm:p-5 ${
                    index !== category.items.length - 1
                      ? "border-b border-[#F0E5D0]"
                      : ""
                  }`}
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#F4EBDD] sm:h-24 sm:w-24">
                    <Image
  src={item.image}
  alt={item.name}
  fill
  className="object-cover transition group-hover:scale-110"
  sizes="96px"
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
/>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-extrabold text-[#1F2E24] sm:text-xl">
                          {item.name}
                        </h3>
                        {item.desc && (
                          <p className="mt-1 text-sm leading-6 text-[#6B655C] line-clamp-2">
                            {item.desc}
                          </p>
                        )}
                      </div>

                      <div className="shrink-0 text-left">
                        <p className="text-lg font-extrabold text-[#8D6B2D] sm:text-xl whitespace-nowrap">
                          {item.prices[currency] || "—"}
                        </p>
                        <p className="text-xs text-[#A89A82]">
                          {currencyLabel[currency]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {prevCategory ? (
                <Link
                  href={`/menu/${prevCategory.id}`}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[#D8C6A8] bg-white p-4 transition hover:border-[#C6A75E] hover:bg-[#FBF7EF]"
                >
                  <div className="text-right">
                    <p className="text-xs text-[#8D6B2D]">القسم السابق</p>
                    <p className="font-bold text-[#1F2E24]">
                      {prevCategory.icon} {prevCategory.title}
                    </p>
                  </div>
                  <span className="text-2xl text-[#8D6B2D]">→</span>
                </Link>
              ) : (
                <div />
              )}

              {nextCategory ? (
                <Link
                  href={`/menu/${nextCategory.id}`}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[#D8C6A8] bg-white p-4 transition hover:border-[#C6A75E] hover:bg-[#FBF7EF]"
                >
                  <span className="text-2xl text-[#8D6B2D]">←</span>
                  <div className="text-left">
                    <p className="text-xs text-[#8D6B2D]">القسم التالي</p>
                    <p className="font-bold text-[#1F2E24]">
                      {nextCategory.icon} {nextCategory.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>

            <div className="mt-6 rounded-[20px] border border-[#E8DAC1] bg-[#FFFDF8] p-5 text-center shadow-sm">
              <p className="text-sm text-[#6B655C]">
                💡 الأسعار قابلة للتغيير حسب توفر المكونات. للاستفسار يرجى التواصل معنا.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileQuickActions
        firstItem={{ type: "link", href: "/menu", label: "الأقسام", primary: true }}
      />
    </>
  );
}
