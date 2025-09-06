"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaUtensils, FaHome, FaBolt, FaWifi } from "react-icons/fa";

const members = [
  { name: "Ava", img: "/avtar1.jpg" },
  { name: "Leo", img: "/avtar2.jpg" },
  { name: "Mia", img: "/avtar3.jpg" },
];

const expenses = [
  {
    id: 1,
    icon: <FaUtensils className="text-[#e2b656]" />,
    title: "Dinner at Warung",
    date: "Jun 1, 2025",
    note: "Split equally",
    paidBy: "Ava",
    amount: 86.4,
  },
  {
    id: 2,
    icon: <FaHome className="text-[#e2b656]" />,
    title: "Villa Rent",
    date: "Jun 1, 2025",
    note: "Monthly",
    paidBy: "Leo",
    amount: 1200,
  },
  {
    id: 3,
    icon: <FaBolt className="text-[#e2b656]" />,
    title: "Electricity Bill",
    date: "May 30, 2025",
    note: "Utilities",
    paidBy: "Mia",
    amount: 74.2,
  },
  // {
  //   id: 4,
  //   icon: <FaWifi className="text-[#e2b656]" />,
  //   title: "Internet",
  //   date: "May 28, 2025",
  //   note: "Subscription",
  //   paidBy: "Noah",
  //   amount: 45,
  // },
];

export default function Group() {
  const router = useRouter();
  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const youOwe = 132.8;

  // Button style for gold effect
  const goldBtn =
    "bg-[#e2b656] hover:bg-[#f5d77c] text-black font-semibold rounded-lg px-5 py-2 shadow transition";

  return (
    <main className="min-h-screen bg-gradient-to-tr from-black via-[#232323] to-[#e2b656] p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Room: <span className="text-[#e2b656]">Bali Trip</span>
            </h1>
            <p className="text-gray-300 text-base">
              Group overview and shared expenses
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className={goldBtn}
              onClick={() => router.push("/AddExpences")}
            >
              + Add Expense
            </button>
            <button className={goldBtn + " flex items-center gap-1"}>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 8a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2 12l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Invite
            </button>
          </div>
        </div>

        {/* Group Info */}
        <div className="flex items-center gap-3 p-4 bg-[#232323] bg-opacity-80 rounded-xl mb-8 shadow-lg">
          <div className="w-10 h-10 rounded-full bg-[#e2b656] flex items-center justify-center text-lg font-bold text-black">
            B
          </div>
          <div>
            <p className="font-semibold text-white text-lg">Bali Trip</p>
            <p className="text-gray-300 text-sm">4 members • Created May 2025</p>
          </div>
          <div className="flex gap-2 ml-auto">
            {members.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-2 bg-[#232323] bg-opacity-80 rounded-full px-4 py-1 text-white text-sm shadow"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span>{m.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          {/* Expenses */}
          <section className="flex-1 bg-[#232323] bg-opacity-80 rounded-2xl p-6 max-w-3xl min-w-[320px] shadow-lg">
            <h2 className="font-semibold text-lg mb-4 text-white">Shared Expenses</h2>
            <div className="flex gap-3 mb-6">
              <button className="bg-[#232323] text-[#e2b656] rounded-md px-3 py-1 text-sm hover:bg-[#353535] transition shadow border border-[#444]">
                All
              </button>
              <button className="flex items-center gap-1 bg-[#232323] text-[#e2b656] rounded-md px-3 py-1 text-sm hover:bg-[#353535] transition shadow border border-[#444]">
                <FaUtensils /> Food
              </button>
              <button className="flex items-center gap-1 bg-[#232323] text-[#e2b656] rounded-md px-3 py-1 text-sm hover:bg-[#353535] transition shadow border border-[#444]">
                <FaHome /> Rent
              </button>
              <button className="flex items-center gap-1 bg-[#232323] text-[#e2b656] rounded-md px-3 py-1 text-sm hover:bg-[#353535] transition shadow border border-[#444]">
                <FaBolt /> Electricity
              </button>
              <button className="flex items-center gap-1 bg-[#232323] text-[#e2b656] rounded-md px-3 py-1 text-sm hover:bg-[#353535] transition shadow border border-[#444]">
                <FaWifi /> Internet
              </button>
            </div>

            <ul className="space-y-4">
              {expenses.map((exp) => (
                <li
                  key={exp.id}
                  className="flex items-center justify-between bg-[#232323] bg-opacity-80 rounded-xl p-4 shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#e2b656] px-3 py-2 rounded-full text-lg text-black shadow">
                      {exp.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{exp.title}</p>
                      <p className="text-gray-400 text-sm">
                        {exp.date} • {exp.note}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-[#232323] text-[#e2b656] rounded-xl px-3 py-1 text-xs font-semibold shadow border border-[#444]">
                      Paid by {exp.paidBy}
                    </span>
                    <span className="font-semibold text-white">${exp.amount.toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Balance */}
          <section className="w-96 bg-[#232323] bg-opacity-80 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <h2 className="font-semibold text-lg mb-6 text-white">Balance Summary</h2>
            <div className="flex gap-4 mb-6">
              <div className="bg-[#232323] p-4 rounded-xl flex-1 shadow border border-[#444]">
                <p className="text-gray-400 text-sm">Total Spent</p>
                <p className="font-semibold text-xl text-[#e2b656]">${totalSpent.toFixed(2)}</p>
              </div>
              <div className="bg-[#232323] p-4 rounded-xl flex-1 shadow border border-[#444]">
                <p className="text-gray-400 text-sm">You Owe</p>
                <p className="font-semibold text-xl text-[#e2b656]">${youOwe.toFixed(2)}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4 text-white">Quick Actions</p>
              <button className="flex items-center gap-2 bg-[#232323] text-[#e2b656] rounded-lg px-4 py-2 hover:bg-[#353535] transition shadow border border-[#444]">
                View All
              </button>
              <button
                className={`mt-4 w-full ${goldBtn}`}
                onClick={() => router.push("/AddExpences")}
              >
                + Add Expense
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}