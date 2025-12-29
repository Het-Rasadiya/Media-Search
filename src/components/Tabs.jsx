import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex items-center gap-3 sm:gap-5 p-4 md:p-10 overflow-x-auto no-scrollbar">
      {tabs.map((ele, idx) => (
        <button
          key={idx}
          onClick={() => {
            dispatch(setActiveTabs(ele));
          }}
          className={`${
            activeTab === ele 
              ? "bg-blue-700 text-white shadow-md" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          } px-4 sm:px-6 py-2 rounded-full cursor-pointer active:scale-95 uppercase text-xs sm:text-sm md:text-base font-semibold transition-all whitespace-nowrap`}
        >
          {ele}
        </button>
      ))}
    </div>
  );
};

export default Tabs;