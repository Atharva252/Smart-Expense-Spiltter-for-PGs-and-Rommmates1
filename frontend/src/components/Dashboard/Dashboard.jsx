'use client';
import React from 'react';
import { Plus, Users, Settings, Copy, MoreHorizontal, User } from 'lucide-react';

const Dashboard = () => {
  const expenseData = [
    { label: 'Rent', color: 'bg-yellow-400', percentage: 40 },
    { label: 'Groceries', color: 'bg-orange-400', percentage: 30 },
    { label: 'Utilities', color: 'bg-green-400', percentage: 20 },
    { label: 'Others', color: 'bg-gray-600', percentage: 10 }
  ];

  const members = [
    { name: 'Alice', amount: '$980', progress: 85 },
    { name: 'Bob', amount: '$780', progress: 65 },
    { name: 'Carol', amount: '$540', progress: 45 },
    { name: 'You', amount: '$780', progress: 65 }
  ];

  const recentExpenses = [
    { 
      title: 'Grocery run', 
      subtitle: 'Split between 4 • Groceries',
      amount: '$86.40',
      avatar: '🛒'
    },
    { 
      title: 'Electricity bill', 
      subtitle: 'Split between 3 • Utilities',
      amount: '$124.20',
      avatar: '⚡'
    },
    { 
      title: 'Monthly rent', 
      subtitle: 'Split between 4 • Rent',
      amount: '$2,400.00',
      avatar: '🏠'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Glass Dashboard</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg text-sm text-gray-600 hover:bg-white/90 transition-all">
          <Copy className="w-4 h-4" />
          Copy to Figma
        </button>
      </div>

      {/* Group Dashboard Header */}
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Group Dashboard</h2>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400/90 text-gray-800 rounded-lg font-medium hover:bg-yellow-400 transition-all">
              <Plus className="w-4 h-4" />
              Add Expense
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/80 border border-white/40 rounded-lg text-sm text-gray-700 hover:bg-white/90 transition-all">
              <Users className="w-4 h-4" />
              View Group
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/80 border border-white/40 rounded-lg text-sm text-gray-700 hover:bg-white/90 transition-all">
              <Settings className="w-4 h-4" />
              Settle Up
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Total Group Expenses</p>
            <p className="text-2xl font-bold text-gray-800">$3,240.50</p>
            <p className="text-xs text-gray-500">Across 24 expenses</p>
          </div>
          <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">You Owe</p>
            <p className="text-2xl font-bold text-gray-800">$128.75</p>
            <p className="text-xs text-gray-500">To: Alice</p>
          </div>
          <div className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">You Are Owed</p>
            <p className="text-2xl font-bold text-gray-800">$212.10</p>
            <p className="text-xs text-gray-500">From: Bob & Carol</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Expense Categories Chart */}
        <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Expense Categories</h3>
          
          {/* Pie Chart */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-48 h-48 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#fbbf24" strokeWidth="20" strokeDasharray="40 60" strokeDashoffset="0" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#fb923c" strokeWidth="20" strokeDasharray="30 70" strokeDashoffset="-40" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#4ade80" strokeWidth="20" strokeDasharray="20 80" strokeDashoffset="-70" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#374151" strokeWidth="20" strokeDasharray="10 90" strokeDashoffset="-90" />
            </svg>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-4">
            {expenseData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                <span className="text-sm text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Balance Summary */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Balance Summary</h3>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">You Owe</p>
              <p className="text-2xl font-bold text-gray-800">$128.75</p>
              <p className="text-xs text-gray-500">To: Alice</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">You Are Owed</p>
              <p className="text-2xl font-bold text-gray-800">$212.10</p>
              <p className="text-xs text-gray-500">From: Bob, Carol</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">Settle balances to keep your View group square.</p>
          
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-yellow-400/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-yellow-400 transition-all">
              Record payment
            </button>
            <button className="px-4 py-2 bg-white/80 border border-white/40 rounded-lg text-sm text-gray-700 hover:bg-white/90 transition-all">
              details
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Member Contributions */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Member Contributions</h3>
          
          <div className="space-y-4">
            {members.map((member, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 mb-1">{member.name}</p>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                      style={{width: `${member.progress}%`}}
                    ></div>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-800 ml-4">{member.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Expenses */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Expenses</h3>
          
          <div className="space-y-4">
            {recentExpenses.map((expense, index) => (
              <div key={index} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/40 rounded-full flex items-center justify-center text-lg">
                    {expense.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{expense.title}</p>
                    <p className="text-xs text-gray-600">{expense.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-800">{expense.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;