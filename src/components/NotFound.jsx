import React from "react";

export default function NotFound() {
  const img = "/404.png";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center">
        <span className="text-[300px]">4</span>
        <img
          className="h-[250px] translate-y-6 animate-spinCustom"
          src={img}
          alt="Error Icon"
        />
        <span className="text-[300px]">4</span>
      </div>
      <h2 className="text-xl mt-4">
        The page you are looking for doesn't exist :(
      </h2>
    </div>
  );
}
