import Link from "next/link";
import { siteConfig, whatsappHref } from "@/lib/siteData";

function QuickItem({ item }) {
  const baseClass = item.primary
    ? "rounded-xl bg-[#C6A75E] px-2 py-3 font-bold text-[#1F2E24]"
    : "rounded-xl px-2 py-3 font-bold";

  if (item.type === "link") {
    return (
      <Link href={item.href} className={baseClass}>
        {item.label}
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      target={item.newTab ? "_blank" : undefined}
      rel={item.newTab ? "noreferrer" : undefined}
      className={baseClass}
    >
      {item.label}
    </a>
  );
}

export default function MobileQuickActions({
  firstItem = { type: "link", href: "/menu", label: "المنيو", primary: true },
}) {
  const items = [
    firstItem,
    { type: "anchor", href: siteConfig.phoneHref, label: "اتصال" },
    {
      type: "anchor",
      href: whatsappHref,
      label: "واتساب",
      newTab: true,
    },
    {
      type: "anchor",
      href: siteConfig.mapsHref,
      label: "الموقع",
      newTab: true,
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="grid grid-cols-4 gap-2 rounded-2xl border border-[#C6A75E]/20 bg-[#1F2E24]/95 p-2 text-center text-xs text-white shadow-2xl backdrop-blur">
        {items.map((item) => (
          <QuickItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}