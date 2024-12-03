import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TypeContext } from "../Context/TypeContext";
import Loading from "./Loading";
import MainButtons from "./MainButtons";

export default function Home() {
  const token = import.meta.env.VITE_DISCOGS_USER_TOKEN;

  const [cover, setCover] = useState("");
  const [loading, setLoading] = useState(false);
  const { setType } = useContext(TypeContext);

  useEffect(() => {
    getRandomImg();
  }, []);

  const getRandomImg = async () => {
    setLoading(true);
    const id = Math.floor(Math.random() * 100);
    const { data } = await axios.get(
      `https://api.discogs.com/database/search`,
      {
        headers: {
          Authorization: `Discogs token=${token}`,
        },
        params: {
          type: "release",
          sort: "have",
          sort_order: "desc",
          per_page: 100,
        },
      }
    );
    setCover(data.results[id].cover_image);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      ) : (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${cover})`,
            position: "fixed",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="text-white mb-5 text-5xl font-bold">Hello!</h1>
              <p className="text-white text-3xl mb-5 font-normal">
                Get recommendations based on what you like
              </p>
              <MainButtons />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
//<Items data={data} type={type} />
