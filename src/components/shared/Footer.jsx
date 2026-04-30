import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] w-full text-white pt-16 pb-8 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">BookNest</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your one-stop platform for discovering, reading, and sharing books.
            Explore a wide range of categories and connect with fellow readers.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>Email: support@booknest.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
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
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BookNest. All rights reserved.
      </div>
    </footer>
  );
}
