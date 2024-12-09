import React, { useState, useEffect } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setScrolling(true) : setScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar fixed h-[15px] top-0 w-full z-10  transition-all duration-300 ${
        scrolling ? "bg-[#f7279985]" : "bg-transparent"
      }`}
    >
      <div className="flex-1 gap-2">
        <Logo />
        <NavLink
          className="btn btn-ghost text-xl hover:bg-[#F72798]"
          to={"/likes"}
        >
          My likes
        </NavLink>
        <NavLink
          className="btn btn-ghost text-xl hover:bg-[#F72798]"
          to={"/recommendations"}
        >
          Recommendations
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        <Searchbar />
      </div>
    </div>
  );
}
