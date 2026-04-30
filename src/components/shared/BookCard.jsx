import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm h  hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden p-4">
        <Image
          src={book.image_url}
          alt={`Cover of ${book.title}`}
          width={300}
          height={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg shadow-md object-cover "
          priority={false}
        />
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
