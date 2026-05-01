import { Montserrat } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online book borrowing platform",
  description:
    "An online book borrowing platform built with Next.js, allowing users to browse and borrow books from a digital library.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-gray-100">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
