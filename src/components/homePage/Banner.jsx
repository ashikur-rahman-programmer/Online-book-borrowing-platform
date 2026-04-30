import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="py-10 text-center">
      <h1
        className="text-5xl md:text-7xl font-bold mb-4 tracking-tight
          bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 
          bg-clip-text text-transparent animate-gradient-x"
      >
        Find Your Next Read
      </h1>
      <Link href="/all-books">
        <Button className="mt-4" variant="primary">
          Browse Now
        </Button>
      </Link>
    </div>
  );
};

export default Banner;
