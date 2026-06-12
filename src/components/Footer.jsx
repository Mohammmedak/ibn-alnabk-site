import Link from "next/link";
import { siteConfig, whatsappHref } from "@/lib/siteData";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[#C6A75E]/15 bg-[#1F2E24] py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <Logo light href="/" size="sm" />
          <p className="mt-2 text-sm text-white/60">{siteConfig.slogan}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/menu"
            className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-[#C6A75E] hover:text-[#C6A75E]"
          >
            المنيو
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-[#C6A75E] hover:text-[#C6A75E]"
          >
            اتصال
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-[#C6A75E] hover:text-[#C6A75E]"
          >
            واتساب
          </a>
        </div>
      </div>
    </footer>
  );
}