import React from "react";

export default function Loading() {
  return (
    <div className=" flex items-center justify-center h-48 w-48 mx-auto">
      <img
        className="w-full h-full animate-spinCustom"
        src="/no_record.png"
        alt="Record"
      />
    </div>
  );
}
