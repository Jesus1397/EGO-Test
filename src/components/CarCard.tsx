import React from "react";
import { Link } from "react-router-dom";
import { CarCardProps } from "../models/CarModel";
import "../styles/CarCard.css";

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="col-3 mb-5 d-flex align-items-stretch">
      <Link to={`/car/${car.id}`} className="text-style custom-link">
        <div className="card custom-card">
          <div className="card-body">
            <h5 className="card-title text-center">{car.name}</h5>
            <p className="card-text">
              {car.year} | ${car.price.toLocaleString()}
            </p>
            <img src={car.thumbnail} className="card-img-top" alt={car.name} />
          </div>
          <div className="view-model-button">Ver Modelo</div>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;
