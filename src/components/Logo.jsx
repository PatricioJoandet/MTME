import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="text-xl hover:scale-105 mt-11" to={"/"}>
      <div className="relative w-24 h-24">
        <img className="w-full h-full" src="/no_record.png" alt="Record" />
        <span className="absolute inset-2  flex items-center justify-center text-2xl text-white font-passion font-bold tracking-wider">
          title
        </span>
      </div>
    </Link>
  );
}
