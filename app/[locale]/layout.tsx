import type { Metadata } from "next";
import { Istok_Web, Piazzolla } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const istockWeb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-istok-web",
});

const piazzolla = Piazzolla({
  subsets: ["latin", "latin-ext"],
  variable: "--font-piazzolla",
});

export const metadata: Metadata = {
  title: "Fabryka Warzyw - warzywa od rolnika",
  description:
    "Świeże warzywa i owoce od lokalnych rolników – hurt i detal. Prosto z pola do domu lub firmy. Naturalna jakość, wielopokoleniowa tradycja.",
  keywords: [
    "warzywa dla firm",
    "dostawa warzyw",
    "hurtownia warzyw",
    "świeże warzywa do restauracji",
    "warzywa od rolnika",
    "Fabryka Warzyw",
  ],
  authors: [{ name: "Fabryka Warzyw" }],
  robots: "index, follow",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang="pl-PL"
      className={`h-full ${istockWeb.variable} ${piazzolla.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <ReactLenis root>{children}</ReactLenis>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
