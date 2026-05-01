import BookCard from "@/components/shared/BookCard";
import { booksDataFetch } from "@/lib/data";
import { Input } from "@heroui/react";
import React from "react";

const AllBooksPage = async () => {
  const books = await booksDataFetch();

  return (
    <section className="  py-10">
      <div className="container mx-auto space-y-6">
        <div className="w-11/12 mx-auto">
          <Input fullWidth placeholder="Search books..." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">
          <div className="md:col-span-3   py-4">
            <h3 className="text-xl font-semibold pb-6 ">Books Categories</h3>
          </div>
          <div className="md:col-span-9   py-4">
            <h2 className="text-2xl font-semibold text-center pb-6">
              All Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBooksPage;
