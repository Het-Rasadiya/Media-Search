import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="w-full">
      <form
        onSubmit={submitHandler}
        className="flex flex-row bg-(--c1) gap-3 md:gap-5 py-6 md:py-10 px-4 md:px-10"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="flex-1 min-w-0 border-2 px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl rounded outline-none focus:border-indigo-500 transition-colors"
          type="text"
          placeholder="Search anything..."
        />

        <button 
          type="submit"
          className="active:scale-95 cursor-pointer border-2 px-4 md:px-8 py-2 md:py-3 text-lg md:text-xl rounded outline-none bg-white text-black hover:bg-gray-100 transition-all font-medium whitespace-nowrap"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;