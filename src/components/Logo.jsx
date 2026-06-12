import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteData";

export default function Logo({
  href = "/",
  withText = true,
  light = false,
  className = "",
  size = "md",
}) {
  const textPrimary = light ? "text-white" : "text-[#1F2E24]";
  const textSecondary = light ? "text-white/60" : "text-[#6B655C]";
  const markBorder = light
    ? "border-[#C6A75E]/40 bg-[#C6A75E]/10 text-[#C6A75E]"
    : "border-[#C6A75E]/30 bg-[#C6A75E]/10 text-[#8D6B2D]";

  const hasLogo = Boolean(siteConfig.logoSrc);

  const sizes = {
    sm: { box: "h-12 w-12", img: "48px" },
    md: { box: "h-16 w-16", img: "64px" },
    lg: { box: "h-24 w-24", img: "96px" },
  };

  const currentSize = sizes[size] || sizes.md;

  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      {hasLogo ? (
        <div
          className={`relative ${currentSize.box} overflow-hidden rounded-2xl bg-white shadow-md`}
        >
          <Image
            src={siteConfig.logoSrc}
            alt={siteConfig.logoAlt}
            fill
            className="object-contain p-1"
            sizes={currentSize.img}
          />
        </div>
      ) : (
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full border text-lg font-extrabold ${markBorder}`}
        >
          ا
        </div>
      )}

      {withText && (
        <div>
          <p className={`text-lg font-extrabold ${textPrimary}`}>
            {siteConfig.shortName}
          </p>
          <p className={`text-xs ${textSecondary}`}>مطعم واستراحة</p>
        </div>
      )}
    </div>
  );

  if (!href) return content;

  return <Link href={href}>{content}</Link>;
}