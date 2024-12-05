import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navcontent = [
    { name: "Home", path: "/" },
    { name: "Project Timeline", path: "/time" },
    { name: "Collaborate", path: "/collaborate" },
    { name: "Budget Tracker", path: "/budget" },
  ];

  return (
    <div className="flex justify-between items-center py-2 px-4 md:px-14 bg-white rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      {/* Logo / Title */}
      <div>
        <p className="text-xl md:text-2xl font-bold">Home Renovation Planner</p>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex gap-8">
          {navcontent.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 text-lg hover:bg-gray-200 hover:rounded-md"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-black"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-md rounded-md w-[80%] md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            {navcontent.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 text-lg hover:bg-gray-200 hover:rounded-md"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-black"
                  }
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
