import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm h  hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="p-4">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-50 border">
          <Image
            src={book.image_url}
            alt={`Cover of ${book.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover  "
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{book.title}</h2>

        <Link href={`/all-books/${book.id}`}>
          <Button variant="secondary" size="lg" className="mt-2 w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
