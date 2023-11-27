import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import CreatePostalItems from "../components/CreatePostalItems";
import Tracking from "../components/Tracking";

function MainContent() {
  return (
    <Routes>
      <Route path="/tracking" element={Tracking} />
      <Route path="/createPostalItems" element={CreatePostalItems} />
      <Route path="/" exact element={Home} />
    </Routes>
  );
}

export default MainContent;
