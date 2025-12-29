import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

const Home = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div className="w-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="py-6 md:py-10">
          <SearchBar />
        </div>

        {query !== "" && (
          <div className="flex flex-col gap-6">
            <div className="border-b border-gray-800">
              <Tabs />
            </div>
            <div className="pb-10">
              <ResultGrid />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;