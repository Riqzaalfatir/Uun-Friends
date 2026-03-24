"use client"

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Waktu & Tempat", link: "#waktu" },
    { name: "Video", link: "#video" },
    { name: "RSVP", link: "#rsvp" },
    { name: "Your Wishes", link: "#wishes" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 ">
      
      <nav className="flex justify-center items-center px-6 py-5 relative">

        <div className="hidden md:flex gap-[40px] text-[14px] md:text-[18px] lg:text-[14px] uppercase tracking-widest font-barlow font-bold text-[#F4ECA3]">
          {menuItems.map((item, i) => (
            <a key={i} href={item.link} className="hover:opacity-70 transition">
              {item.name}
            </a>
          ))}
        </div>

        <div className="fixed md:hidden  left-8 top-5 z-50">
          {isOpen ? (
            <FaTimes
              size={22}
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaBars
              size={22}
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full bg-[#EB621F] flex flex-col items-center justify-center gap-4 text-[14px] uppercase tracking-widest font-barlow font-bold text-[#F4ECA3] transition-all duration-300 z-60 ${
          isOpen
            ? "opacity-100 translate-y-0 py-10"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {menuItems.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setIsOpen(false)}
            className="hover:opacity-70 transition"
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;