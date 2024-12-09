import React from "react";
import MainButtons from "./MainButtons";

export default function NoLikes() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center">
        <h1 className="text-5xl">You don't have any likes</h1>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-xl mt-4">Search for something you like</h2>
        <div className="mx-auto space-x-4 py-2">
          <MainButtons />
        </div>
      </div>
    </div>
  );
}
