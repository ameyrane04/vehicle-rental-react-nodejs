import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark-200 text-gray-300 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Contact Info */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>Email: rag_info_04@gmail.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Social Media Links */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">More Info</h2>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>© 2024 RAG rentals. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
