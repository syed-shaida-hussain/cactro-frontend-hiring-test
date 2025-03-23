"use client"
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX , FiSearch  } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-transparent relative">
        <div className="flex items-center space-x-4">
          <div className="flex gap-1">
          <Image width={30} height={30} src="/slack-svgrepo-com.svg" alt="Slack Logo" />
          <span className="text-lg font-extrabold">Slack</span>
          </div>
          <ul className="hidden md:flex space-x-6">
            <select name="products">
              <option value="product">Product</option>
            </select>
            <li>Enterprise</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <FiSearch />
          <button className="text-sm hidden md:block">Sign In</button>
          <button className="bg-transparent text-sm border border-[#611F69] text-[#611F69] px-4 py-2 rounded hidden md:block">TALK TO SALES</button>
          <button className="bg-[#611F69] text-sm text-white px-4 py-2 rounded hidden md:block">TRY FOR FREE</button>
          <button 
            className="md:hidden text-2xl" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
            <a href="#">Product</a>
            <a href="#">Enterprise</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
            <a href="#">Sign In</a>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Talk to Sales</button>
            <button className="bg-[#611F69] text-white px-4 py-2 rounded-lg">Try for Free</button>
          </div>
        )}
      </nav>
  )
}

export default Navbar