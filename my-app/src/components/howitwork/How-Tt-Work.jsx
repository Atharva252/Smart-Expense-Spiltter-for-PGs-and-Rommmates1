"use client";

import {
  FaUsers,
  FaFileInvoiceDollar,
  FaExchangeAlt,
  FaRegEye,
  FaPlay,
  FaArrowLeft,
  FaVideo,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function HowItWorks() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">See How It Works</h2>
          <div className="flex gap-2">
        
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button className="bg-[#232323] text-white px-4 py-1 rounded-full">
            Intro
          </button>
          <button className="bg-[#e2b656] text-black font-semibold px-4 py-1 rounded-full shadow">
            How It Works
          </button>
          <button className="bg-[#232323] text-white px-4 py-1 rounded-full">
            Next Steps
          </button>
        </div>

        {/* Video Card */}
        <div className="bg-[#181818] rounded-2xl shadow-lg p-6 mb-4 border border-[#232323]">
          <div className="flex items-center justify-center h-48">
            <button className="bg-[#e2b656] rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <FaPlay className="text-black text-2xl" />
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div className="bg-[#232323] rounded-lg p-4 text-white flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold">
              <FaUsers className="text-[#e2b656]" />
              Create a Group
            </div>
            <div className="text-gray-400 text-sm">
              Start by creating a group for your trip, project, or household to
              keep expenses organized.
            </div>
          </div>
          <div className="bg-[#232323] rounded-lg p-4 text-white flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold">
              <FaFileInvoiceDollar className="text-[#e2b656]" />
              Add Expenses
            </div>
            <div className="text-gray-400 text-sm">
              Log shared expenses, assign who paid, and split evenly or by
              custom shares.
            </div>
          </div>
          <div className="bg-[#232323] rounded-lg p-4 text-white flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold">
              <FaExchangeAlt className="text-[#e2b656]" />
              Settle Up
            </div>
            <div className="text-gray-400 text-sm">
              Get a clear summary of who owes whom and settle balances with
              minimal transfers.
            </div>
          </div>
          <div className="bg-[#232323] rounded-lg p-4 text-white flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold">
              <FaRegEye className="text-[#e2b656]" />
              Stay Transparent
            </div>
            <div className="text-gray-400 text-sm">
              Every change is tracked so everyone stays in sync and confident
              about totals.
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#232323] rounded-full mb-6 relative">
          <div
            className="absolute top-0 left-0 h-1 bg-[#e2b656] rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-between mt-2">
          <button
            className="bg-[#232323] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
            onClick={() => router.push("/intro")}
          >
            <FaArrowLeft />
            Back
          </button>
          <div className="flex gap-2">
            <button className="bg-[#232323] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
              <FaVideo />
              Watch Demo
            </button>
            <button
              className="bg-[#e2b656] text-black px-6 py-2 rounded-lg font-semibold shadow"
              onClick={() => router.push("/groups")}
            >
              Continue to Create Group
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          Split expenses effortlessly with SplitEasy — organize, track, and
          settle up without the hassle.
        </div>
      </div>
    </div>
  );
}
