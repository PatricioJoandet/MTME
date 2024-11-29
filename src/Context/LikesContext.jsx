import React, { createContext, useContext, useState, useEffect } from "react";
import { useType } from "./TypeContext";

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const likesLocalStorage = JSON.parse(localStorage.getItem("likes"));
  const [likes, setLikes] = useState(likesLocalStorage);
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
    const itemWithType = { ...item, type };

    setLikes((prevLikes) =>
      prevLikes.some((likedItem) => likedItem.id === item.id)
        ? prevLikes.filter((likedItem) => likedItem.id !== item.id)
        : [...prevLikes, itemWithType]
    );
  };

  return (
    <LikesContext.Provider value={{ likes, handleLike }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  return useContext(LikesContext);
};
