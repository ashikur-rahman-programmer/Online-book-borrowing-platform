"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";

export default function BookCard({ book }) {
  return (
    <div
      className="
        border rounded-lg overflow-hidden shadow-sm 
        hover:shadow-xl hover:-translate-y-2 transition-all duration-300
        animate__animated animate__fadeInUp
      "
    >
      {/* Image */}
      <div className="p-4">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-50 border">
          <Image
            src={book.image_url}
            alt={`Cover of ${book.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{book.title}</h2>

        <Link href={`/all-books/${book.id}`}>
          <Button
            variant="secondary"
            size="lg"
            className="mt-2 w-full animate__animated animate__fadeInUp"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
