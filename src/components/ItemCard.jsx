import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "./Loading";

export default function ItemCard({ data }) {
  const [loading, setLoading] = useState(true);

  const NO_IMAGE = "/spacer.gif";
  const backupImage = "/no_record.png";

  useEffect(() => {
    if (data.cover_image?.includes(NO_IMAGE)) {
      data.cover_image = backupImage;
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <motion.div
      className="card w-[200px] card-compact"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <figure className="px-2 pt-5 flex flex-col">
        {loading ? (
          <Loading />
        ) : (
          <img
            className="rounded-lg h-[150px]"
            src={
              data.cover_image ||
              data.images[0].uri ||
              data.thumb ||
              backupImage
            }
            alt={data.title || data.name}
          />
        )}
      </figure>
      <div className="card-body">
        <p className="text-sm truncate">{data.title || data.name}</p>
      </div>
    </motion.div>
  );
}
