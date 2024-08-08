import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Models from "./pages/Models";
import CarDetail from "./pages/CarDetails";

const App: React.FC = () => {
  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();

    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Models />} />
        <Route path="/models" element={<Models />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer></footer>
    </div>
  );
};

export default App;
