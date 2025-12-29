import React from "react";
import { useDispatch } from "react-redux";
import { addedToast, addToCollection } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  
  const collectionADD = (item) => {
    dispatch(addToCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className="w-full relative h-64 sm:h-72 md:h-80 bg-gray-900 rounded-xl overflow-hidden group">
      <a target="_blank" className="h-full block" href={item.url} rel="noreferrer">
        {item.type === "photo" && (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt={item.title}
          />
        )}
        {item.type === "video" && (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            src={item.src}
          ></video>
        )}
        {item.type === "gif" && (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt={item.title}
          />
        )}
      </a>

      <div className="flex justify-between gap-3 items-end w-full px-4 pb-4 pt-10 absolute bottom-0 text-white bg-linear-to-t from-black/90 via-black/40 to-transparent">
        <h2 className="text-sm md:text-base font-medium capitalize line-clamp-2 leading-tight">
          {item.title}
        </h2>
        <button
          onClick={(e) => {
            e.preventDefault();
            collectionADD(item);
          }}
          className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs md:text-sm rounded px-4 py-2 cursor-pointer font-medium transition-colors shrink-0"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;