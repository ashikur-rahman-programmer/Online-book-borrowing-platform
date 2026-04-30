"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import logoImg from "@/assets/logo.png";
import NavLink from "./NavLink";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-40  border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="container mx-auto flex h-16  items-center justify-between ">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <Link href="/">
            <Image src={logoImg} alt="Logo" width={150} height={50} />
          </Link>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/all-books">All Books</NavLink>
          </li>
          <li>
            <NavLink href="/my-profile">My Profile</NavLink>
          </li>
        </ul>
        <div className="  items-center gap-4  flex">
          <NavLink href="/login">
            <Button variant="secondary" size="lg">
              Login
            </Button>
          </NavLink>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <NavLink href="/" className="block py-2">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/all-books" className="block py-2">
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink href="/my-profile" className="block py-2">
                My Profile
              </NavLink>
            </li>
            {/* <li className="mt-4  ">
              <NavLink href="/login" className="block w-full">
                <Button variant="tertiary" className="w-full">
                  Login
                </Button>
              </NavLink>
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
}
