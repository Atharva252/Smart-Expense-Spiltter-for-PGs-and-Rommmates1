"use client";

import { FaArrowLeft } from "react-icons/fa";

export default function MoreSettings() {
  return (
    <div className="min-h-screen bg-black p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">See How It Works</h2>
          <div className="flex gap-2">
            <span className="bg-[#232323] text-gray-300 px-3 py-1 rounded-full text-xs">Step 3 of 4</span>
            <span className="bg-[#232323] text-gray-300 px-3 py-1 rounded-full text-xs">&lt;1 min</span>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button className="bg-[#232323] text-white px-4 py-1 rounded-full">Intro</button>
          <button className="bg-[#e2b656] text-black font-semibold px-4 py-1 rounded-full shadow">More settings</button>
          <button className="bg-[#232323] text-white px-4 py-1 rounded-full">Next Steps</button>
        </div>
        {/* Card */}
        <div className="bg-[#181818] rounded-2xl shadow-lg p-6 mb-4 border border-[#232323]">
          {/* Group Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value="Group name: Euro Trip"
              readOnly
              className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
            />
            <input
              type="text"
              value="Default currency: EUR"
              readOnly
              className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
            />
            <input
              type="text"
              value="Time zone: Europe/Paris"
              readOnly
              className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
            />
            <input
              type="text"
              value="Category set: Travel"
              readOnly
              className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
            />
          </div>
          {/* Advanced */}
          <div className="mb-2 text-gray-300 text-sm">Advanced</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <button className="bg-[#232323] text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 border border-[#232323]">
                &#10003; Enabled
              </button>
              <span className="text-gray-400 text-xs">Round splits to 0.01</span>
            </div>
            <div></div>
            <input
              type="text"
              value="Default tip: 10%"
              readOnly
              className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
            />
            <input
              type="text"
              value="Service fee: 0%"
              readOnly
              className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
            />
            <input
              type="text"
              value="Default: Evenly"
              readOnly
              className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
            />
            <input
              type="text"
              value="Alternate: Shares"
              readOnly
              className="w-full bg-[#232323] rounded-lg px-4 py-3 text-white border border-[#232323] focus:outline-none"
            />
            <button className="bg-[#232323] text-gray-400 px-4 py-2 rounded-full font-semibold border border-[#232323]">
              Disabled
            </button>
            <span className="text-gray-400 text-xs mt-2">Convert using daily FX</span>
          </div>
          {/* Members */}
          <div className="mb-2 text-gray-300 text-sm">Members</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#232323] rounded-lg p-4 text-white flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex" className="w-8 h-8 rounded-full" />
                <span>Alex</span>
              </div>
              <span className="text-gray-400 text-xs">Role: Admin</span>
            </div>
            <div className="bg-[#232323] rounded-lg p-4 text-white flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Jamie" className="w-8 h-8 rounded-full" />
                <span>Jamie</span>
              </div>
              <span className="text-gray-400 text-xs">Role: Member</span>
            </div>
            <div className="bg-[#232323] rounded-lg p-4 text-white flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Riley" className="w-8 h-8 rounded-full" />
                <span>Riley</span>
              </div>
              <span className="text-gray-400 text-xs">Role: Member</span>
            </div>
          </div>
        </div>
        {/* Footer Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button className="bg-[#232323] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
            <FaArrowLeft />
            Back
          </button>
          <div className="flex gap-2">
            <button className="bg-[#232323] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
              Add first expense
            </button>
            <button className="bg-[#e2b656] text-black px-6 py-2 rounded-lg font-semibold shadow">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}