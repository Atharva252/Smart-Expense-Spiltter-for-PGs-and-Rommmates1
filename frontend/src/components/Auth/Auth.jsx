"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import { FaFilm, FaBullseye, FaStar } from "react-icons/fa";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const { user, login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";

  function handleSubmit(e) {
    e.preventDefault();
    login(username || "User");
    router.push(redirect);
  }

  if (user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#121212] text-white">
        <div className="bg-[#232323] p-8 rounded-xl text-center">
          <h2 className="text-2xl mb-4">Welcome, {user.name}!</h2>
          <p className="text-gray-300">You are already logged in.</p>
          <button
            onClick={() => router.push("/dashboard")}
            className="mt-4 px-6 py-2 bg-[#c79c44] text-black rounded-lg"
          >
            Go to Dashboard
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#121212] px-4 py-8 text-white">
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
        {/* LEFT SIDE */}
        <section className="bg-[#181818] rounded-2xl flex flex-col md:w-1/2">
          <div className="flex items-center gap-2 p-5">
            <span className="w-3 h-3 rounded-full bg-[#c79c44]" />
            <h2 className="text-sm font-medium">Roommates that feel like friends</h2>
          </div>
          <div className="px-5">
            <img
              src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
              alt="Roommates lifestyle"
              className="rounded-xl object-cover w-full"
            />
          </div>
          <ul className="flex flex-col gap-3 text-sm text-gray-300 px-5 py-6">
            <li className="flex items-center gap-3">
              <FaFilm className="text-[#c79c44]" /> Movie nights
            </li>
            <li className="flex items-center gap-3">
              <FaBullseye className="text-[#c79c44]" /> Match by interests
            </li>
            <li className="flex items-center gap-3">
              <FaStar className="text-[#c79c44]" /> Clean, modern spaces
            </li>
          </ul>
        </section>

        {/* RIGHT SIDE */}
        <section className="bg-[#181818] rounded-2xl p-8 flex flex-col gap-6 md:w-1/2">
          <h2 className="text-xl font-semibold">
            {isLogin ? "Welcome back" : "Create your account"}
          </h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Full name"
                className="bg-[#252525] rounded-lg px-4 py-2 text-sm"
              />
            )}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-[#252525] rounded-lg px-4 py-2 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#252525] rounded-lg px-4 py-2 text-sm"
            />
            <button
              type="submit"
              className="bg-[#c79c44] text-black font-semibold py-3 rounded-lg hover:bg-[#b38b3b] transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
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
