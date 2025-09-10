"use client";

import Link from "next/link";
import { FaEnvelope, FaPhone, FaClock, FaQuestionCircle, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black via-[#232323] to-[#e2b656] p-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <section className="flex-1">
          <button className="flex items-center gap-2 bg-[#232323] text-white px-4 py-2 rounded-full border border-white/30 shadow mb-6">
            <FaEnvelope className="text-[#e2b656] text-lg" />
            <span className="font-semibold">Contact SplitEasy</span>
          </button>
          <h1 className="text-3xl font-bold text-white mb-2">We&apos;re here to help</h1>
          <p className="text-gray-300 mb-8">
            Send us a message and we&apos;ll get back within 1 business day. For urgent billing issues, use the live chat badge below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#181818] rounded-xl p-5 shadow flex flex-col gap-2 border border-[#232323]">
              <div className="flex items-center gap-2 text-[#e2b656] font-semibold">
                <FaClock />
                <span className="text-white">Hours</span>
              </div>
              <span className="text-white font-bold">Mon–Fri, 9am–6pm</span>
            </div>
            <div className="bg-[#181818] rounded-xl p-5 shadow flex flex-col gap-2 border border-[#232323]">
              <div className="flex items-center gap-2 text-[#e2b656] font-semibold">
                <FaPhone />
                <span className="text-white">Phone</span>
              </div>
              <span className="text-white font-bold">+1 (555) 123–4567</span>
            </div>
            <div className="bg-[#181818] rounded-xl p-5 shadow flex flex-col gap-2 border border-[#232323]">
              <div className="flex items-center gap-2 text-[#e2b656] font-semibold">
                <FaEnvelope />
                <span className="text-white">Email</span>
              </div>
              <span className="text-white font-bold">support@spliteasy.app</span>
            </div>
            <div className="bg-[#181818] rounded-xl p-5 shadow flex flex-col gap-2 border border-[#232323]">
              <div className="flex items-center gap-2 text-[#e2b656] font-semibold">
                <FaQuestionCircle />
                <span className="text-white">Help Center</span>
              </div>
              <span className="text-white font-bold">Guides &amp; FAQs</span>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="flex-1 bg-[#181818] rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-[#232323]">
          <div className="flex items-center gap-2 mb-6">
            <FaEnvelope className="text-[#e2b656]" />
            <h2 className="font-semibold text-lg text-white">Send us a message</h2>
            <span className="ml-auto bg-[#232323] text-gray-300 px-3 py-1 rounded-full text-xs">~1 day reply</span>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="bg-[#232323] border border-[#444] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2b656]" />
              <input type="email" placeholder="Email address" className="bg-[#232323] border border-[#444] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2b656]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Topic (Billing, Bug, Feedback)" className="bg-[#232323] border border-[#444] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2b656]" />
              <input type="text" placeholder="Group name (optional)" className="bg-[#232323] border border-[#444] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e2b656]" />
            </div>
            <textarea rows={4} placeholder="Write your message..." className="bg-[#232323] border border-[#444] rounded-lg px-4 py-3 text-white placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-[#e2b656]" />
            
            <div className="flex items-center gap-2">
              <input type="checkbox" id="copy" className="accent-[#e2b656]" />
              <label htmlFor="copy" className="text-gray-300 text-sm">Send me a copy via email</label>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <button type="submit" className="flex items-center gap-2 bg-[#e2b656] hover:bg-[#f5d77c] text-black font-semibold rounded-lg px-6 py-3 shadow transition">
                <FaPaperPlane />
                Send Message
              </button>

              <Link href="/help" className="flex items-center gap-2 bg-[#e2b656] hover:bg-[#f5d77c] text-black font-semibold rounded-lg px-6 py-3 shadow transition">
                <FaQuestionCircle />
                View Help Center
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
