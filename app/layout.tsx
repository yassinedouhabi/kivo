import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";

import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ModeToggle";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kivo | Order Food Online — Fast & Fresh Delivery in Morocco",
  description:
    "Order your favorite meals and groceries online with Kivo. Fast, fresh food delivery across Morocco — from local restaurants to top brands. Simple, quick, reliable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <div className="absolute bottom-2 right-2">
            <ModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
