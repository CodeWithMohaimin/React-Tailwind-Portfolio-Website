import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const images = [
    "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/abstract.jpg",
    "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/animal.jpg",
    "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/architecture.jpg",
    "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/leaf.jpg",
    "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/space.jpg",
    "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/twig.jpg",
  ];

  const totalImages = images.length;

  useEffect(() => {
    const autoSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    intervalRef.current = setInterval(autoSlide, 5000);

    return () => clearInterval(intervalRef.current);
  }, [totalImages]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-frame">
      <div className="carousel-slide">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={currentIndex === index ? "active" : ""}
          />
        ))}
      </div>
      <FaChevronLeft className="carousel-prev" onClick={prevSlide} />
      <FaChevronRight className="carousel-next" onClick={nextSlide} />
      <ol className="carousel-dots">
        {images.map((_, index) => (
          <li
            key={index}
            onClick={() => goToSlide(index)}
            className={currentIndex === index ? "active-dot" : ""}
          ></li>
        ))}
      </ol>
    </div>
  );
};

export default Carousel;
