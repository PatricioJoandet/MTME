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
      console.log(response);
      console.log(type);

      setLoading(false);
    };

    fetchData();
  }, [id, token]);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h1>{data.title}</h1>
          <div>
            <h1>{data.name}</h1>
            <img src={data.images[0].uri} alt={data.name} />
          </div>
        </div>
      )}
    </div>
  );
}
