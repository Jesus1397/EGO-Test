import React from "react";
import { Link } from "react-router-dom";

interface Car {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="col mb-4">
      <div className="card">
        <img src={car.image} className="card-img-top" alt={car.name} />
        <div className="card-body">
          <h5 className="card-title">{car.name}</h5>
          <p className="card-text">{car.description}</p>
          <Link to={`/car/${car.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
