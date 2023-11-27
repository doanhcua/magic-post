import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreatePostalItems from "./components/CreatePostalItems";
import Tracking from "./components/Tracking";
import RootPage from "./pages/RootPage";
import Login from "./components/Login";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<RootPage />}>
        <Route index element={<Home />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/createPostalItems" element={<CreatePostalItems />} />
      </Route>
    </Routes>
  );
}

export default App;
