import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 md:py-6 px-4 sm:px-8 md:px-10 bg-(--c2) flex items-center justify-between sticky top-0 z-50 shadow-md">
      <h2 className="font-bold text-xl md:text-2xl tracking-tight">
        Media Search
      </h2>
      
      <div className="flex gap-2 sm:gap-4 md:gap-5 items-center">
        <Link
          className="text-xs sm:text-sm md:text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-3 md:px-5 py-2 transition-all hover:opacity-90"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-xs sm:text-sm md:text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-3 md:px-5 py-2 transition-all hover:opacity-90"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;