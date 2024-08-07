import React from "react";
import { useParams } from "react-router-dom";
import { Car } from "../models/CarModel";
import "../styles/CarDetails.css";

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = React.useState<Car | null>(null);

  React.useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(
          `https://challenge.egodesign.dev/api/models/${id}`
        );
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCar();
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-md-8">
            <img
              src={car.photo}
              alt={car.name}
              className="img-fluid details-img"
            />
          </div>
          <div className="col-md-4">
            <p className="details-segment">{car.segment}</p>
            <h1 className="details-title">{car.name}</h1>
            <p className="details-description mt-4">
              Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem
              ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor
              sit amet orem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="p-0 m-0 row bg-light">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={"dsds"} alt={car.name} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={"dsds"} alt={car.name} className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={"dsds"} alt={car.name} className="d-block w-100" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container mt-4 bg-light">
        <div className="row align-items-center ">
          <div className="col-md-6 text-center">
            <h2>Título del Panel</h2>
            <p>
              Descripción del panel. Aquí puedes agregar más detalles o
              información relevante.
            </p>
          </div>
          <div className="col-md-6">
            <img src={car.photo} alt={car.name} className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={car.photo} alt={car.name} className="img-fluid" />
          </div>
          <div className="col-md-6 text-center">
            <h2>Título del Panel</h2>
            <p>
              Descripción del panel. Aquí puedes agregar más detalles o
              información relevante.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
