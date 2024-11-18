import React, { useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { TypeContext } from "../Context/TypeContext";

export default function Items({ setData, data }) {
  const token = import.meta.env.VITE_DISCOGS_USER_TOKEN;
  const { query } = useParams();
  const [loading, setLoading] = useState(false);
  const { type } = useContext(TypeContext);

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    setLoading(true);
    console.log(type);
    const { data } = await axios.get(
      "https://api.discogs.com/database/search",
      {
        headers: {
          Authorization: `Discogs token=${token}`,
        },
        params: {
          ...(query && { query }),
          type: type == "artist" ? "artist" : "release",
          per_page: 25,
          sort: type === "artist" ? "Relevancy" : "want",
          sort_order: "desc",
          //...(type === "album" ? { format: "cd" } : {}),
        },
      }
    );
    console.log(data);

    setData(data.results);
    setLoading(false);
  };

  return (
    <div className="flex justify-center mt-8">
      {loading ? (
        <div className="skeleton h-48 w-48"></div>
      ) : (
        <div className="flex justify-center flex-wrap gap-2">
          {data.map((d) => (
            <Link key={d.id} to={`/details/${type}/${d.id}`}>
              <ItemCard data={d} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
