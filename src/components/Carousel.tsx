import "../styles/Carousel.css";
import { Car } from "../models/CarModel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import parse from "html-react-parser";

interface CarouselCustomProps {
  car: Car;
}

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

const CarouselCustom: React.FC<CarouselCustomProps> = ({ car }) => {
  const combinedItems = [
    ...car.model_features.map((item, index) => ({
      id: `feature-${index}`,
      title: item.name,
      description: item.description,
      image: item.image,
    })),
    ...car.model_highlights.map((item, index) => ({
      id: `highlight-${index}`,
      title: item.title,
      description: item.content,
      image: item.image,
    })),
  ];

  return (
    <div className="slider-container">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass="custom-dot-list"
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
        customRightArrow={<CustomRightArrow onClick={() => {}} />}
        customDot={<CustomDot onClick={() => {}} index={0} active={false} />}
      >
        {combinedItems.map((item) => (
          <div className="carousel-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid carousel-img"
            />
            <h3 className="carousel-title">{item.title}</h3>
            <div className="carousel-description">
              {parse(item.description)}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCustom;
