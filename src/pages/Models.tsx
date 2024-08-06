import React from "react";
import CarCard from "../components/CarCard";
import { Car } from "../models/CarModel";
import { cars } from "../database/CarsDB";

const Models: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        {cars.map((car: Car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Models;
