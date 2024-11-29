import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TypeContext } from "../Context/TypeContext";

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
        <div className="text-center text-white text-2xl">Cargando...</div>
      ) : (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${cover})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="text-white mb-5 text-5xl font-bold">Hola!</h1>
              <p className="text-white mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                dignissimos atque voluptatibus nesciunt cumque, eos harum iste
                modi quam. Rem iusto dolores quas impedit ratione tempore
                veritatis architecto quis quia?
              </p>
              <div className="flex justify-center gap-2">
                <Link
                  className="btn"
                  to={"/artists/"}
                  onClick={() => setType("artist")}
                >
                  Artistas
                </Link>
                <Link
                  className="btn"
                  to={"/albums/"}
                  onClick={() => setType("album")}
                >
                  Álbumes
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
//<Items data={data} type={type} />
