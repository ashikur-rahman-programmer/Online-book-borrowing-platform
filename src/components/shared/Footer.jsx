import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black w-full text-white pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 place-items-center gap-10">
          {/* Logo / About */}
          <div>
            <Link href="/">
              <Image src={logoImg} alt="Logo" width={250} height={50} />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your one-stop platform for discovering, reading, and sharing
              books. Explore a wide range of categories and connect with fellow
              readers.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Email: support@bookborrow.com</li>
              <li>Phone: 112 444 7900</li>
              <li>Location: Florida, USA</li>
            </ul>
          </div>

          {/* Social Media */}
          {/* <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-red-400">
              Facebook
            </Link>
            <Link href="#" className="hover:text-red-400">
              Twitter
            </Link>
            <Link href="#" className="hover:text-red-400">
              Instagram
            </Link>
            <Link href="#" className="hover:text-red-400">
              LinkedIn
            </Link>
          </div>
        </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-red-400 text-white text-sm cursor-pointer hover:bg-red-500 transition-all">
                <FaFacebookF />
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-red-400 text-white text-sm cursor-pointer hover:bg-red-500 transition-all">
                <FaTwitter />
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-red-400 text-white text-sm cursor-pointer hover:bg-red-500 transition-all">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} BookBorrow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
