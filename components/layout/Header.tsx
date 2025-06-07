"use client";

import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="bg-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-between py-6">
          <div className="logo">
            <h1 className="text-primary">Header</h1>
          </div>
          <div className="auth-buttons flex flex-row flex-nowrap items-center gap-x-2">
            <Button size="sm" variant="outline">
              Login
            </Button>
            <Button size="sm" variant="default">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
