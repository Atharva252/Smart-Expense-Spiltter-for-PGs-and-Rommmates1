'use client'
import React from 'react';
const members = [
    { name: 'Ava', img: '/avtar1.jpg' },
    { name: 'Leo', img: '/avtar2.jpg' },
    { name: 'Mia', img: '/avtar3.jpg' },
    // { name: 'Noah', img: '/noah.jpg' },
  ];

  const expensesData = [
    {
      id: 1,
      icon: '🍽️',
      title: 'Dinner at Warung',
      date: 'Jun 1, 2025',
      note: 'Split equally',
      paidBy: 'Ava',
      amount: 86.40,
    },
    {
      id: 2,
      icon: '🏠',
      title: 'Villa Rent',
      date: 'Jun 1, 2025',
      note: 'Monthly',
      paidBy: 'Leo',
      amount: 1200,
    },
    {
      id: 3,
      icon: '🔌',
      title: 'Electricity Bill',
      date: 'May 30, 2025',
      note: 'Utilities',
      paidBy: 'Mia',
      amount: 74.20,
    },
    // {
    //   id: 4,
    //   icon: '📶',
    //   title: 'Internet',
    //   date: 'May 28, 2025',
    //   note: 'Subscription',
    //   paidBy: 'Noah',
    //   amount: 45,
    // },
  ];

  export default function Group() {
    const totalSpent = expensesData.reduce((acc, exp) => acc + exp.amount, 0);
    const youOwe = 132.80;

    return (
      <main className="min-h-screen bg-gradient-to-tr from-yellow-900 via-yellow-800 to-yellow-700 p-8 text-white font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-xl font-bold">Room: <span className="text-yellow-200">Bali Trip</span></h1>
              <p className="text-yellow-300 text-sm">Group overview and shared expenses</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-yellow-900 bg-opacity-30 px-4 py-2 rounded-lg hover:bg-yellow-900/70 transition">
                + Add Expense
              </button>
              <button className="bg-yellow-500 px-5 py-2 rounded-lg hover:bg-yellow-600 transition flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Invite
              </button>
            </div>
          </div>

          {/* Bali Trip Members */}
          <div className="flex items-center gap-3 p-4 bg-yellow-900 bg-opacity-30 rounded-xl mb-8">
            <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-lg font-bold">B</div>
            <div>
              <p className="font-semibold text-yellow-200 text-lg">Bali Trip</p>
              <p className="text-yellow-400 text-sm">4 members • Created May 2025</p>
            </div>
            <div className="flex gap-2 ml-auto">
              {members.map((member) => (
                <div key={member.name} className="flex items-center gap-2 bg-yellow-900 bg-opacity-40 rounded-full px-4 py-1 text-yellow-200 text-sm cursor-pointer">
                  <img src={member.img} alt={member.name} className="w-6 h-6 rounded-full object-cover" />
                  <span>{member.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            {/* Shared Expenses */}
            <section className="flex-1 bg-yellow-900 bg-opacity-60 rounded-2xl p-6 max-w-3xl min-w-[320px]">
              <h2 className="font-semibold text-lg mb-4">Shared Expenses</h2>
              {/* Filters */}
              <div className="flex gap-3 mb-6">
                <button className="flex items-center gap-1 bg-yellow-700 rounded-md px-3 py-1 text-yellow-200 text-sm cursor-pointer hover:bg-yellow-800 transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16v10a1 1 0 01-1 1H5a1 1 0 01-1-1V10z" />
                  </svg>
                  All
                </button>
                <button className="flex items-center gap-1 bg-yellow-700 rounded-md px-3 py-1 text-yellow-200 text-sm cursor-pointer hover:bg-yellow-800 transition">
                  🍽️ Food
                </button>
                <button className="flex items-center gap-1 bg-yellow-700 rounded-md px-3 py-1 text-yellow-200 text-sm cursor-pointer hover:bg-yellow-800 transition">
                  🏠 Rent
                </button>
                <button className="flex items-center gap-1 bg-yellow-700 rounded-md px-3 py-1 text-yellow-200 text-sm cursor-pointer hover:bg-yellow-800 transition">
                  🔌 Electricity
                </button>
                <button className="flex items-center gap-1 bg-yellow-700 rounded-md px-3 py-1 text-yellow-200 text-sm cursor-pointer hover:bg-yellow-800 transition">
                  📶 Internet
                </button>
              </div>

              {/* Expenses List */}
              <ul className="space-y-4">
                {expensesData.map(exp => (
                  <li key={exp.id} className="flex items-center justify-between bg-yellow-800 bg-opacity-40 rounded-xl p-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-yellow-600 px-3 py-2 rounded-full text-lg">{exp.icon}</div>
                      <div>
                        <p className="font-semibold">{exp.title}</p>
                        <p className="text-yellow-400 text-sm">{exp.date} • {exp.note}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 bg-yellow-900 bg-opacity-40 rounded-xl px-3 py-1 text-xs font-semibold cursor-default">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6" />
                        </svg>
                        Paid by {exp.paidBy}
                      </button>
                      <span className="font-semibold">${exp.amount.toFixed(2)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Balance Summary */}
            <section className="w-96 bg-yellow-900 bg-opacity-60 rounded-2xl p-6 flex flex-col justify-between">
              <h2 className="font-semibold text-lg mb-6">Balance Summary</h2>
              <div className="flex gap-4 mb-6">
                <div className="bg-yellow-700 bg-opacity-40 p-4 rounded-xl flex-1">
                  <p className="text-yellow-400 text-sm">Total Spent</p>
                  <p className="font-semibold text-xl">${totalSpent.toFixed(2)}</p>
                </div>
                <div className="bg-yellow-700 bg-opacity-40 p-4 rounded-xl flex-1">
                  <p className="text-yellow-400 text-sm">You Owe</p>
                  <p className="font-semibold text-xl">${youOwe.toFixed(2)}</p>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-4">Quick Actions</p>
                <button className="flex items-center gap-2 bg-yellow-800 rounded-lg px-4 py-2 hover:bg-yellow-700 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  View All
                </button>
                <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 rounded-lg px-5 py-2 font-semibold">
                  + Add Expense
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }