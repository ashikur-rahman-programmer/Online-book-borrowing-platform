// import "animate.css";
// import BookCard from "@/components/shared/BookCard";
// import SearchInput from "@/components/shared/SearchInput";
// import { booksDataFetch, categoriesDataFetch } from "@/lib/data";
// import Link from "next/link";
// import React from "react";

// const AllBooksPage = async ({ searchParams }) => {
//   const { category, search } = await searchParams;

//   const books = await booksDataFetch();
//   const categories = await categoriesDataFetch();

//   const filteredBooks = books.filter((book) => {
//     const showCategories = category
//       ? book.category?.toLowerCase() === category.toLowerCase()
//       : true;

//     const searchBooks = search
//       ? book.title?.toLowerCase().includes(search.toLowerCase())
//       : true;

//     return showCategories && searchBooks;
//   });

//   return (
//     <section className="py-10 animate__animated animate__fadeInUp">
//       <div className="container mx-auto space-y-6">
//         <div className="animate__animated animate__fadeInDown">
//           <SearchInput />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
//           {/* Sidebar */}
//           <div className="md:col-span-3 py-4 animate__animated animate__fadeInLeft">
//             <h3 className="text-xl font-semibold pb-7">Books Categories</h3>

//             <div className="flex flex-col space-y-4">
//               {categories.map((c) => (
//                 <Link key={c.id} href={`?category=${c.slug}`}>
//                   <button
//                     className={`w-full px-4 py-2 border rounded transition cursor-pointer animate__animated animate__fadeInLeft ${
//                       category === c.slug
//                         ? "bg-red-400 text-white border-red-400"
//                         : "text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
//                     }`}
//                   >
//                     {c.name}
//                   </button>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Books */}
//           <div className="md:col-span-9 py-4 animate__animated animate__fadeInRight">
//             <h2 className="text-2xl font-semibold text-center pb-6">
//               All Books
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {filteredBooks.map((book) => (
//                 <div
//                   key={book.id}
//                   className="animate__animated animate__fadeInUp"
//                 >
//                   <BookCard book={book} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllBooksPage;
