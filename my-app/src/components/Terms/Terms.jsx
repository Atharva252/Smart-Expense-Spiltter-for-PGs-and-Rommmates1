// app/terms/page.jsx (Next.js 13+ App Router)
// If using pages router -> pages/terms.jsx

import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a1a0a] text-white p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <span className="text-gray-400 text-sm">Updated Jan 2025</span>
        </div>

        {/* Terms List */}
        <div className="space-y-4">
          {[
            {
              title: "1. Acceptance",
              text: "By creating an account or using SplitEasy, you agree to these Terms. If you do not agree, do not use the service.",
            },
            {
              title: "2. Use of Service",
              text: "You are responsible for the accuracy of expenses you add and for maintaining the security of your account.",
            },
            {
              title: "3. Payments & Settlements",
              text: "Settlements facilitated through the app are between members. Fees and limits may apply when using third-party payment providers.",
            },
            {
              title: "4. Data & Privacy",
              text: "We process your data as described in our Privacy Policy. Do not share sensitive data in expense notes.",
            },
            {
              title: "5. Termination",
              text: "We may suspend or terminate accounts for violations or abuse. You may export your data before closure.",
            },
            {
              title: "6. Disclaimers",
              text: "Service provided 'as is' with no warranties. We limit liability to the maximum extent permitted by law.",
            },
            {
              title: "7. Changes",
              text: "We may update these Terms. Material changes will be notified in-app or via email.",
            },
            {
              title: "8. Contact",
              text: "Questions about Terms? Email legal@spliteasy.app.",
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
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm">
              Close
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm">
              Download PDF
            </button>
          </div>
          <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg shadow-md transition">
            I Agree
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 text-xs mt-4 text-center">
          By selecting "I Agree", you accept the Terms of Service for SplitEasy.
        </p>
      </div>
    </div>
  );
}
// Note: This is a simplified placeholder. Replace with actual logic and data as needed.