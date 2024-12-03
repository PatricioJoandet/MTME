import React from "react";
import { useType } from "../Context/TypeContext";
import { Link } from "react-router-dom";

export default function MainButtons() {
  const { setType } = useType();
  return (
    <div className="flex justify-center gap-2">
      <Link
        className="btn w-24 text-white hover:bg-[#F72798] hover:text-black"
        to={"/artists/"}
        onClick={() => setType("artist")}
      >
        <span>Artists</span>
      </Link>
      <Link
        className="btn w-24 text-white hover:bg-[#F72798] hover:text-black"
        to={"/albums/"}
        onClick={() => setType("album")}
      >
        <span>Albums</span>
      </Link>
    </div>
  );
}
