import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-white text-xl">Bhoomi</a>
        <div className="space-x-4">
          <a href="#about" className="text-white hover:text-gray-400">About</a>
          <a href="#projects" className="text-white hover:text-gray-400">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
