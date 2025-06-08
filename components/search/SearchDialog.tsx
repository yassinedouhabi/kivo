"use client";

import SearchInput from "@/components/search/SearchInput";

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
        <SearchInput />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>Enter your search query below:</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-y-8 max-h-96">
          {/* Search Input */}
          <SearchInput />

          {/* Search Result */}
          <div className="h-full overflow-auto">
            <p>No result</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
