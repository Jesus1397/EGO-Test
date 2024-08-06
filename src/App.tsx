import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Models from "./pages/Models";
import CarDetail from "./pages/CarDetail";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Models />} />
        <Route path="/models" element={<Models />} />
        <Route path="/car/:id" element={<CarDetail />} />
      </Routes>
    </div>
  );
};

export default App;
