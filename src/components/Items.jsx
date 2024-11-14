import React from "react";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

export default function SearchResults({ data, type }) {
  return (
    <div className="flex justify-center mt-8">
      {data.length > 0 ? (
        <div className="flex justify-center max-w-md w-full">
          {data.map((d) => (
            <Link key={d.id} to={`/details/${type}/${d.id}`}>
              <ItemCard data={d} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-gray-500 text-lg">Start searching</h1>
        </div>
      )}
    </div>
  );
}
