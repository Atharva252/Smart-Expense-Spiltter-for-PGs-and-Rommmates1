'use client';
import { useState } from 'react';
import { ChevronDown, DollarSign, Calendar, User, Utensils, ArrowLeft, Lightbulb, Plus } from 'lucide-react';

export default function AddExpense() {
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [selectedPayer, setSelectedPayer] = useState('Select member');
  const [selectedDate, setSelectedDate] = useState('Jun 2, 2025');
  const [splitMethod, setSplitMethod] = useState('Split equally');

  const categories = ['Food', 'Rent', 'Electricity', 'Internet', 'Transport', 'Entertainment'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 to-yellow-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Add Expense</h1>
            <p className="text-amber-100">Log a new shared cost to your group</p>
          </div>
          <button className="bg-amber-800 bg-opacity-50 text-amber-100 px-6 py-3 rounded-lg hover:bg-opacity-70 transition-all duration-200 border border-amber-600 border-opacity-30">
            View Expenses
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Side - Keep it fair */}
          <div className="bg-amber-800 bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 border border-amber-600 border-opacity-20">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold text-white">Keep it fair</h2>
              <div className="bg-yellow-500 rounded-full p-1">
                <Lightbulb className="w-4 h-4 text-amber-900" />
              </div>
              <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">Tip</span>
            </div>
            <p className="text-amber-200 text-sm mb-6">Split costs transparently with your crew</p>
            
            {/* Receipt/Image Upload Area */}
            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl h-64 flex items-center justify-center mb-4 border border-yellow-400 border-opacity-30">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 bg-opacity-80 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <Plus className="w-8 h-8 text-amber-900" />
                </div>
                <p className="text-amber-900 font-medium">Upload receipt or add image</p>
                <p className="text-amber-800 text-sm mt-1">Drag & drop or click to browse</p>
              </div>
            </div>

            <p className="text-amber-300 text-sm">Pro-tip: Add the exact date so balances stay accurate.</p>
          </div>

          {/* Right Side - Expense Details */}
          <div className="bg-amber-800 bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 border border-amber-600 border-opacity-20">
            <h2 className="text-xl font-semibold text-white mb-6">Expense Details</h2>
            
            <div className="space-y-6">
              {/* Amount */}
              <div>
                <label className="block text-amber-200 text-sm mb-2 font-medium">Amount</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-300" />
                  <input
                    type="text"
                    placeholder="Enter amount (e.g. 86.40)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-amber-900 bg-opacity-40 text-white placeholder-amber-300 pl-10 pr-4 py-3 rounded-lg border border-amber-600 border-opacity-40 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-30 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Category */}
                <div>
                  <label className="block text-amber-200 text-sm mb-2 font-medium">Category</label>
                  <div className="relative">
                    <Utensils className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-300" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-amber-900 bg-opacity-40 text-white pl-10 pr-10 py-3 rounded-lg border border-amber-600 border-opacity-40 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-30 appearance-none transition-all duration-200"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat} className="bg-amber-900 text-white">{cat}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-300 pointer-events-none" />
                  </div>
                </div>

                {/* Payer */}
                <div>
                  <label className="block text-amber-200 text-sm mb-2 font-medium">Payer</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-300" />
                    <select
                      value={selectedPayer}
                      onChange={(e) => setSelectedPayer(e.target.value)}
                      className="w-full bg-amber-900 bg-opacity-40 text-white pl-10 pr-10 py-3 rounded-lg border border-amber-600 border-opacity-40 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-30 appearance-none transition-all duration-200"
                    >
                      <option className="bg-amber-900 text-white">Select member</option>
                      <option className="bg-amber-900 text-white">John Doe</option>
                      <option className="bg-amber-900 text-white">Jane Smith</option>
                      <option className="bg-amber-900 text-white">Mike Johnson</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-300 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-amber-200 text-sm mb-2 font-medium">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-300" />
                    <input
                      type="text"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-amber-900 bg-opacity-40 text-white pl-10 pr-10 py-3 rounded-lg border border-amber-600 border-opacity-40 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-30 transition-all duration-200"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-300 pointer-events-none" />
                  </div>
                </div>

                {/* Split Method */}
                <div>
                  <label className="block text-amber-200 text-sm mb-2 font-medium">Split Method</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-300" />
                    <select
                      value={splitMethod}
                      onChange={(e) => setSplitMethod(e.target.value)}
                      className="w-full bg-amber-900 bg-opacity-40 text-white pl-10 pr-10 py-3 rounded-lg border border-amber-600 border-opacity-40 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-30 appearance-none transition-all duration-200"
                    >
                      <option className="bg-amber-900 text-white">Split equally</option>
                      <option className="bg-amber-900 text-white">Split by percentage</option>
                      <option className="bg-amber-900 text-white">Split by amount</option>
                      <option className="bg-amber-900 text-white">Split by shares</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-300 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6">
                <button className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-amber-800 hover:bg-opacity-30">
                  <ArrowLeft className="w-5 h-5" />
                  Cancel
                </button>
                
                <button className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Plus className="w-5 h-5" />
                  Add Expense
                </button>
              </div>

              {/* Categories */}
              <div className="pt-4 border-t border-yellow-700 border-opacity-40">
                <p className="text-yellow-300 text-sm">
                  <span className="font-medium text-yellow-200">Categories:</span> Food, Rent, Electricity, Internet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}