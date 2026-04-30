import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full bg-[#e9dfdb]">
      <div className="text-center py-10 md:py-30">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight
          bg-gradient-to-r from-red-500 to-purple-600 
          bg-clip-text text-transparent animate-gradient-x"
        >
          Find Your Next Read
        </h1>
        <Link href="/all-books">
          {/* <Button className="mt-4 text-xl bg-red-400" variant="primary">
          Browse Now
        </Button> */}
          <button className="mt-10 px-6 py-2 border border-red-400 text-red-400 rounded hover:bg-red-400 hover:text-white transition cursor-pointer">
            Browse Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
