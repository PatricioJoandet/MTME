import React, { createContext, useContext, useState, useEffect } from "react";
import { useType } from "./TypeContext";

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const likesLocalStorage = JSON.parse(localStorage.getItem("likes")) || [];
  const [likes, setLikes] = useState(likesLocalStorage);
  const likedArtists = likes.filter((l) => l.type === "artist");
  const likedAlbums = likes.filter((l) => l.type === "album");
  const { type } = useType();

  useEffect(() => {
    if (likesLocalStorage) {
      setLikes(likesLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const handleLike = (item) => {
    item.type = type;

    if (type === "album") {
      item.fullTitle = item.artists[0].name + " - " + item.title;
    }

    setLikes((prevLikes) =>
      prevLikes.some((likedItem) => likedItem.id === item.id)
        ? prevLikes.filter((likedItem) => likedItem.id !== item.id)
        : [...prevLikes, item]
    );
  };

  return (
    <LikesContext.Provider
      value={{ likes, handleLike, likedAlbums, likedArtists }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  return useContext(LikesContext);
};
