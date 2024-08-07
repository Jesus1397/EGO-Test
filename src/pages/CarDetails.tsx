import React from "react";
import { useParams } from "react-router-dom";
import { Car } from "../models/CarModel";
import "../styles/CarDetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    return (
      <div className="container loading">
        <div className="row align-items-center justify-content-center ">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  interface ArrowProps {
    onClick: () => void;
  }

  interface CustomDotProps {
    onClick: () => void;
    index: number;
    active: boolean;
  }

  const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          left: 0,
          width: "50px",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <span style={{ color: "white", fontSize: "24px" }}>{"<"}</span>
      </div>
    );
  };

  const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          right: 0,
          width: "50px",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        <span style={{ color: "white", fontSize: "24px" }}>{">"}</span>
      </div>
    );
  };

  const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
    return (
      <div
        onClick={onClick}
        style={{
          width: active ? "40px" : "8px",
          height: "8px",
          borderRadius: "4px",
          background: active ? "gray" : "lightgray",
          margin: "0 5px",
          cursor: "pointer",
        }}
      />
    );
  };

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
      <div className="carousel-box">
        <Carousel
          arrows
          responsive={responsive}
          showDots={true}
          infinite={true}
          centerMode={true}
          customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
          customRightArrow={<CustomRightArrow onClick={() => {}} />}
          customDot={<CustomDot onClick={() => {}} index={0} active={false} />}
        >
          {[...car.model_features].map((item, index) => (
            <div className="carousel-card">
              <img
                key={index}
                src={item.image}
                alt={item.name}
                className="img-fluid details-img"
              />
              <p>{item.name}</p>
              <p>{item.description}</p>
            </div>
          ))}
          {[...car.model_highlights].map((item, index) => (
            <div className="carousel-card">
              <img
                key={index}
                src={item.image}
                alt={item.title}
                className="img-fluid details-img"
              />
              <p>{item.title}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </Carousel>
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
