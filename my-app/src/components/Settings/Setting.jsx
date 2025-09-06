// app/settings/page.jsx (Next.js 13+ App Router)
// If using pages router, save as pages/settings.jsx

import React from "react";

export default function Setting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#2a1a0a] text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Settings</h1>
          <div className="flex gap-4">
            <button className="bg-gray-700 hover:bg-gray-600 text-sm px-4 py-2 rounded-lg transition">
              Privacy Checkup
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition">
              Save Changes
            </button>
          </div>
        </div>
        <p className="text-gray-400 mb-8">
          Manage your account, groups, and preferences
        </p>

        {/* Profile + Defaults */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Profile */}
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg font-bold mb-4">Profile</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Display Name</p>
                <input
                  type="text"
                  defaultValue="Jordan Parker"
                  className="mt-1 w-full bg-black/60 px-4 py-2 rounded-lg outline-none"
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <input
                  type="email"
                  defaultValue="jordan@example.com"
                  className="mt-1 w-full bg-black/60 px-4 py-2 rounded-lg outline-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Password</p>
                  <p className="text-xs text-gray-500">
                    Last changed 3 months ago
                  </p>
                </div>
                <button className="bg-gray-700 hover:bg-gray-600 text-sm px-3 py-2 rounded-lg transition">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          {/* Defaults & Preferences */}
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg font-bold mb-4">Defaults & Preferences</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Default Split</p>
                <select className="mt-1 w-full bg-black/60 px-4 py-2 rounded-lg outline-none">
                  <option>Equal</option>
                  <option>Custom</option>
                </select>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Currency</p>
                <select className="mt-1 w-full bg-black/60 px-4 py-2 rounded-lg outline-none">
                  <option>USD ($)</option>
                  <option>INR (₹)</option>
                  <option>EUR (€)</option>
                </select>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Notifications</p>
                <select className="mt-1 w-full bg-black/60 px-4 py-2 rounded-lg outline-none">
                  <option>Weekly Summary</option>
                  <option>Daily</option>
                  <option>Off</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">Smart Suggestions</p>
                <button className="bg-gray-700 hover:bg-gray-600 text-xs px-3 py-1 rounded-lg">
                  Enabled
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Group Settings */}
        <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-lg font-bold mb-4">Group Settings</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm">Group Name</p>
              <input
                type="text"
                defaultValue="Beach Trip 2025"
                className="mt-1 w-full bg-black/60 px-4 py-2 rounded-lg outline-none"
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="email"
                defaultValue="name@email.com"
                className="w-full bg-black/60 px-4 py-2 rounded-lg outline-none"
              />
              <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-sm transition">
                Send Invite
              </button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-sm">Leave Group</p>
              <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-sm transition">
                Leave
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Save Button */}
        <div className="flex justify-end">
          <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
// Note: This is a simplified placeholder. Replace with actual logic and data as needed.