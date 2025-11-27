"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = React.useState(false)
  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "Help", href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[])
  return (
    <nav className={`${scrolled? 'w-[90%] md:w-[70%]   top-10  left-[50%] -translate-x-[50%]  rounded-full  ring ring-gray-400' : 'w-full'} h-[70px]   px-5 sm:px-10 flex items-center   justify-between transition-all duration-300 shadow-sm fixed  top-0 backdrop-blur-md z-50`}>
      {/* Logo */}
      <h1 className="font-extrabold text-2xl md:text-3xl">ShopVerse</h1>

      {/* Desktop Links */}
      <div className="hidden sm:hidden  lg:flex gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-medium hover:text-orange-500 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Search + Icons */}
      <div className="flex gap-5  items-center">
        {/* Search (Hidden on mobile) */}
        <div className="px-3 py-2 dark:bg-gray-800 bg-gray-200 hidden lg:flex items-center rounded-full gap-2">
          <CiSearch size={20} />
          <input
            type="text"
            placeholder="Search for Phones"
            className="bg-transparent outline-none text-sm w-32"
          />
        </div>

        {/* Icons */}
        <div className="relative cursor-pointer hidden md:block">
          <FaRegHeart size={22} />
          <span className="w-3 p-[6px] h-3 rounded-full flex justify-center items-center font-bold text-xs bg-red-500 text-white absolute right-[-4px] bottom-[-2px]">
            1
          </span>
        </div>

        <div className="relative cursor-pointer hidden md:block">
          <FiShoppingBag size={22} />
          <span className="w-3 p-[6px] h-3 rounded-full flex justify-center items-center font-bold text-xs bg-red-500 text-white absolute right-[-4px] bottom-[-2px]">
            1
          </span>
        </div>

        {/* Icons for mobile */}
        <div className="flex md:hidden gap-6 pt-2">
          <div className="relative cursor-pointer">
            <FaRegHeart size={24} />
            <span className="w-3 p-[7px] h-3 rounded-full flex justify-center items-center font-bold text-xs bg-red-500 text-white absolute right-[-4px] bottom-[-2px]">1</span>
          </div>
          <div className="relative cursor-pointer">
            <FiShoppingBag size={24} />
            <span className="w-3 p-[7px] h-3 rounded-full flex justify-center items-center font-bold text-xs bg-red-500 text-white absolute right-[-4px] bottom-[-2px]">1</span>
          </div>
        </div>
        {/* Hamburger Icon (mobile only) */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white z-100 shadow-md flex flex-col items-start gap-5 px-6 py-5 lg:hidden animate-slideDown pb-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium w-full   py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Search for mobile */}
            <div className="flex items-center gap-2 dark:bg-gray-800 bg-gray-200 px-3 py-2 rounded-full w-full">
            <CiSearch size={20} />
            <input
              type="text"
              placeholder="Search for Phones"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
