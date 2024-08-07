import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import { Car } from "../models/CarModel";
import "../styles/Model.css";

const Models: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("Todos");
  const [sort, setSort] = useState<string>("default");

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
        setFilteredCars(data);
      } catch (error) {
        setError("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    let updatedCars = [...cars];

    // Filtrar
    if (filter !== "Todos") {
      if (filter === "Autos") {
        updatedCars = updatedCars.filter(
          (car) => car.segment === "Sedan" || car.segment === "Hatchback"
        );
      } else {
        updatedCars = updatedCars.filter((car) => car.segment === filter);
      }
    }

    // Ordenar
    if (sort === "price") {
      updatedCars.sort((a, b) => a.price - b.price);
    } else if (sort === "year") {
      updatedCars.sort((a, b) => b.year! - a.year!);
    }

    setFilteredCars(updatedCars);
  }, [filter, sort, cars]);

  const handleFilterClick = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container model">
        <h2 className="model-title mb-5">Descubrí todos los modelos</h2>

        <div className="filter-section mb-5 pb-3">
          <div className="filter-box">
            <span className="me-5">Filtrar por:</span>
            {["Todos", "Autos", "Pickups y Comerciales", "SUVs"].map((f) => (
              <button
                key={f}
                className={`filter-button me-5 ${filter === f ? "active" : ""}`}
                onClick={() => handleFilterClick(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="dropdown">
            <label htmlFor="sort">Ordenar por: </label>
            <select
              id="sort"
              className="sort-dropdown"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="default">Seleccione</option>
              <option value="price">Precio</option>
              <option value="year">Año</option>
            </select>
          </div>
        </div>

        <div className="row mb-5">
          {filteredCars.map((car: Car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Models;
