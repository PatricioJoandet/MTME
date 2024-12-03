import React from "react";

export default function NotFound() {
  const img = "/404.png";
  console.log(img);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center">
        <h1 className="text-[300px]">4</h1>
        <img className="h-[250px] translate-y-6" src={img} alt="Error Icon" />
        <h1 className="text-[300px]">4</h1>
      </div>
      <h2 className="text-xl mt-4">
        The page you are looking for doesn't exist :(
      </h2>
    </div>
  );
}
