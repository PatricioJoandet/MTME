import React, { useEffect } from "react";
import { useLikes } from "../Context/LikesContext";
import { Link } from "react-router-dom";
import { useType } from "../Context/TypeContext";
import ItemCard from "./ItemCard";

export default function Likes() {
  const { likes } = useLikes();

  return (
    <div className="bg-red-400">
      <h1 className="text-white text-2xl font-bold">My likes</h1>
      {likes && likes.length > 0 ? (
        <div className="flex">
          {likes.map((l) => (
            <Link
              key={l.id}
              to={`/details/${l.type === "artist" ? "artist" : "albums"}/${
                l.id
              }`}
              state={{ item: l }}
            >
              <ItemCard data={l} />
            </Link>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
