"use client";

import SearchDialog from "../SearchDialog";

export default function Hero() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-y-8">
          <div className="flex flex-col items-center justify-center text-center gap-y-4">
            <h1>Delicious Food Delivered Fasts</h1>
            <p>
              Explore Morocco’s best local dishes and global flavors — all just
              a few clicks away.
            </p>
          </div>

          <SearchDialog />
        </div>
      </div>
    </section>
  );
}
