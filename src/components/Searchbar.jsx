import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Searchbar({ setData, setType, type }) {
  const [query, setQuery] = useState("");
  const token = import.meta.env.VITE_DISCOGS_USER_TOKEN;

  const handleSearch = async (e) => {
    e.preventDefault();

    const { data } = await axios.get(
      "https://api.discogs.com/database/search",
      {
        headers: {
          Authorization: `Discogs token=${token}`,
        },
        params: {
          query,
          type: type == "artist" ? "artist" : "release",
          per_page: 1,
        },
      }
    );

    setData(data.results);
    setQuery("");
    console.log(data.results);
  };

  return (
    <div className="flex justify-center py-2">
      <div className="flex gap-2 flex-row">
        <select
          onChange={(e) => setType(e.target.value)}
          className="select select-secondary w-full max-w-xs"
          defaultValue={"artist"}
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
