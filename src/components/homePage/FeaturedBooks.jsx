import { booksDataFetch } from "@/lib/data";
import React from "react";
import BookCard from "../shared/BookCard";
import Link from "next/link";

const FeaturedBooks = async () => {
  const books = await booksDataFetch();

  return (
    <section className="w-full py-10">
      <div className="container mx-auto text-center md:text-left space-y-5 py-10">
        {/* Title */}
        <h2 className="text-3xl font-bold animate__animated animate__fadeInUp">
          Featured Books
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.slice(0, 4).map((book, index) => (
            <div
              key={book.id}
              className={`animate__animated animate__fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>

        {/* Button */}
        <Link href="/all-books" className="flex justify-center">
          <button
            className="
              mt-10 px-6 py-2 border border-red-400 text-red-400
              rounded hover:bg-red-400 hover:text-white transition cursor-pointer
              animate__animated animate__fadeInUp
            "
            style={{ animationDelay: "0.5s" }}
          >
            View All Books
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedBooks;
