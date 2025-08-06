import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Fresh Fruits</h1>
      <div className="space-x-4">
        <a href="#home">Home</a>
        <a href="#products">Fruits</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
