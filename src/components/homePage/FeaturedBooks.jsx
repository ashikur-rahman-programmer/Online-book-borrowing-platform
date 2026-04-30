import { booksDataFetch } from "@/lib/data";
import React from "react";
import BookCard from "../shared/BookCard";
import { Button } from "@heroui/react";
import Link from "next/link";

const FeaturedBooks = async () => {
  const books = await booksDataFetch();
  return (
    <section className="w-full py-10 ">
      <div className="container mx-auto text-center md:text-left space-y-5 py-10">
        <h2 className="text-3xl font-bold">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.slice(0, 4).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <Link href="/all-books" className="flex justify-center">
          {/* <Button variant="primary" size="lg" className="mt-5">
          View All Books
        </Button> */}
          <button className="mt-10 px-6 py-2 border border-red-400 text-red-400 rounded hover:bg-red-400 hover:text-white transition cursor-pointer">
            View All Books
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedBooks;
