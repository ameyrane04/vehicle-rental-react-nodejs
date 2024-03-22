import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 w-full text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-center md:justify-between">
        <div className="hidden md:block">
          <NavLink to="/" className="mr-4 hover:text-yellow-300">Home</NavLink>
          <NavLink to="/categories" className="mr-4 hover:text-yellow-300">Categories</NavLink>
          <NavLink to="/about" className="mr-4 hover:text-yellow-300">About</NavLink>
          <NavLink to="/contact" className="mr-4 hover:text-yellow-300">Contact</NavLink>
          <NavLink to="/Login/Signup" className="hover:text-yellow-300">Login/Sign Up</NavLink>
        </div>
        {/* Mobile menu icon placeholder */}
        <div className="md:hidden">Menu</div>
      </div>
    </nav>
  );
}

export default Navbar;
