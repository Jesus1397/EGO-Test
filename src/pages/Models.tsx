import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import { Car } from "../models/CarModel";
import "../styles/Model.css";
import FilterSection from "../components/Filters";
import Loading from "../components/Loading";

const Models: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
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
        console.error("Error fetching car data:", error);
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

  if (!cars) {
    return <Loading />;
  }

  return (
    <>
      <div className="container model">
        <h2 className="model-title">Descubrí todos los modelos</h2>
        <FilterSection
          filter={filter}
          sort={sort}
          isDropdownOpen={isDropdownOpen}
          isFilterDropdownOpen={isFilterDropdownOpen}
          handleFilterClick={handleFilterClick}
          handleSortChange={handleSortChange}
          setIsDropdownOpen={setIsDropdownOpen}
          setIsFilterDropdownOpen={setIsFilterDropdownOpen}
        />
        <div className="row">
          {filteredCars.map((car: Car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Models;
