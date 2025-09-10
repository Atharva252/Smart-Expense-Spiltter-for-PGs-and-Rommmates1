"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a1a0a] text-white p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <div className="flex gap-2">
          
          
            
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-4">
          {[
            {
              title: "1. Data We Collect",
              text: "Account info (name, email), group details, expenses and settlements, device and usage data for analytics.",
            },
            {
              title: "2. How We Use Data",
              text: "Provide and improve SplitEasy, personalize totals, prevent fraud, and communicate updates related to your groups.",
            },
            {
              title: "3. Sharing",
              text: "Shared only with your groups and trusted processors (payments, analytics). We never sell personal data.",
            },
            {
              title: "4. Your Controls",
              text: "Access, correct, export, or delete your data. Manage email preferences and cookie choices anytime.",
            },
            {
              title: "5. Security",
              text: "Encryption in transit and at rest. Least-privilege access and continuous monitoring for unauthorized activity.",
            },
            {
              title: "6. Data Retention",
              text: "We retain expense data while your account is active and as required by law. You may request deletion.",
            },
            {
              title: "7. International Transfers",
              text: "Transfers follow approved safeguards, including SCCs where applicable.",
            },
            {
              title: "8. Children",
              text: "SplitEasy is not intended for children under 13. We do not knowingly collect personal data from children.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-4 rounded-xl shadow-md"
            >
              <h2 className="font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <button
              onClick={() => router.back()}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm"
            >
              Close
            </button>
            <button
              onClick={() => alert("Downloading PDF...")}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm"
            >
              Download PDF
            </button>
          </div>
          <button
            onClick={() => router.push("/dashboard")}
            className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg shadow-md transition"
          >
            I Acknowledge
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 text-xs mt-4 text-center">
          By selecting "I Acknowledge", you confirm you have read our Privacy Policy.
        </p>
      </div>
    </div>
  );
}
