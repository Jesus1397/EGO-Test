import React from "react";
import { Params, useParams } from "react-router-dom";
import { Car } from "../models/CarModel";
import { cars } from "../database/CarsDB";

const CarDetail: React.FC = () => {
  const { id } = useParams<Params>();
  const car = cars.find((car: Car) => car.id === parseInt(id!, 10));

  if (!car) return <div>Auto no encontrado</div>;

  return (
    <div className="container">
      <h1>{car.name}</h1>
      <img src={car.image} alt={car.name} className="img-fluid" />
      <p>{car.description}</p>
      <p>Precio: {car.price}</p>
    </div>
  );
};

export default CarDetail;
