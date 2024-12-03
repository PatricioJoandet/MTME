import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="join">
      <button
        className="join-item btn"
        disabled={page == 1}
        onClick={() => setPage(page - 1)}
      >
        «
      </button>
      <button className="join-item btn">Page {page}</button>
      <button
        className="join-item btn"
        disabled={page == totalPages}
        onClick={() => setPage(page + 1)}
      >
        »
      </button>
    </div>
  );
}
