import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-100">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Press</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-100">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-400">Safety Center</a></li>
              <li><a href="#" className="hover:text-gray-400">Community Guidelines</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-100">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-gray-400">Cookies Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-400">Law Enforcement</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-100">Company Mission</h3>
            <p className="mt-4 text-gray-400">
              Our mission is to provide the best services to our customers with utmost dedication and integrity. We strive to innovate and lead in our industry, ensuring customer satisfaction and trust.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
