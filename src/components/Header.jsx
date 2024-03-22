import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 w-full py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold ml-3">RAG rentals</h1>
        <p className="text-white italic mr-3">Your journey starts here</p>
      </div>
    </header>
  );
}

export default Header;
