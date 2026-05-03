"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "animate.css";

export default function Footer() {
  return (
    <footer className="bg-black w-full text-white pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 md:place-items-center gap-10">
          {/* Logo / About */}
          <div className="animate__animated animate__fadeInUp">
            <Link href="/">
              <Image src={logoImg} alt="Logo" width={250} height={50} />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              Your one-stop platform for discovering, reading, and sharing
              books. Explore a wide range of categories and connect with fellow
              readers.
            </p>
          </div>

          {/* Contact */}
          <div
            className="animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Email: support@bookborrow.com</li>
              <li>Phone: 112 444 7900</li>
              <li>Location: Florida, USA</li>
            </ul>
          </div>

          {/* Social */}
          <div
            className="animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-2">
              {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <span
                  key={i}
                  className="
                    w-8 h-8 flex items-center justify-center 
                    bg-red-400 text-white text-sm cursor-pointer 
                    hover:bg-red-500 transition-all
                    animate__animated animate__zoomIn
                  "
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <Icon />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400 animate__animated animate__fadeIn">
          © {new Date().getFullYear()} BookBorrow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
