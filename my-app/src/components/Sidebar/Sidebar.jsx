"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTachometerAlt, FaPlus, FaUsers, FaExchangeAlt, FaChevronRight, FaChevronLeft, FaInfoCircle, FaQuestionCircle, FaUserFriends, FaFileContract, FaShieldAlt, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const [showMore, setShowMore] = useState(false);

  return (
    <aside className="h-screen w-[15vw] min-w-[200px] bg-gradient-to-br from-[#e2b656]/80 to-[#232323]/80 rounded-r-2xl shadow-xl p-6 flex flex-col gap-2 border-r border-[#232323] fixed left-0 top-0 z-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#e2b656] inline-block"></span>
          <span className="text-white font-bold text-lg">SplitEasy</span>
        </div>
        <span className="bg-[#232323] text-gray-300 px-3 py-1 rounded-full text-xs">Beta</span>
      </div>
      <div className="text-gray-300 text-sm mb-2">Main</div>
      {/* Tabs */}
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-3 rounded-xl font-semibold transition">
          <FaTachometerAlt className="text-[#e2b656]" />
          Dashboard
        </Link>
        <Link href="/add-expense" className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-3 rounded-xl font-semibold transition">
          <FaPlus className="text-[#e2b656]" />
          Add Expense
        </Link>
        <Link href="/groups" className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-3 rounded-xl font-semibold transition">
          <FaUsers className="text-[#e2b656]" />
          Groups
        </Link>
        <Link href="/settlements" className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-3 rounded-xl font-semibold transition">
          <FaExchangeAlt className="text-[#e2b656]" />
          Settlements
        </Link>
        {/* How It Works Slider */}
        <button
          className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-3 rounded-xl font-semibold transition"
          onClick={() => setShowMore((v) => !v)}
        >
          {showMore ? <FaChevronLeft className="text-[#e2b656]" /> : <FaChevronRight className="text-[#e2b656]" />}
          How It Works
        </button>
        {/* Expandable Tabs */}
        {showMore && (
          <div className="ml-6 flex flex-col gap-2 animate-slide-in">
            <Link href="/intro" className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-2 rounded-xl font-semibold transition">
              <FaInfoCircle className="text-[#e2b656]" />
              Intro
            </Link>
            <Link href="/how-it-work" className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-2 rounded-xl font-semibold transition">
              <FaQuestionCircle className="text-[#e2b656]" />
              How It Work
            </Link>
            <Link href="/create-groups" className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-2 rounded-xl font-semibold transition">
              <FaUserFriends className="text-[#e2b656]" />
              Create Groups
            </Link>
            <Link href="/terms-of-services" className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-2 rounded-xl font-semibold transition">
              <FaFileContract className="text-[#e2b656]" />
              Terms of Services
            </Link>
            <Link href="/privacy-policy" className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-2 rounded-xl font-semibold transition">
              <FaShieldAlt className="text-[#e2b656]" />
              Privacy Policy
            </Link>
            <Link href="/settings" className="flex items-center gap-3 bg-[#232323]/30 text-[#e2b656] px-4 py-2 rounded-xl font-semibold transition cursor-not-allowed">
              <FaCog />
              Settings
            </Link>
          </div>
        )}
      </nav>
    </aside>
  );
}