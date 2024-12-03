import React, { useEffect } from "react";
import { useLikes } from "../Context/LikesContext";
import LikedElements from "./LikedElements.jsx";

export default function Likes() {
  const { likes, likedArtists, likedAlbums } = useLikes();

  console.log(likedAlbums);

  return (
    <div className="mt-20">
      <h1 className="text-white text-4xl font-bold ml-5">My likes</h1>
      {likes && likes.length > 0 ? (
        <div className="mx-10 mt-5">
          {likedArtists.length > 0 && (
            <LikedElements data={likedArtists} title={"Artists"} />
          )}

          {likedAlbums.length > 0 && (
            <LikedElements data={likedAlbums} title={"Albums"} />
          )}
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
}
