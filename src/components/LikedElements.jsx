import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

export default function LikedElements({ data, title }) {
  return (
    <div className="mt-4">
      <h2 className="text-white text-xl font-bold">{title}</h2>
      <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-thin">
        {data.map((d) => (
          <Link
            key={d.id}
            to={`/details/${title === "Artists" ? "artist" : "album"}/${d.id}`}
            state={{ item: d }}
          >
            <ItemCard data={d} />
          </Link>
        ))}
      </div>
    </div>
  );
}
