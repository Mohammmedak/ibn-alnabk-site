import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata = {
  title: {
    default: "مطعم واستراحة ابن النبك",
    template: "%s | ابن النبك",
  },
  description:
    "مطعم واستراحة ابن النبك — وجهتكم المتكاملة على أوتستراد دمشق مقابل شرطة الطرق العامة - مدخل مدينة النبك الرئيسي، كافيه وتراس، صالة أفراح، حلويات، وألعاب أطفال في مكان واحد.",
  keywords: [
    "مطعم ابن النبك",
    "استراحة النبك",
    "مطعم النبك",
    "كافيه النبك",
    "صالة أفراح النبك",
    "حلويات النبك",
    "أوتستراد دمشق",
    "مطعم عائلي سوريا",
  ],
  authors: [{ name: "ابن النبك" }],
  openGraph: {
    title: "مطعم واستراحة ابن النبك",
    description:
      "وجهتكم المتكاملة في النبك — مطعم، كافيه، صالة أفراح، وحلويات في مكان واحد.",
    type: "website",
    locale: "ar_SY",
  },
  twitter: {
    card: "summary_large_image",
    title: "مطعم واستراحة ابن النبك",
    description: "وجهتكم المتكاملة في النبك",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${tajawal.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}