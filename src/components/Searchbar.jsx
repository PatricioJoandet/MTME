import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TypeContext } from "../Context/TypeContext";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const { setType, type } = useContext(TypeContext);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    navigate(`/${type === "artist" ? "artists" : "albums"}/${query}`);
    setQuery("");
  };

  return (
    <div className="flex justify-center py-2">
      <div className="flex gap-2 flex-row">
        <select
          onChange={(e) => setType(e.target.value)}
          className="select select-secondary w-full max-w-xs"
          value={type}
        >
          <option value="artist">Artist</option>
          <option value="album">Album</option>
        </select>
        <form
          onSubmit={handleSearch}
          className="flex items-center space-x-2 bg-gray-200 rounded-full px-4 py-2 w-full max-w-lg mx-auto"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search for an ${type}`}
            className="bg-transparent flex-grow focus:outline-none text-gray-700 placeholder-gray-500"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-1 rounded-full"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
