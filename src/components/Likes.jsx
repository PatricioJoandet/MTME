import React, { useEffect } from "react";
import { useLikes } from "../Context/LikesContext";
import LikedElements from "./LikedElements.jsx";
import NoLikes from "./NoLikes.jsx";

export default function Likes() {
  const { likes, likedArtists, likedAlbums } = useLikes();
  document.title = "Likes";
  return (
    <div className="mx-10">
      {likes && likes.length > 0 ? (
        <div className="mt-32">
          <h1 className="text-white text-4xl font-bold ml-5">My likes</h1>
          <div className="mx-10 mt-5">
            {likedArtists.length > 0 && (
              <LikedElements data={likedArtists} title={"Artists"} />
            )}

            {likedAlbums.length > 0 && (
              <LikedElements data={likedAlbums} title={"Albums"} />
            )}
          </div>
        </div>
      ) : (
        <NoLikes />
      )}
    </div>
  );
}
