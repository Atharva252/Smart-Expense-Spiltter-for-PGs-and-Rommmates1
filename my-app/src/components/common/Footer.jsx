import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; 2023 SplitEasy. All rights reserved.</p>

        <nav className="flex gap-6 text-sm">
          <a
            href="/terms"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Terms of Service"
          >
            Terms
          </a>
          <a
            href="/privacy"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Privacy Policy"
          >
            Privacy
          </a>
          <a
            href="/contact"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Contact Us"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
