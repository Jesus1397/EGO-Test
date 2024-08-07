import React from "react";
import { useParams } from "react-router-dom";
import { Car } from "../models/CarModel";
import "../styles/CarDetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import parse from "html-react-parser";

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
      <div onClick={onClick} className="custom-arrow left-arrow">
        <span className="arrow-text">
          <img src="/arrow-left.svg" alt="" />
        </span>
      </div>
    );
  };

  const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
      <div onClick={onClick} className="custom-arrow right-arrow">
        <span className="arrow-text">
          <img src="/arrow-right.svg" alt="" />
        </span>
      </div>
    );
  };

  const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
    return (
      <div
        onClick={onClick}
        className={`custom-dot ${active ? "active" : "inactive"}`}
      />
    );
  };

  return (
    <>
      <div className="container">
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
      <div className="carousel-container">
        <Carousel
          arrows
          responsive={responsive}
          showDots={true}
          centerMode={true}
          customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
          customRightArrow={<CustomRightArrow onClick={() => {}} />}
          customDot={<CustomDot onClick={() => {}} index={0} active={false} />}
          className="carousel-box"
        >
          {[...car.model_features].map((item, index) => (
            <div className="carousel-card" key={`feature-${index}`}>
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid carousel-img"
              />
              <p className="carousel-title">{item.name}</p>
              <p className="carousel-description">{item.description}</p>
            </div>
          ))}
          {[...car.model_highlights].map((item, index) => (
            <div className="carousel-card" key={`highlight-${index}`}>
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid carousel-img"
              />
              <p className="carousel-title">{item.title}</p>
              <div className="carousel-description">{parse(item.content)}</div>
            </div>
          ))}
        </Carousel>
      </div>
      {car.model_highlights.map((highlight, index) => (
        <div className="container mt-5 mb-5" key={`highlight-section-${index}`}>
          <div className="row align-items-center">
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6 d-flex justify-content-end d-md-none d-block">
                  <img
                    src="/car-1.svg"
                    alt={highlight.title}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 text-left">
                  <h2 className="panel-title">{highlight.title}</h2>
                  <div className="panel-description">
                    {parse(highlight.content)}
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end d-md-block d-none">
                  <img
                    src="/car-1.svg"
                    alt={highlight.title}
                    className="img-fluid"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 d-flex justify-content-start">
                  <img
                    src="/car-2.svg"
                    alt={highlight.title}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 text-left">
                  <h2 className="panel-title">{highlight.title}</h2>
                  <div className="panel-description">
                    {parse(highlight.content)}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default CarDetail;
