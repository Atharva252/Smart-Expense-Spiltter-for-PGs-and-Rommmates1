"use client";

import { useState } from "react";

const categories = [
  { label: "Food", icon: "🍽️" },
  { label: "Rent", icon: "🏠" },
  { label: "Electricity", icon: "💡" },
  { label: "Internet", icon: "🌐" },
];

const members = ["Alice", "Bob", "Charlie", "David"];

const splitMethods = [
  { label: "Split equally", icon: "👥" },
  { label: "Split by shares", icon: "📊" },
  { label: "Split by amounts", icon: "💰" },
];

export default function AddExpense() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0].label);
  const [payer, setPayer] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [splitMethod, setSplitMethod] = useState(splitMethods[0].label);
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setAmount("");
    setCategory(categories[0].label);
    setPayer("");
    setDate(new Date().toISOString().slice(0, 10));
    setSplitMethod(splitMethods[0].label);
    setDescription("");
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!amount || !payer) {
      alert("Please enter the amount and select a payer.");
      return;
    }
    const expenseData = {
      amount: parseFloat(amount),
      category,
      payer,
      date,
      splitMethod,
      description,
    };
    console.log("Expense Added:", expenseData);
    alert("Expense added! Check console for details.");
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6e5944] via-[#201a15] to-[#0c0a07] text-gray-200 font-sans p-6 flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <nav className="bg-[#3a2b13]/70 backdrop-blur rounded-xl w-full md:w-60 p-4 flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-5 h-5 rounded-full bg-[#d6a544]" />
          <h1 className="text-lg font-semibold">SplitEasy</h1>
          <span className="bg-[#5d503b] text-xs py-[2px] px-2 rounded-full opacity-80">
            Beta
          </span>
        </div>

        <button className="flex items-center gap-2 text-gray-300 bg-[#5d503b]/20 rounded-md px-3 py-2 text-left cursor-pointer shadow-inner" disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth={2} d="M3 10h4l3 9 4-18 3 9h4" />
          </svg>
          Dashboard
        </button>

        <button className="flex items-center gap-2 bg-[#d6a544] text-[#1a1205] font-semibold rounded-md px-3 py-2 cursor-default shadow-md" disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Expense
        </button>

        <button className="flex items-center gap-2 text-gray-400 hover:text-gray-200 rounded-md px-3 py-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth={2}
              d="M17 20h5v-2a7 7 0 10-14 0v2h5zM12 12a3 3 0 100-6 3 3 0 000 6z"
            />
          </svg>
          Groups
        </button>

        <button className="flex items-center gap-2 text-gray-400 hover:text-gray-200 rounded-md px-3 py-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth={2}
              d="M11.25 4.098a1.5 1.5 0 012.5 0l.72 1.555a1.5 1.5 0 001.176.795l1.671.298a1.5 1.5 0 01.813 2.557l-1.25 1.25a1.5 1.5 0 000 2.121l1.25 1.25a1.5 1.5 0 01-.813 2.557l-1.672.298a1.5 1.5 0 00-1.176.796l-.72 1.554a1.5 1.5 0 01-2.5 0l-.72-1.555a1.5 1.5 0 00-1.176-.796l-1.671-.3a1.5 1.5 0 01-.813-2.557l1.25-1.25a1.5 1.5 0 000-2.121l-1.25-1.25a1.5 1.5 0 01.813-2.558l1.673-.297a1.5 1.5 0 001.176-.795l.72-1.555z"
            />
          </svg>
          Settings
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row gap-6">
        {/* Left Box: Keep it fair */}
        <section className="bg-[#312913]/90 backdrop-blur-md rounded-2xl p-6 flex flex-col max-w-lg flex-grow shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Add Expense</h2>
            <p className="text-sm text-gray-400">Log a new shared cost to your group</p>
          </div>
          <div className="bg-[#b9974a] rounded-xl flex-1 my-3"></div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xs text-gray-400 italic">
              Pro-tip: Add the exact date so balances stay accurate.
            </p>
            <button
              type="button"
              className="flex items-center gap-1 rounded-full border border-gray-500 px-3 py-1 text-sm hover:bg-[#5d503b]/50 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Tip
            </button>
          </div>
        </section>

        {/* Right Box: Expense Details Form */}
        <section className="bg-[#312913]/90 backdrop-blur-md rounded-2xl p-6 w-full max-w-md shadow-lg flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2">Expense Details</h3>

          <form onSubmit={handleAddExpense} className="flex flex-col gap-4">
            {/* Amount */}
            <label className="block">
              <span className="text-sm font-medium mb-1 block">Amount</span>
              <div className="relative text-gray-100">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth={2}
                      d="M12 8c-3.866 0-7 1.79-7 4s3.134 4 7 4 7-1.79 7-4-3.134-4-7-4z"
                    />
                    <path
                      strokeWidth={2}
                      d="M12 12v.01"
                    />
                  </svg>
                </span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount (e.g., 86.40)"
                  className="w-full bg-[#121212] rounded-lg py-2 pl-10 pr-4 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
            </label>

            {/* Category and Payer */}
            <div className="flex gap-4">
              <label className="w-1/2 block">
                <span className="text-sm font-medium mb-1 block">Category</span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#121212] text-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  {categories.map((cat) => (
                    <option key={cat.label} value={cat.label}>
                      {cat.icon} {cat.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="w-1/2 block">
                <span className="text-sm font-medium mb-1 block">Payer</span>
                <select
                  value={payer}
                  onChange={(e) => setPayer(e.target.value)}
                  className="w-full bg-[#121212] text-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="" disabled>
                    Select member
                  </option>
                  {members.map((member) => (
                    <option key={member} value={member}>
                      {member}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Date and Split Method */}
            <div className="flex gap-4">
              <label className="w-1/2 block">
                <span className="text-sm font-medium mb-1 block">Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#121212] text-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </label>

              <label className="w-1/2 block">
                <span className="text-sm font-medium mb-1 block">Split Method</span>
                <select
                  value={splitMethod}
                  onChange={(e) => setSplitMethod(e.target.value)}
                  className="w-full bg-[#121212] text-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  {splitMethods.map((method) => (
                    <option key={method.label} value={method.label}>
                      {method.icon} {method.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-4">
              <button
                type="button"
                onClick={resetForm}
                className="flex items-center gap-2 bg-[#312913]/50 hover:bg-[#312913]/70 rounded-full py-2 px-4 text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#D6A544"
                >
                  <path strokeWidth={2} d="M10 19l-7-7 7-7" />
                </svg>
                Cancel
              </button>

              <button
                type="submit"
                className="bg-[#d6a544] hover:bg-[#c5a23e] rounded-full py-2 px-5 flex items-center gap-2 text-[#1a1205] font-semibold text-sm shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#1a1205"
                >
                  <path strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Expense
              </button>
            </div>
          </form>

          <p className="mt-2 text-xs text-gray-400">
            Categories: Food, Rent, Electricity, Internet
          </p>
        </section>
      </main>

      {/* View Expenses Button */}
      <button className="absolute top-6 right-6 flex items-center gap-2 bg-[#5d503b]/70 backdrop-blur rounded-xl px-5 py-2 shadow-lg text-sm hover:bg-[#5d503b]/90 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        View Expenses
      </button>
    </div>
  );
}
