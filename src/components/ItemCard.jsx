import React from "react";

export default function ItemCard({ data }) {
  return (
    <div className="relative cursor-pointer">
      <img
        className="rounded-lg h-[250px]"
        src={data.cover_image || data.images[0].uri}
        alt={data.title || data.name}
      />
      <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black via-black/70 to-transparent p-2">
        <h2 className="text-white text-lg font-semibold text-center">
          {data.title || data.name}
        </h2>
      </div>
    </div>
  );
}
