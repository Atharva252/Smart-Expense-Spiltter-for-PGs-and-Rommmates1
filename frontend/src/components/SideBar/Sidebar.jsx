"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaPlus,
  FaUsers,
  FaExchangeAlt,
  FaChevronRight,
  FaChevronLeft,
  FaInfoCircle,
  FaQuestionCircle,
  FaFileContract,
  FaShieldAlt,
  FaCog, // ⚙️ for settings
} from "react-icons/fa";

export default function Sidebar() {
  const [showMore, setShowMore] = useState(false);
  const pathname = usePathname();

  // helper fn
  const linkClasses = (href) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition ${
      pathname === href
        ? "bg-[#e2b656] text-black"
        : "bg-[#232323]/60 hover:bg-[#232323]/80 text-white"
    }`;

  return (
    <aside className="h-screen w-[15vw] min-w-[200px] bg-gradient-to-br from-[#e2b656]/80 to-[#232323]/80 rounded-r-2xl shadow-xl p-6 flex flex-col gap-2 border-r border-[#232323] fixed left-0 top-0 z-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#e2b656] inline-block"></span>
          <span className="text-white font-bold text-lg">SplitEasy</span>
        </div>
        <span className="bg-[#232323] text-gray-300 px-3 py-1 rounded-full text-xs">
          Beta
        </span>
      </div>

      <div className="text-gray-300 text-sm mb-2">Main</div>

      {/* Tabs */}
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className={linkClasses("/dashboard")}>
          <FaTachometerAlt className="text-[#e2b656]" />
          Dashboard
        </Link>

        <Link href="/AddExpences" className={linkClasses("/AddExpences")}>
          <FaPlus className="text-[#e2b656]" />
          Add Expense
        </Link>

        <Link href="/group" className={linkClasses("/group")}>
          <FaUsers className="text-[#e2b656]" />
          Groups
        </Link>

        <Link href="/Settlement" className={linkClasses("/Settlement")}>
          <FaExchangeAlt className="text-[#e2b656]" />
          Settlements
        </Link>

        {/* How It Works Slider */}
        <button
          className="flex items-center gap-3 bg-[#232323]/60 hover:bg-[#232323]/80 text-white px-4 py-3 rounded-xl font-semibold transition"
          onClick={() => setShowMore((v) => !v)}
        >
          {showMore ? (
            <FaChevronLeft className="text-[#e2b656]" />
          ) : (
            <FaChevronRight className="text-[#e2b656]" />
          )}
          How It Works
        </button>

        {showMore && (
          <div className="ml-6 flex flex-col gap-2 animate-slide-in">
            <Link href="/Intro" className={linkClasses("/Intro")}>
              <FaInfoCircle className="text-[#e2b656]" />
              Intro
            </Link>
            <Link href="/HowItWork" className={linkClasses("/HowItWork")}>
              <FaQuestionCircle className="text-[#e2b656]" />
              How It Works
            </Link>
            <Link href="/Terms" className={linkClasses("/Terms")}>
              <FaFileContract className="text-[#e2b656]" />
              Terms of Service
            </Link>
            <Link href="/PrivacyPolicy" className={linkClasses("/PrivacyPolicy")}>
              <FaShieldAlt className="text-[#e2b656]" />
              Privacy Policy
            </Link>
          </div>
        )}

        {/* Settings (added below How It Works) */}
        <Link href="/Setting" className={linkClasses("/Setting")}>
          <FaCog className="text-[#e2b656]" />
          Settings
        </Link>

        {/* Contact Page */}
        <Link href="/contacts" className={linkClasses("/contacts")}>
          <FaInfoCircle className="text-[#e2b656]" />
          Contact
        </Link>
      </nav>
    </aside>
  );
}
