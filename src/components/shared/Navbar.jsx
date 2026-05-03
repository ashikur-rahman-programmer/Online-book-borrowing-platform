"use client";
import "animate.css";
import { useState } from "react";
import { Link, Button, Spinner } from "@heroui/react";
import logoImg from "@/assets/logo.png";
import NavLink from "./NavLink";
import Image from "next/image";
import { authClient, useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="w-full sticky top-0 z-40 border-b border-separator bg-background/70 backdrop-blur-lg animate__animated animate__fadeInDown">
      <header className="container mx-auto flex h-16 items-center justify-between animate__animated animate__fadeInDown">
        <div className="flex items-center gap-2 md:gap-4">
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

        <ul className="hidden items-center gap-4 md:flex animate__animated animate__fadeIn">
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

        {isPending ? (
          <Spinner color="success" />
        ) : user ? (
          <div className="flex items-center gap-2 md:gap-4 animate__animated animate__fadeInRight">
            <p className="text-xs md:text-lg whitespace-nowrap md:whitespace-normal pl-1 flex flex-col md:gap-2 md:flex-row tracking-tight bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              <span>Welcome,</span> {user.name}!
            </p>

            <button
              onClick={async () => {
                toast.success("Logging out...");
                await authClient.signOut();
                router.push("/login");
                router.refresh();
              }}
              className="px-3 py-1.5 md:px-4 md:py-2 border border-red-400 text-red-400 rounded hover:bg-red-400 hover:text-white transition cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink href="/login">
            <button className="px-4 py-2 border border-red-400 text-red-400 rounded hover:bg-red-400 hover:text-white transition cursor-pointer">
              Login
            </button>
          </NavLink>
        )}
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator md:hidden animate__animated animate__fadeInDown">
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
          </ul>
        </div>
      )}
    </nav>
  );
}
