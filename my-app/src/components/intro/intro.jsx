"use client";

import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Intro</h2>
          <div className="flex gap-2">
        
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button className="bg-[#e2b656] text-black font-semibold px-4 py-1 rounded-full shadow">
            Intro
          </button>
          <button
            className="bg-[#232323] text-white px-4 py-1 rounded-full"
            onClick={() => router.push("/how-it-works")}
          >
            How It Works
          </button>
          <button
            className="bg-[#232323] text-white px-4 py-1 rounded-full"
            onClick={() => router.push("/terms")}
          >
            Next Steps
          </button>
        </div>

        {/* Card */}
        <div className="bg-[#181818] rounded-2xl shadow-lg p-6 mb-4 border border-[#232323]">
          {/* Video */}
          <div className="flex items-center gap-3 bg-[#232323] rounded-lg px-4 py-3 mb-4">
            <FaPlay className="text-[#e2b656] text-lg" />
            <span className="text-white">
              Short video: Create a group, add an expense, settle up.
            </span>
          </div>

          {/* Progress Dot */}
          <div className="flex items-center mb-2">
            <span className="w-2 h-2 rounded-full bg-[#e2b656] mr-2"></span>
          </div>

          {/* What you'll do */}
          <div className="mb-2 text-gray-300 text-sm">What you&apos;ll do</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className="bg-[#232323] rounded-lg p-4 text-white">
              <div className="font-bold mb-1">Create your group</div>
              <div className="text-gray-400 text-sm">
                Name it, pick currency, invite friends.
              </div>
            </div>
            <div className="bg-[#232323] rounded-lg p-4 text-white">
              <div className="font-bold mb-1">Add your first expense</div>
              <div className="text-gray-400 text-sm">
                Enter amount, payer, and who shares it.
              </div>
            </div>
            <div className="bg-[#232323] rounded-lg p-4 text-white">
              <div className="font-bold mb-1">Settle up anytime</div>
              <div className="text-gray-400 text-sm">
                See balances and record repayments.
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="mb-2 text-gray-300 text-sm">Tips</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-[#232323] rounded-lg p-4 text-white">
              <div className="font-bold mb-1">Smart splits</div>
              <div className="text-gray-400 text-sm">
                Evenly, by shares, or exact amounts.
              </div>
            </div>
            <div className="bg-[#232323] rounded-lg p-4 text-white">
              <div className="font-bold mb-1">Multi-currency</div>
              <div className="text-gray-400 text-sm">
                Track trips with mixed currencies.
              </div>
            </div>
            <div className="bg-[#232323] rounded-lg p-4 text-white">
              <div className="font-bold mb-1">Export</div>
              <div className="text-gray-400 text-sm">
                Get a CSV of all expenses.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button
            className="bg-[#232323] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
            onClick={() => router.back()}
          >
            &lt; Back
          </button>
          <div className="flex gap-2">
            <button
              className="bg-[#232323] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
              onClick={() => router.push("/add-expense")}
            >
              <span>Add first expense</span>
            </button>
            <button
              className="bg-[#e2b656] text-black px-6 py-2 rounded-lg font-semibold shadow"
              onClick={() => router.push("/groups")}
            >
              Create Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
