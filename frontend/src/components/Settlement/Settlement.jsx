// app/settlement/page.jsx (Next.js 13+ App Router)
// If you are using pages router, put it inside pages/settlement.jsx

import React from "react";

export default function Settlement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a1a0a] text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Settlement</h1>
          <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition">
            Mark as Settled
          </button>
        </div>
        <p className="text-gray-400 mb-8">
          Clear info on who owes whom
        </p>

        {/* Top Summary */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-6 rounded-2xl shadow-lg">
            <p className="text-gray-400">Total Outstanding</p>
            <h2 className="text-2xl font-bold">$482.30</h2>
            <span className="mt-2 inline-block bg-gray-700 text-sm px-3 py-1 rounded-full">Pending</span>
          </div>
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-6 rounded-2xl shadow-lg">
            <p className="text-gray-400">People Involved</p>
            <h2 className="text-2xl font-bold">6 members</h2>
            <button className="mt-3 bg-gray-700 hover:bg-gray-600 text-sm px-3 py-2 rounded-lg transition">
              Auto-suggest
            </button>
          </div>
        </div>

        {/* Owes List */}
        <div className="space-y-4 mb-10">
          {[
            { name: "Alex owes", amount: "$36.50", to: "Jordan" },
            { name: "Maya owes", amount: "$120.00", to: "Priya" },
            { name: "Chris owes", amount: "$58.80", to: "Sam" },
            { name: "Taylor owes", amount: "$22.10", to: "Alex" },
            { name: "Priya owes", amount: "$245.00", to: "Jordan" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-4 rounded-xl shadow-md"
            >
              <p>
                <span className="font-semibold">{item.name}</span>{" "}
                <span className="text-yellow-400">{item.amount}</span> to{" "}
                <span className="font-semibold">{item.to}</span>
              </p>
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm transition">
                Pay {item.to}
              </button>
            </div>
          ))}
        </div>

        {/* Group Balance */}
        <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Group Balance</h2>
          <div className="flex gap-4 mb-4">
            <span className="bg-gray-700 px-4 py-2 rounded-lg">
              You Owe <span className="font-bold">$68.40</span>
            </span>
            <span className="bg-gray-700 px-4 py-2 rounded-lg">
              You're Owed <span className="font-bold">$104.00</span>
            </span>
          </div>
          <p className="text-gray-400 mb-4 text-sm">
            Review and settle the amounts below. Once paid, mark it as settled to update everyone's balance.
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm transition">
              Best path suggested
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition">
              Mark as Settled
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// Note: This is a simplified placeholder. Replace with actual logic and data as needed.