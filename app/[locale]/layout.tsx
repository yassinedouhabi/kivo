import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";

import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ModeToggle } from "@/components/theme/ModeToggle";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { RenderMounted } from "@/components/theme/RenderMounted";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kivo | Order Food Online — Fast & Fresh Delivery in Morocco",
  description:
    "Order your favorite meals and groceries online with Kivo. Fast, fresh food delivery across Morocco — from local restaurants to top brands. Simple, quick, reliable.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${notoSans.variable} antialiased`}>
        <RenderMounted>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider locale={locale}>
              <Header />
              <main>{children}</main>
              <div className="fixed bottom-6 right-6">
                <ModeToggle />
              </div>
            </NextIntlClientProvider>
          </ThemeProvider>
        </RenderMounted>
      </body>
    </html>
  );
}
