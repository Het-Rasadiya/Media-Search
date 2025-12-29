import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />

      <main className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </main>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;
