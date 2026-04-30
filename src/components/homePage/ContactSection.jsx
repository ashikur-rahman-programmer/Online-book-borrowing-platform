"use client";

import {
  FaCommentDots,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-[#e9dfdb] py-20 px-4 text-center">
      <p className="text-sm tracking-widest text-red-400 mb-2">CONTACT</p>

      <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-4">
        Write anything
      </h2>

      <div className="flex justify-center items-center gap-2 mb-14">
        <div className="h-[1px] w-16 bg-red-300"></div>
        <div className="w-3 h-3 bg-red-300 rotate-45"></div>
        <div className="h-[1px] w-16 bg-red-300"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-left">
        <div className="md:col-span-2 bg-[#d8ccc7] p-8 rounded-sm">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 bg-[#efe5e1] outline-none text-sm"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 bg-[#efe5e1] outline-none text-sm"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-3 py-2 bg-[#efe5e1] outline-none text-sm"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-3 py-2 bg-[#efe5e1] outline-none text-sm"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-red-400 text-white text-sm hover:bg-red-500 transition"
              >
                Send Now
              </button>
            </div>
          </form>
        </div>

        <div className="bg-[#d8ccc7] p-8 rounded-sm space-y-6">
          <div>
            <p className="text-xs text-gray-600 font-semibold mb-1">ADDRESS:</p>
            <p className="text-sm text-[#2c3e50]">
              16, Lankaway <br />
              Florida, USA 99544
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-600 font-semibold mb-1">PHONE:</p>
            <p className="text-sm text-[#2c3e50]">112 444 7900</p>
          </div>

          <div>
            <p className="text-xs text-gray-600 font-semibold mb-1">EMAIL:</p>
            <p className="text-sm text-[#2c3e50]"> support@bookborrow.com</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#2c3e50] mb-2">
              Connect our socials
            </p>

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
              <span className="w-8 h-8 flex items-center justify-center bg-red-400 text-white text-sm cursor-pointer hover:bg-red-500 transition-all">
                <FaYoutube />
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-red-400 text-white text-sm cursor-pointer hover:bg-red-500 transition-all">
                <FaCommentDots />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
