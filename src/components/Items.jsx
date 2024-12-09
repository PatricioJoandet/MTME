import React, { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { TypeContext } from "../Context/TypeContext.jsx";
import ItemCard from "./ItemCard.jsx";
import Loading from "./Loading.jsx";

export default function Items() {
  const token = import.meta.env.VITE_DISCOGS_USER_TOKEN;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { query } = useParams();
  const { type } = useContext(TypeContext);
  const location = useLocation();

  useEffect(() => {
    document.title = type + "s";
    fetchData();
  }, [location, page, type]);

  useEffect(() => {
    setPage(1);
  }, [location]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/database/search", {
        headers: {
          Authorization: `Discogs token=${token}`,
          "Content-Type": "application/json",
        },
        params: {
          ...(query && { query: `"${query}"` }),
          page,
          type: type == "artist" ? "artist" : "release",
          per_page: 50,
          sort: "want",
          ...(type === "album" && { format: "cd" }),
        },
      });
      setData(data);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      {loading ? (
        <Loading />
      ) : data.results.length > 0 ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-wrap w-4/6 justify-center gap-4">
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
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl">No results for {query}</h1>
          <h2 className="text-xl mt-4">Try searching something else</h2>
        </div>
      )}
    </div>
  );
}
