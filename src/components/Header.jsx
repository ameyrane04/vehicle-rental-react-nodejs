import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-l from-black to-brandYellow w-full py-6 shadow-xl">
      <div className="container mx-auto text-center">
        <p className="text-white italic text-xl md:text-3xl font-semibold transform motion-safe:hover:scale-105 transition duration-500 ease-in-out">
          Your journey starts here
        </p>
      </div>
    </header>
  );
}

export default Header;
