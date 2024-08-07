import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Models from "./pages/Models";
import CarDetail from "./pages/CarDetails";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/models" replace />} />
        <Route path="/models" element={<Models />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer></footer>
    </div>
  );
};

export default App;
