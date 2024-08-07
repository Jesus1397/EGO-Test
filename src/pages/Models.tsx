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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] =
    useState<boolean>(false);

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

    if (filter !== "Todos") {
      if (filter === "Autos") {
        updatedCars = updatedCars.filter(
          (car) => car.segment === "Sedan" || car.segment === "Hatchback"
        );
      } else {
        updatedCars = updatedCars.filter((car) => car.segment === filter);
      }
    }

    if (sort === "price") {
      updatedCars.sort((a, b) => a.price - b.price);
    } else if (sort === "year-newest") {
      updatedCars.sort((a, b) => b.year! - a.year!);
    } else if (sort === "year-oldest") {
      updatedCars.sort((a, b) => a.year! - b.year!);
    } else if (sort === "price-desc") {
      updatedCars.sort((a, b) => b.price - a.price);
    }

    setFilteredCars(updatedCars);
  }, [filter, sort, cars]);

  const handleFilterClick = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleSortChange = (sortValue: string) => {
    setSort(sortValue);
  };

  if (loading) {
    return (
      <div className="container loading">
        <div className="row align-items-center justify-content-center">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container model">
        <h2 className="model-title">Descubrí todos los modelos</h2>
        <div className="filter-section">
          <div className="filter-box d-none d-md-block">
            <span className="filter-span">Filtrar por:</span>
            {["Todos", "Autos", "Pickups y Comerciales", "SUVs"].map((f) => (
              <button
                key={f}
                className={`filter-button ${filter === f ? "active" : ""}`}
                onClick={() => handleFilterClick(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="dropdown dropend d-block d-md-none">
            <button
              className="btn sort-button"
              type="button"
              id="filterDropdownButton"
              aria-expanded={isFilterDropdownOpen ? "true" : "false"}
              onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
            >
              Filtrar por {""}
              <img
                src={isFilterDropdownOpen ? "/arrow-up.svg" : "/arrow-down.svg"}
                alt="Filter button"
                className="d-inline-block"
              />
            </button>
            <ul
              className={`dropdown-menu ${isFilterDropdownOpen ? "show" : ""}`}
              aria-labelledby="filterDropdownButton"
            >
              {["Todos", "Autos", "Pickups y Comerciales", "SUVs"].map((f) => (
                <li key={f}>
                  <button
                    className={`dropdown-item`}
                    onClick={() => {
                      handleFilterClick(f);
                      setIsFilterDropdownOpen(false);
                    }}
                  >
                    {f}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown dropstart">
            <button
              className="btn sort-button"
              type="button"
              id="dropdownMenuButton"
              aria-expanded={isDropdownOpen ? "true" : "false"}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Ordenar por {""}
              <img
                src={isDropdownOpen ? "/arrow-up.svg" : "/arrow-down.svg"}
                alt="Sort button"
                className="d-inline-block"
              />
            </button>
            <ul
              className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("")}
                >
                  Nada
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("price")}
                >
                  De <strong>menor</strong> a <strong>mayor</strong> precio
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("price-desc")}
                >
                  De <strong>mayor</strong> a <strong>menor</strong> precio
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("year-newest")}
                >
                  Más <strong>nuevos</strong> primero
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("year-oldest")}
                >
                  Más <strong>viejos</strong> primero
                </button>
              </li>
            </ul>
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
