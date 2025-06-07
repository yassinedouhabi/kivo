"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="search-bar relative w-full">
          <Input
            type="search"
            size={100}
            placeholder="Search for near food to you..."
            className="pl-10 py-6"
          />
          <Search className="absolute left-6 top-1/2 -translate-1/2" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>Enter your search query below:</DialogDescription>
        </DialogHeader>
        <div className="search-bar relative w-full">
          <Input
            type="search"
            size={100}
            placeholder="Search for near food to you..."
            className="pl-10 py-6"
          />
          <Search className="absolute left-6 top-1/2 -translate-1/2" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
