"use client";

import { useState } from "react";
import { FaFilm, FaBullseye, FaStar } from "react-icons/fa"; // ✅ React Icons

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#121212] px-4 py-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        
        {/* LEFT SIDE CARD */}
        <section className="bg-[#181818] rounded-2xl overflow-hidden flex flex-col">
          <div className="flex items-center gap-2 p-5">
            <span className="w-3 h-3 rounded-full bg-[#c79c44]" />
            <h2 className="text-sm md:text-base font-medium">
              Roommates that feel like friends
            </h2>
          </div>
          <div className="px-5">
            <img
              src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              alt="Roommates lifestyle"
              className="rounded-xl object-cover w-full"
            />
          </div>
          <ul className="flex flex-col gap-3 text-sm text-gray-300 px-5 py-6">
            <li className="flex items-center gap-3">
              <FaFilm className="text-[#c79c44]" /> {/* Movie icon */}
              Movie nights, shared meals, good vibes
            </li>
            <li className="flex items-center gap-3">
              <FaBullseye className="text-[#c79c44]" /> {/* Target icon */}
              Match by interests and routines
            </li>
            <li className="flex items-center gap-3">
              <FaStar className="text-[#c79c44]" /> {/* Star icon */}
              Clean, modern spaces you’ll love
            </li>
          </ul>
        </section>

        {/* RIGHT SIDE AUTH FORM */}
        <section className="bg-[#181818] rounded-2xl p-8 flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-semibold">
              {isLogin ? "Welcome back" : "Create your account"}
            </h2>
            <p className="text-gray-400 text-sm">
              {isLogin
                ? "Login to continue to your dashboard"
                : "Sign up to get started"}
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="flex rounded-xl overflow-hidden border border-gray-700">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm ${
                isLogin ? "bg-[#252525] font-semibold" : "text-gray-400"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm ${
                !isLogin ? "bg-[#252525] font-semibold" : "text-gray-400"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-5">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Full name"
                  className="bg-[#252525] rounded-lg px-4 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-[#252525] rounded-lg px-4 py-2 text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="bg-[#252525] rounded-lg px-4 py-2 text-sm"
                />
                <select className="bg-[#252525] rounded-lg px-4 py-2 text-sm">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              className="bg-[#252525] rounded-lg px-4 py-2 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#252525] rounded-lg px-4 py-2 text-sm"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="bg-[#252525] rounded-lg px-4 py-2 text-sm"
              />
            )}
            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-xs text-gray-400 hover:text-[#c79c44]">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="bg-[#c79c44] text-black font-semibold py-3 rounded-lg hover:bg-[#b38b3b] transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* SOCIAL LOGIN */}
          <div className="flex gap-3">
            <button className="flex-1 border border-gray-700 rounded-lg py-2 text-sm hover:text-[#c79c44] transition">
              Continue with Email
            </button>
            <button className="flex-1 border border-gray-700 rounded-lg py-2 text-sm hover:text-[#c79c44] transition">
              GitHub
            </button>
          </div>

          <p className="text-center text-xs text-gray-400">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-[#c79c44] font-medium"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-[#c79c44] font-medium"
                >
                  Login
                </button>
              </>
            )}
          </p>
        </section>
      </div>
    </main>
  );
}
