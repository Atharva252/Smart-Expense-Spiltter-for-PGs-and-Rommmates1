"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  DollarSign,
  Calendar,
  User,
  Utensils,
  ArrowLeft,
  Lightbulb,
  Plus,
} from "lucide-react";

export default function AddExpense() {
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [selectedPayer, setSelectedPayer] = useState("Select member");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [splitMethod, setSplitMethod] = useState("Split equally");

  const categories = [
    "Food",
    "Rent",
    "Electricity",
    "Internet",
    "Transport",
    "Entertainment",
  ];

  const router = useRouter();

  const handleAddExpense = () => {
    // save expense logic here (API/database etc.)
    console.log({
      amount,
      selectedCategory,
      selectedPayer,
      selectedDate,
      splitMethod,
    });

    // navigate to dashboard after saving
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen w-full p-4"
      style={{ background: "#1c1b1f" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1
              className="text-3xl font-bold mb-2"
              style={{ color: "#eee" }}
            >
              Add Expense
            </h1>
            <p style={{ color: "#f0dfa3" }}>
              Log a new shared cost to your group
            </p>
          </div>

          {/* ✅ View Expenses → linked with sidebar (/dashboard or /groups) */}
          <Link
            href="/dashboard"
            style={{
              background: "#2f2e33",
              color: "#f0dfa3",
              border: "1px solid #a9883f",
            }}
            className="px-6 py-3 rounded-lg hover:brightness-105 transition-all duration-200 font-semibold"
          >
            View Expenses
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Side - Keep it fair */}
          <div
            style={{
              background: "#2f2e33",
              borderRadius: "15px",
              padding: "24px",
              border: "1.5px solid #a9883f",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <h2
                className="text-xl font-semibold"
                style={{ color: "#eee" }}
              >
                Keep it fair
              </h2>
              <div
                style={{ background: "#f0dfa3" }}
                className="rounded-full p-1"
              >
                <Lightbulb
                  className="w-4 h-4"
                  style={{ color: "#a9883f" }}
                />
              </div>
              <span
                className="text-xs px-2 py-1 rounded"
                style={{ background: "#a9883f", color: "#f0dfa3" }}
              >
                Tip
              </span>
            </div>
            <p
              style={{ color: "#f0dfa3" }}
              className="italic font-semibold text-center leading-relaxed py-4 rounded-lg bg-[#a9883f] bg-opacity-85 mb-6"
            >
              Keep costs transparent with your crew
            </p>
            {/* Receipt/Image Upload Area */}
            <div
              style={{
                background: "#232224",
                border: "1.5px solid #a9883f",
                color: "#f0dfa3",
              }}
              className="rounded-xl h-40 flex items-center justify-center mb-4"
            >
              <div className="text-center">
                <div
                  style={{ background: "#a9883f", opacity: 0.85 }}
                  className="w-16 h-16 rounded-xl mx-auto mb-3 flex items-center justify-center"
                >
                  <Plus
                    className="w-8 h-8"
                    style={{ color: "#232224" }}
                  />
                </div>
                <p className="font-medium" style={{ color: "#f0dfa3" }}>
                  Upload receipt or add image
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: "#eee" }}
                >
                  Drag & drop or click to browse
                </p>
              </div>
            </div>
            <p
              style={{ color: "#f0dfa3" }}
              className="text-sm"
            >
              Pro-tip: Add the exact date so balances stay accurate.
            </p>
          </div>
        </section>

        {/* Right Box: Expense Details Form */}
        <section className="bg-[#312913]/90 backdrop-blur-md rounded-2xl p-6 w-full max-w-md shadow-lg flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2">Expense Details</h3>

          {/* Right Side - Expense Details */}
          <div
            style={{
              background: "#232224",
              borderRadius: "15px",
              padding: "24px",
              border: "1.5px solid #a9883f",
            }}
          >
            <h2
              className="text-xl font-semibold mb-6"
              style={{ color: "#eee" }}
            >
              Expense Details
            </h2>
            <div className="space-y-6">
              {/* Amount */}
              <div>
                <label
                  className="block text-sm mb-2 font-medium"
                  style={{ color: "#f0dfa3" }}
                >
                  Amount
                </label>
                <div className="relative">
                  <DollarSign
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: "#a9883f" }}
                  />
                  <input
                    type="text"
                    placeholder="Enter amount (e.g. 86.40)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{
                      background: "#1b1a1e",
                      color: "#eee",
                      border: "none",
                    }}
                    className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a9883f]/50 placeholder-[#f0dfa3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Category */}
                <div>
                  <label
                    className="block text-sm mb-2 font-medium"
                    style={{ color: "#f0dfa3" }}
                  >
                    Category
                  </label>
                  <div className="relative">
                    <Utensils
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: "#a9883f" }}
                    />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      style={{
                        background: "#1b1a1e",
                        color: "#eee",
                        border: "none",
                      }}
                      className="w-full pl-10 pr-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a9883f]/50 appearance-none"
                    >
                      {categories.map((cat) => (
                        <option
                          key={cat}
                          value={cat}
                          style={{ background: "#232224", color: "#eee" }}
                        >
                          {cat}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: "#a9883f" }}
                    />
                  </div>
                </div>

                {/* Payer */}
                <div>
                  <label
                    className="block text-sm mb-2 font-medium"
                    style={{ color: "#f0dfa3" }}
                  >
                    Payer
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: "#a9883f" }}
                    />
                    <input
                      type="text"
                      placeholder="Select member"
                      value={selectedPayer}
                      onChange={(e) => setSelectedPayer(e.target.value)}
                      style={{
                        background: "#1b1a1e",
                        color: "#eee",
                        border: "none",
                      }}
                      className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a9883f]/50 placeholder-[#f0dfa3]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label
                    className="block text-sm mb-2 font-medium"
                    style={{ color: "#f0dfa3" }}
                  >
                    Date
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: "#a9883f" }}
                    />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      style={{
                        background: "#1b1a1e",
                        color: "#eee",
                        border: "none",
                      }}
                      className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a9883f]/50"
                    />
                  </div>
                </div>

                {/* Split Method */}
                <div>
                  <label
                    className="block text-sm mb-2 font-medium"
                    style={{ color: "#f0dfa3" }}
                  >
                    Split Method
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: "#a9883f" }}
                    />
                    <select
                      value={splitMethod}
                      onChange={(e) => setSplitMethod(e.target.value)}
                      style={{
                        background: "#1b1a1e",
                        color: "#eee",
                        border: "none",
                      }}
                      className="w-full pl-10 pr-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a9883f]/50 appearance-none"
                    >
                      <option style={{ background: "#232224", color: "#eee" }}>
                        Split equally
                      </option>
                      <option style={{ background: "#232224", color: "#eee" }}>
                        Split by percentage
                      </option>
                      <option style={{ background: "#232224", color: "#eee" }}>
                        Split by amount
                      </option>
                      <option style={{ background: "#232224", color: "#eee" }}>
                        Split by shares
                      </option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: "#a9883f" }}
                    />
                  </div>
                </div>
              </div>

              {/* ✅ Action Buttons */}
              <div className="flex items-center justify-between pt-6">
                {/* Cancel → goes back to dashboard */}
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                  style={{ background: "#444", color: "#eee", border: "none" }}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Cancel
                </Link>

                {/* Add Expense → saves then routes to dashboard */}
                <button
                  type="button"
                  onClick={handleAddExpense}
                  style={{
                    background: "#cfa548",
                    color: "#231f11",
                    fontWeight: "bold",
                    borderRadius: "12px",
                    border: "none",
                  }}
                  className="px-8 py-3 flex items-center gap-2 font-semibold shadow hover:brightness-105 transition-all duration-200"
                >
                  <Plus className="w-5 h-5" />
                  Add Expense
                </button>
              </div>

              {/* Categories note */}
              <div
                className="pt-4 border-t"
                style={{ borderColor: "#a9883f", borderOpacity: 0.4 }}
              >
                <p className="text-sm" style={{ color: "#f0dfa3" }}>
                  <span
                    className="font-medium"
                    style={{ color: "#a9883f" }}
                  >
                    Categories:
                  </span>{" "}
                  Food, Rent, Electricity, Internet, Transport, Entertainment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
