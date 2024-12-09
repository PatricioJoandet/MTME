import React from "react";

export default function NotFound() {
  const img = "/404.png";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center">
        <span className="text-[300px]">4</span>
        <img
          className="h-[250px] animate-spinCustom mt-8"
          src={img}
          alt="Error"
        />
        <span className="text-[300px]">4</span>
      </div>
      <h2 className="text-3xl">
        The page you are looking for doesn't exist :(
      </h2>
    </div>
  );
}
