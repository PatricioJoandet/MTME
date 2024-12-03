import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

export default function Stats({ data, isLiked, handleClick, type }) {
  return (
    <div className="stat px-1">
      <div
        className="stat-figure text-primary cursor-pointer"
        onClick={handleClick}
      >
        {isLiked ? (
          <AiFillHeart size={30} fill={"#F72798"} />
        ) : (
          <FaRegHeart size={30} />
        )}
      </div>
      <div className="stat-value text-[#EBF400]">
        {type === "album" ? (isLiked ? data.have + 1 : data.have) : 10}
      </div>
      <div className="stat-title">Total Likes</div>
    </div>
  );
}
