import React from "react";
import { Link } from "react-router-dom";

export default function MoreInfo({ profile, links }) {
  return (
    <div className="overflow-y-scroll max-h-52">
      <div>
        <p className="text-sm font-normal mb-5">{profile}</p>
      </div>
      <table className="table table-fixed">
        <tbody>
          {links?.map((l, i) => (
            <tr key={i} className="hover">
              <td>
                <Link to={l}>{l}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
