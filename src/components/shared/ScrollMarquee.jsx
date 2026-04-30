import { booksDataFetch } from "@/lib/data";
import { Button, Separator } from "@heroui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const ScrollMarquee = async () => {
  const books = await booksDataFetch();
  // console.log(books);
  return (
    <div className="bg-gray-200 text-black py-2 my-8 pr-4 flex items-center gap-4 overflow-hidden">
      <Button variant="secondary" size="lg">
        Latest Updates
      </Button>

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {books.map((book) => (
          <div key={book.id} className="flex items-center gap-4 mx-4">
            <span className="font-semibold text-sm">
              New Arrivals: {book.title}
            </span>
            <Separator
              orientation="vertical"
              className="h-6 w-[2px] bg-gray-400"
            />
            <span className="text-sm">Special Discount on Memberships...</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollMarquee;
