"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="bg-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-between py-6">
          <div className="logo">
            <h1 className="text-primary">{t("title")}</h1>
          </div>
          <div className="auth-buttons flex flex-row flex-nowrap items-center gap-x-2">
            <Button size="sm" variant="outline">
              {t("login")}
            </Button>
            <Button size="sm" variant="default">
              {t("signUp")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
