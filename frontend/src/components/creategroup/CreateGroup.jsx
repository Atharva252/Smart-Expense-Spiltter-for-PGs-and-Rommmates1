"use client";

import Link from "next/link";
import { FaUserPlus, FaCog, FaArrowLeft } from "react-icons/fa";

export default function CreateGroup() {
  return (
    <div className="min-h-screen bg-black p-8 font-sans ml-[15vw]"> 
      {/* Added left margin so content isn't hidden behind Sidebar */}
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Create a Group</h2>
          <div className="flex gap-2">
            <span className="bg-[#232323] text-gray-300 px-3 py-1 rounded-full text-xs">Step 3 of 4</span>
            <span className="bg-[#232323] text-gray-300 px-3 py-1 rounded-full text-xs">1–2 min</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <Link href="/intro" className="bg-[#232323] text-white px-4 py-1 rounded-full">
            Intro
          </Link>
          <Link href="/how-it-works" className="bg-[#232323] text-white px-4 py-1 rounded-full">
            How It Works
          </Link>
          <button className="bg-[#e2b656] text-black font-semibold px-4 py-1 rounded-full shadow">
            Next Steps
          </button>
        </div>

        {/* Card */}
        <div className="bg-[#181818] rounded-2xl shadow-lg p-6 mb-4 border border-[#232323]">
          {/* Group Name */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-1">Group name</label>
            <input
              type="text"
              value="Japan Trip 2025"
              readOnly
              className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
            />
          </div>

          {/* Currency & Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Currency</label>
              <input
                type="text"
                value="USD — $"
                readOnly
                className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Split default</label>
              <input
                type="text"
                value="Evenly"
                readOnly
                className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
              />
            </div>
          </div>

          {/* Members */}
          <div className="mb-2">
            <label className="block text-gray-300 text-sm mb-1">Members</label>
            <div className="flex gap-2 mb-2">
              <div className="flex items-center bg-[#232323] rounded-lg px-4 py-2 text-white gap-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex" className="w-7 h-7 rounded-full" />
                Alex
              </div>
              <div className="flex items-center bg-[#232323] rounded-lg px-4 py-2 text-white gap-2">
                <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Sam" className="w-7 h-7 rounded-full" />
                Sam
              </div>
            </div>
            <button
              className="flex items-center gap-2 text-gray-300 px-2 py-1"
              onClick={() => alert("Add member modal will open")}
            >
              <FaUserPlus className="text-lg" />
              Add member
            </button>
            <div className="text-gray-400 text-xs mt-1">
              You can invite friends by name or email. Members can add expenses right away.
            </div>
          </div>

          <hr className="my-4 border-[#232323]" />

          {/* Quick rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Quick rules</label>
              <input
                type="text"
                value="Anyone can add expenses"
                readOnly
                className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1 invisible">Approval</label>
              <input
                type="text"
                value="Approval not required"
                readOnly
                className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
              />
            </div>
          </div>

          {/* Footer summary */}
          <div className="flex items-center justify-between bg-[#232323] rounded-lg px-4 py-3 mt-2">
            <span className="text-gray-300 text-sm">
              2 members • Default split: Evenly • Currency: USD
            </span>
            <Link href="/groups/settings" className="flex items-center gap-2 text-gray-300">
              <FaCog />
              More settings
            </Link>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-between mt-6">
          <Link href="/groups" className="bg-[#232323] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
            <FaArrowLeft />
            Back
          </Link>
          <div className="flex gap-2">
            <Link href="/add-expense" className="bg-[#232323] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
              Add first expense
            </Link>
            <Link href="/groups/overview" className="bg-[#e2b656] text-black px-6 py-2 rounded-lg font-semibold shadow">
              Create Group
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
