import React from "react";

export default function Tracklist({ data }) {
  return (
    <div className="overflow-y-scroll max-h-52">
      <table className="table table-fixed">
        <thead>
          <tr>
            <th className="w-1/6">Track</th>
            <th className="w-3/6">Title</th>
            <th className="w-2/6">Duration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((t, index) => (
            <tr key={index} className="hover">
              <td className="truncate w-3/6">{t.position}</td>
              <td className="truncate w-3/6">{t.title}</td>
              <td className="w-2/6">{t.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
