import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default App;