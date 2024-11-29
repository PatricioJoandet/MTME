import React, { useContext, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { TypeContext } from "../Context/TypeContext";

export default function Items() {
  const token = import.meta.env.VITE_DISCOGS_USER_TOKEN;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { query } = useParams();
  const { type } = useContext(TypeContext);

  useEffect(() => {
    fetchData();
  }, [query, page]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://api.discogs.com/database/search",
        {
          headers: {
            Authorization: `Discogs token=${token}`,
          },
          params: {
            ...(query && { query: `"${query}"` }),
            page,
            type: type == "artist" ? "artist" : "release",
            per_page: 50,
            sort: "have",
            //sort_order: "desc",
            //...(type === "album" ? { format: "cd" } : {}),
          },
        }
      );
      setData(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      {loading ? (
        <div className="skeleton h-48 w-48 flex justify-center">
          <span className="loading loading-spinner text-warning loading-lg"></span>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap justify-center gap-2">
            {data.results.map((d) => (
              <Link key={d.id} to={`/details/${type}/${d.id}`}>
                <ItemCard data={d} />
              </Link>
            ))}
          </div>
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={data.pagination.pages}
          />
        </div>
      )}
    </div>
  );
}
