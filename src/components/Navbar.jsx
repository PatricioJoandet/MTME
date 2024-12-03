import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

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
      className={`navbar fixed top-0 w-full z-10 transition-all duration-300 ${
        scrolling ? "bg-[#F72798]" : "bg-transparent"
      }`}
    >
      <div className="flex-1 ">
        <Link className="btn btn-ghost text-xl" to={"/"}>
          HOME
        </Link>
        <Link className="btn btn-ghost text-xl" to={"/likes"}>
          My likes
        </Link>
        <Link className="btn btn-ghost text-xl" to={"/recommendations"}>
          Recommendations
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Searchbar />
      </div>
    </div>
  );
}
