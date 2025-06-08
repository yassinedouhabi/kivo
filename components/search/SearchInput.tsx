"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="search-bar relative w-full">
      <Input
        type="search"
        size={100}
        placeholder="Search for near food to you..."
        className="pl-10 py-6"
      />
      <Search className="absolute left-6 top-1/2 -translate-1/2" />
    </div>
  );
}
