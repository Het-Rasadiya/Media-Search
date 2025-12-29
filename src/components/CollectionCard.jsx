import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  return (
    <div className="w-full relative h-64 sm:h-72 md:h-80 bg-white rounded-xl overflow-hidden group">
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

      <div
        className="flex justify-between gap-3 items-center w-full px-4 py-4 absolute bottom-0 bg-linear-to-t from-black/80 to-transparent text-white"
      >
        <h2 className="text-sm md:text-base font-medium capitalize line-clamp-2 leading-tight">
          {item.title}
        </h2>
        <button
          onClick={(e) => {
            e.preventDefault();
            removeFromCollection(item);
          }}
          className="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs md:text-sm rounded px-3 py-1.5 cursor-pointer font-medium transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;