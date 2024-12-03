import React from "react";

export default function Loading() {
  return (
    <div className="h-48 w-48 flex justify-center">
      <span className="loading loading-spinner text-warning loading-lg"></span>
    </div>
  );
}
