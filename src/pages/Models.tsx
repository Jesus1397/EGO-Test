import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import { Car } from "../models/CarModel";
import "../styles/Model.css";

const Models: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          "https://challenge.egodesign.dev/api/models/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        setError("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container">
        <h2 className="model-title mb-5">Descubrí todos los modelos</h2>

        <div className="filter-section mb-5 pb-3">
          <div className="filter-box">
            <span className="me-5">Filtrar por:</span>
            <button className="filter-button me-5">Todos</button>
            <button className="filter-button me-5">Autos</button>
            <button className="filter-button me-5">
              Pickups y Comerciales
            </button>
            <button className="filter-button me-5">SUVs y Crossovers</button>
          </div>
          <div className="dropdown">
            <label htmlFor="sort">Ordenar por: </label>
            <select id="sort" className="sort-dropdown">
              <option value="default">Seleccione</option>
              <option value="price">Precio</option>
              <option value="year">Año</option>
            </select>
          </div>
        </div>

        <div className="row mb-5">
          {cars.map((car: Car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Models;
