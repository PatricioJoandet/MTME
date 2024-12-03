import React, { useEffect, useState } from "react";
import { useLikes } from "../Context/LikesContext";
import axios from "axios";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import NoLikes from "./NoLikes";

export default function Recommendations() {
  const { likedAlbums } = useLikes();
  const token = import.meta.env.VITE_DISCOGS_USER_TOKEN;
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (selected) {
      const fetchData = async () => {
        setLoading(true);

        const randomGenre =
          selected.genres?.[
            Math.floor(Math.random() * selected.genres.length)
          ] || "";
        const randomStyle =
          selected.styles?.[
            Math.floor(Math.random() * selected.styles.length)
          ] || "";

        console.log(randomGenre);
        console.log(randomStyle);

        try {
          const { data } = await axios.get(
            "https://api.discogs.com/database/search",
            {
              headers: {
                Authorization: `Discogs token=${token}`,
              },
              params: {
                type: "release",
                per_page: 100,
                genre: randomGenre,
                style: randomStyle,
                sort: "want",
                format: "vinyl",
              },
            }
          );

          const filteredResults = data.results.filter(
            (i) =>
              !likedAlbums.some((a) => a.id === i.id || a.fullTitle === i.title)
          );

          const uniqueResults = [
            ...new Map(filteredResults.map((r) => [r.title, r])).values(),
          ];

          console.log(filteredResults);
          console.log(uniqueResults);

          setRecommendations(uniqueResults);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [selected]);

  return likedAlbums.length > 0 ? (
    <div className="mt-20 mx-10">
      <h1 className="text-white text-4xl font-bold ml-5">Recommendations</h1>
      <div className="mx-10">
        <h1 className="font-bold">Select album to get recommendations </h1>
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-thin">
          {likedAlbums.map((a) => (
            <div key={a.id} onClick={() => setSelected(a)}>
              <ItemCard data={a} />
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <div className="mx-10">
          <h1 className="font-normal">Recommendations based on</h1>
          <span className="font-bold">{selected.title}</span>
          {loading ? (
            <Loading />
          ) : (
            <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-thin">
              {recommendations.map((r) => (
                <Link key={r.id} to={`/details/album/${r.id}`}>
                  <ItemCard data={r} />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  ) : (
    <NoLikes />
  );
}
