import Link from "next/link";
import { navLinks } from "@/lib/siteData";
import Logo from "./Logo";

function NavLinkItem({ item }) {
  return (
    <Link
      href={item.href}
      className="text-sm font-medium text-white/85 hover:text-[#C6A75E]"
    >
      {item.label}
    </Link>
  );
}

  return (
    <Link
      href={item.href}
      className="text-sm font-medium text-white/85 hover:text-[#C6A75E]"
    >
      {item.label}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#C6A75E]/20 bg-[#1F2E24]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo light />

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <NavLinkItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/menu"
            className="rounded-full bg-[#C6A75E] px-4 py-2 text-sm font-bold text-[#1F2E24] hover:bg-[#d6b56a]"
          >
            المنيو
          </Link>
        </div>
      </div>
    </header>
  );
}
