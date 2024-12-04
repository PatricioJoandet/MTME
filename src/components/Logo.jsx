import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="text-xl hover:scale-105 mt-4" to={"/"}>
      <div className="relative w-20 h-20">
        <img
          className="w-full h-full animate-spinCustom"
          src="/no_record.png"
          alt="Record"
        />
        <span className="absolute inset-0 flex items-center justify-center text-2xl text-white font-bold">
          Title
        </span>
      </div>
    </Link>
  );
}
