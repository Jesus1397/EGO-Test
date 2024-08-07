import React from "react";
import { useParams } from "react-router-dom";
import { Car } from "../models/CarModel";
import "../styles/CarDetails.css";
import parse from "html-react-parser";
import Loading from "../components/Loading";
import CarouselCustom from "../components/Carousel";

const replacePTags = (html: string) => {
  return html.replace(/<p>/g, "<div>").replace(/<\/p>/g, "</div>");
};

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
    return <Loading />;
  }

  return (
    <>
      <div className="container car-details">
        <div className="row car-main">
          <div className="col-md-8">
            <img src={car.photo} alt={car.name} className="img-fluid car-img" />
          </div>
          <div className="col-md-4 car-description">
            <p className="details-segment">{car.segment}</p>
            <h1 className="details-title">{car.name}</h1>
            <div className="details-description">
              {parse(replacePTags(car.description!))}
            </div>
          </div>
        </div>
      </div>
      <CarouselCustom car={car} />
      <div className="panel-box">
        {car.model_highlights.map((highlight, index) => (
          <div className="container" key={`highlight-section-${index}`}>
            <div className="row align-items-center panel">
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-6 d-flex justify-content-end d-md-none d-block">
                    <img
                      src="/car-1.png"
                      alt={highlight.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 text-left">
                    <h2 className="panel-title">{highlight.title}</h2>
                    <div className="panel-description">
                      {parse(replacePTags(highlight.content))}
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-end d-md-block d-none">
                    <img
                      src="/car-1.png"
                      alt={highlight.title}
                      className="img-fluid"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 d-flex justify-content-start">
                    <img
                      src="/car-2.png"
                      alt={highlight.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 text-left">
                    <h2 className="panel-title">{highlight.title}</h2>
                    <div className="panel-description">
                      {parse(replacePTags(highlight.content))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarDetail;
