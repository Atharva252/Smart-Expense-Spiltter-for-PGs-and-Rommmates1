import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SplitEasy. All rights reserved.
        </p>

        <nav className="flex gap-6 text-sm">
          <Link
            href="/Terms"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Terms & Services"
          >
            Terms
          </Link>
          <Link
            href="/PrivacyPolicy"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Privacy Policy"
          >
            Privacy
          </Link>
          <Link
            href="/contacts"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Contact Us"
          >
            Contact
          </Link>
          <Link
            href="/features"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Features"
          >
            Features
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
