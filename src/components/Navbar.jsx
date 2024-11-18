import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={"/"}>
          HOME
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Searchbar />
      </div>
    </div>
  );
}
