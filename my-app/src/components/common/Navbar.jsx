"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  function handleAuth() {
    router.push("/auth");
  }

  return (
    <nav className="bg-[#181818] text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="font-bold text-xl text-[#e2b656]">
          SplitEasy
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-5 text-sm font-semibold">
        <li>
          <Link href="/group">
            <span className="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-600 transition cursor-pointer">
              Groups
            </span>
          </Link>
        </li>
        <li>
          <Link href="/HowItWork">
            <span className="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-600 transition cursor-pointer">
              How It Works
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Terms">
            <span className="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-600 transition cursor-pointer">
              Terms
            </span>
          </Link>
        </li>
        <li>
          <Link href="/PrivacyPolicy">
            <span className="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-600 transition cursor-pointer">
              Privacy
            </span>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <span className="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-600 transition cursor-pointer">
              Contact
            </span>
          </Link>
        </li>
      </ul>

      {/* Auth/User Section */}
      <div className="hidden md:block">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-[#e2b656] font-semibold">{user.name}</span>
            <button
              className="bg-[#232323] text-white px-4 py-2 rounded-lg"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="px-4 py-1 rounded-full bg-yellow-600 hover:bg-yellow-700 font-semibold text-black transition"
            onClick={handleAuth}
          >
            Login / Sign-up
          </button>
        )}
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button aria-label="Toggle menu" className="focus:outline-none">
          <svg
            className="w-6 h-6 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
