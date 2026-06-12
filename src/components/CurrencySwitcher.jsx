"use client";

import { currencies } from "@/lib/siteData";

export default function CurrencySwitcher({ selected, onChange }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-[#C6A75E]/30 bg-white/5 p-1 backdrop-blur">
      {currencies.map((currency) => (
        <button
          key={currency.code}
          onClick={() => onChange(currency.code)}
          className={`rounded-full px-4 py-2 text-sm font-bold transition ${
            selected === currency.code
              ? "bg-[#C6A75E] text-[#1F2E24]"
              : "text-white/70 hover:text-white"
          }`}
        >
          {currency.label}
        </button>
      ))}
    </div>
  );
}