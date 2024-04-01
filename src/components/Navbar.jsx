import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('userToken') !== null;

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Remove the token
    navigate('/'); // Redirect to home page or login page as preferred
    window.location.reload(); // Optionally force a reload to reset app state
  };

  return (
    <nav className="bg-gradient-to-r from-black to-brandYellow shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <NavLink to="/" className="text-white text-2xl font-bold font-fancy">RAG</NavLink>
        <div className="flex gap-4">
          <NavLink to="/" className="text-white hover:text-black font-semibold text-lg transition duration-300 font-fancy">Home</NavLink>
          <NavLink to="/categories" className="text-white hover:text-black font-semibold text-lg transition duration-300 font-fancy">Categories</NavLink>
          <NavLink to="/about" className="text-white hover:text-black font-semibold text-lg transition duration-300 font-fancy">About</NavLink>
          <NavLink to="/contact" className="text-white hover:text-black font-semibold text-lg transition duration-300 font-fancy">Contact</NavLink>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-white hover:text-black font-semibold text-lg transition duration-300 font-fancy">Logout</button>
          ) : (
            <NavLink to="/login/signup" className="text-white hover:text-black font-semibold text-lg transition duration-300 font-fancy">Login/Sign Up</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
