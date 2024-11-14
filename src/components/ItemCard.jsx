import React from "react";

export default function ItemCard({ data }) {
  return (
    <div className="relative w-64 cursor-pointer">
      <img
        className="rounded-lg w-full"
        src={data.cover_image}
        alt={data.title}
      />
      <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black via-black/70 to-transparent p-2">
        <h2 className="text-white text-lg font-semibold text-center">
          {data.title}
        </h2>
      </div>
    </div>
  );
}
