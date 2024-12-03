import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useLikes } from "../Context/LikesContext";
import axios from "axios";
import Toast from "./Toast";
import Carousel from "./Carousel";
import { useType } from "../Context/TypeContext";
import Tracklist from "./Tracklist";
import Stats from "./Stats";
import Dropdown from "./Dropdown";
import MoreInfo from "./MoreInfo";
import Loading from "./Loading";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ItemDetail({ data, setData }) {
  const { id, type } = useParams();
  const { setType } = useType();
  const { likes, handleLike } = useLikes();
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const token = import.meta.env.VITE_DISCOGS_USER_TOKEN;
  const isLiked = likes.some((likedItem) => likedItem.id === data?.id);
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  useEffect(() => {
    if (!item) {
      const fetchData = async () => {
        setLoading(true);
        setType(type);

        try {
          const url = `https://api.discogs.com/${
            type == "artist" ? "artists" : "releases"
          }/${id}`;

          const response = await axios.get(url, {
            headers: {
              Authorization: `Discogs token=${token}`,
            },
          });
          if (!response.data.images || response.data.images.length === 0) {
            response.data.backup_image = "/no_record.png";
            console.log(data.backup_image);
          }
          setData(response.data);
          setSelectedImage(
            response.data.images?.[0]?.uri || response.data.backup_image
          );
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    } else {
      setData(item);
      setSelectedImage(item.images[0]?.uri) || data.backup_image;
      setLoading(false);
    }
  }, [id, token]);

  const handleClick = () => {
    handleLike({ ...data });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="mt-20">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="mx-4">
            <button
              onClick={() => navigate(-1)}
              className="after:contents bg-gradient-to-r from-transparent to-[#F72798] text-white px-4 py-2 rounded mb-4  hover:bg-gradient-to-l hover:from-transparent hover:to-[#F72798] transition-all duration-300"
            >
              <IoMdArrowRoundBack size={30} />
            </button>
          </div>
          <div className="grid grid-cols-2">
            {/*IMAGES*/}

            <div className="flex flex-row">
              <Carousel
                setSelectedImage={setSelectedImage}
                data={data}
                selectedImage={selectedImage}
              />
              <img
                src={selectedImage}
                alt="Selected"
                className="object-cover w-[600px] h-[600px] mx-auto"
              />
            </div>
            <div className="grid grid-cols-3 grid-rows-[auto,auto,auto]  mx-auto my-4 ">
              {/*TITLES*/}
              <div className="col-span-3 ">
                <h1 className="text-4xl font-bold text-wrap">
                  {data.title || data.name}
                </h1>
                {type === "album" && (
                  <>
                    <h2 className="text-2xl">{data.artists[0].name}</h2>
                    <p>{data.year}</p>
                  </>
                )}
              </div>
              {/*STATS*/}
              <div className=" col-span-1 stats row-start-2 bg-transparent shadow h-32 p-2 my-5 hover:bg-base-100">
                <Stats
                  data={data.community}
                  isLiked={isLiked}
                  handleClick={handleClick}
                  type={type}
                />
              </div>
              {/*TRACKLIST*/}
              {type === "album" ? (
                <div className="col-span-2 row-start-3 collapse-title text-xl font-medium">
                  <Dropdown title={"Tracklist"}>
                    <Tracklist data={data.tracklist} />
                  </Dropdown>
                </div>
              ) : (
                <div className="col-span-2 row-start-3 collapse-title text-xl font-medium">
                  <Dropdown title={"More info"}>
                    <MoreInfo
                      profile={data.profile || "No info"}
                      links={data?.urls}
                    />
                  </Dropdown>
                </div>
              )}
            </div>
            <Toast
              msg={isLiked ? `Added to likes!` : `Removed from likes!`}
              show={showToast}
            />
          </div>
        </div>
      )}
    </div>
  );
}
