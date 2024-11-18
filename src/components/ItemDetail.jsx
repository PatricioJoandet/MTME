import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ItemDetail() {
  const { id, type } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const token = import.meta.env.VITE_DISCOGS_USER_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const url = `https://api.discogs.com/${
        type == "artist" ? "artists" : "releases"
      }/${id}`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Discogs token=${token}`,
        },
      });

      setData(response.data);
      console.log(response.data);
      setLoading(false);
    };

    fetchData();
  }, [id, token]);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="container flex flex-row mx-auto justify-center">
          <div className="carousel carousel-vertical rounded-box h-96">
            {data.images.map((image, index) => (
              <div className="carousel-item h-full" key={index}>
                <img
                  src={image.uri}
                  alt={`Slide ${index + 1}`}
                  className=" object-cover w-[600px] mx-auto rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="container mx-auto my-4">
            <div className="flex gap-2">
              <div>
                <div>
                  <h1 className="text-5xl font-bold">
                    {data.title || data.name}
                  </h1>
                  {type === "album" && (
                    <>
                      <h2 className="text-2xl">{data.artists[0].name}</h2>
                      <p>{data.year}</p>
                    </>
                  )}
                </div>
                <div className="stats bg-transparent shadow h-32 my-5">
                  <div className="stat px-1">
                    <div className="stat-figure text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-8 w-8 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
