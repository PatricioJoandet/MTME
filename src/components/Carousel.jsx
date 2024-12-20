import React from "react";

export default function Carousel({ data, setSelectedImage, selectedImage }) {
  return (
    <div className="carousel carousel-vertical w-24 ml-4 h-[600px] gap-2">
      {data.images?.map((image, index) => (
        <div
          className="carousel-item cursor-pointer p-1"
          key={index}
          onClick={() => setSelectedImage(image.uri)}
        >
          <img
            src={image.uri}
            alt={`Thumbnail ${index + 1}`}
            className={`w-[100px] h-[100px] p-[1px] ${
              selectedImage === image.uri
                ? "ring-1 outline-[#EBF400] border-[#EBF400] ring-[#EBF400]"
                : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
}
