import { useDispatch, useSelector } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div className="overflow-auto px-4 sm:px-8 md:px-12 py-6">
      {collection.length > 0 ? (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Your Collection</h2>
          <button
            onClick={clearAll}
            className="w-full sm:w-auto active:scale-95 transition cursor-pointer bg-red-600 px-6 py-2.5 text-base md:text-lg font-medium rounded shadow-lg hover:bg-red-700"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-3xl md:text-5xl text-gray-400 font-medium text-center">
            Collection is Empty
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-items-center">
        {collection.map((item, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <CollectionCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;