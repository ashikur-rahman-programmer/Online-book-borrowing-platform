"use client";
import { Input } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (inputValue) => {
    const params = new URLSearchParams(searchParams);

    inputValue ? params.set("search", inputValue) : params.delete("search");

    router.push(`?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="w-11/12 mx-auto">
      <Input
        className="p-4  "
        fullWidth
        placeholder="Search books..."
        defaultValue={searchParams.get("search"?.toString())}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
