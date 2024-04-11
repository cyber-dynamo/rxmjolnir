import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSigDropdown, setShowSigDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSigDropdown = () => {
    setShowSigDropdown(!showSigDropdown);
  };

  return (
    <div className="bg-gray-900">
      <nav className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="text-white mr-2 md:hidden cursor-pointer" onClick={toggleMenu}>
            {showMenu ? '✖' : '☰'}
          </div>
          <Link href="/" className="text-white font-bold text-3xl md:text-4xl">℞</Link>
        </div>
        <div className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
          <Link href="/" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4">Home</Link>
          <Link href="about" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4">About</Link>
          <Link href="prescribe" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4">Prescribe</Link>
          <Link href="mrs" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4">Med-review</Link>
          <div className="relative mr-6">
            <div
              onClick={toggleSigDropdown}
              className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4"
            >
              Sig ▼
            </div>
            {showSigDropdown && (
              <div className="absolute bg-gray-800 rounded-md mt-2 py-2 px-4">
                <Link href="chisig" target="_blank" className="text-white hover:text-gray-300 block">Sig </Link>
                <Link href="conditions" target="_blank" className="text-white hover:text-gray-300 block">Conditions</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
