import { booksDataFetch } from "@/lib/data";
import React from "react";
import BookCard from "../shared/BookCard";

const FeaturedBooks = async () => {
  const books = await booksDataFetch();
  return (
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4">Featured Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.slice(0, 4).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
