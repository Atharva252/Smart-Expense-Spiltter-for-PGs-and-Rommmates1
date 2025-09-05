import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark text-light px-6 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <span className="font-bold text-xl">SplitEasy</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-5 text-sm font-semibold">
        <li>
          <button className="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-600 transition">
            Features
          </button>
        </li>
        <li>
          <button className="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-600 transition">
            Pricing
          </button>
        </li>
        <li>
          <button className="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-600 transition">
            Groups
          </button>
        </li>
        <li>
          <button className="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-600 transition">
            Support
          </button>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="hidden md:block">
        <button className="px-4 py-1 rounded-full bg-yellow-600 hover:bg-yellow-700 font-semibold text-black transition">
          Login / Sign-up
        </button>
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button aria-label="Toggle menu" className="focus:outline-none">
          <svg
            className="w-6 h-6 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
