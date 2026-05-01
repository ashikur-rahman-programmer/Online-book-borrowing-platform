import BookCard from "@/components/shared/BookCard";
import { booksDataFetch, categoriesDataFetch } from "@/lib/data";
import { Input } from "@heroui/react";
import Link from "next/link";
import React from "react";

const AllBooksPage = async ({ searchParams }) => {
  const { category } = await searchParams;

  const books = await booksDataFetch();
  const categories = await categoriesDataFetch();

  const filteredBooks = category
    ? books.filter(
        (book) => book.category?.toLowerCase() === category.toLowerCase(),
      )
    : books;

  return (
    <section className="  py-10">
      <div className="container mx-auto space-y-6">
        <div className="w-11/12 mx-auto">
          <Input fullWidth placeholder="Search books..." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">
          <div className="md:col-span-3   py-4">
            <h3 className="text-xl font-semibold pb-7 ">Books Categories</h3>
            <div className="flex flex-col  space-y-4">
              {categories.map((c) => (
                <Link key={c.id} href={`?category=${c.slug}`}>
                  <button
                    className={`w-full px-4 py-2 border rounded transition cursor-pointer ${
                      category === c.slug
                        ? "bg-red-400 text-white border-red-400"
                        : "text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                    }`}
                  >
                    {c.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-9   py-4">
            <h2 className="text-2xl font-semibold text-center pb-6">
              All Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBooks.map((book) => (
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
