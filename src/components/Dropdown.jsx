import React from "react";

export default function Dropdown({ title, children }) {
  return (
    <div className="collapse collapse-arrow hover:bg-base-100">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
