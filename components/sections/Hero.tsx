"use client";

import { useTranslations } from "next-intl";

import SearchDialog from "../search/SearchDialog";

export default function Hero() {
  const t = useTranslations("HomePage.HeroSection");
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-y-8">
          <div className="flex flex-col items-center justify-center text-center gap-y-4">
            <h1>{t("title")}</h1>
            <p>{t("description")}</p>
          </div>

          <SearchDialog />
        </div>
      </div>
    </section>
  );
}
