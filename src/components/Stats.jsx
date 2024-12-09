import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

export default function Stats({ data, isLiked, handleClick, type }) {
  const [randomLikes] = useState(
    () => Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
  );

  const likes =
    type === "artist"
      ? randomLikes + (isLiked ? 1 : 0)
      : data.have + (isLiked ? 1 : 0);

  return (
    <div className="stat  px-1">
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
      <div className="stat-value text-[#EBF400] ">{likes}</div>
      <div className="stat-title text-white">Total Likes</div>
    </div>
  );
}
