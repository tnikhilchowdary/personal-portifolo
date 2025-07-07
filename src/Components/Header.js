import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { socialMediaUrl } from "../Details"; // Removed 'logos'
 
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github } = socialMediaUrl; // Removed 'twitter'
 
  const toggleClass = () => setIsOpen(!isOpen);
 
  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <NavLink
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          {`<TNC />`}
        </NavLink>
 
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
 
      <nav className={` ${!isOpen ? "hidden" : ""} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>Home</NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>About</NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>Technologies</NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>Projects</NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/leadership" onClick={toggleClass}>Leadership</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleClass}>Contact</NavLink>
          </li>
        </ul>
 
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              {/* LinkedIn Icon */}
              {/* ... SVG as-is ... */}
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              {/* GitHub Icon */}
              {/* ... SVG as-is ... */}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header;
