import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const slideRef = useRef(null);
    const intervalRef = useRef(null);

    const images = [
        "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/abstract.jpg",
        "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/animal.jpg",
        "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/architecture.jpg",
        "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/leaf.jpg",
        "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/space.jpg",
        "https://raw.githubusercontent.com/asbelljc/carousel-builder/main/sample/Images/twig.jpg"
    ];

    const totalImages = images.length;

    useEffect(() => {
        // Add first and last clones for infinite loop effect
        const firstClone = images[0];
        const lastClone = images[totalImages - 1];
        const extendedImages = [lastClone, ...images, firstClone];
        slideRef.current.style.transform = `translateX(-100%)`;

        const autoSlide = () => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setIsTransitioning(true);
        };

        intervalRef.current = setInterval(autoSlide, 5000);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (isTransitioning) {
            slideRef.current.style.transition = 'transform 0.4s ease-in-out';
            slideRef.current.style.transform = `translateX(-${100 * currentIndex}%)`;

            if (currentIndex === 0) {
                setTimeout(() => {
                    slideRef.current.style.transition = 'none';
                    setCurrentIndex(totalImages);
                    slideRef.current.style.transform = `translateX(-${100 * totalImages}%)`;
                }, 400);
            } else if (currentIndex === totalImages + 1) {
                setTimeout(() => {
                    slideRef.current.style.transition = 'none';
                    setCurrentIndex(1);
                    slideRef.current.style.transform = `translateX(-100%)`;
                }, 400);
            }

            setIsTransitioning(false);
        }
    }, [currentIndex, isTransitioning, totalImages]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setIsTransitioning(true);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        setIsTransitioning(true);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index + 1);
        setIsTransitioning(true);
    };

    return (
        <div className="carousel-frame">
            <div className="carousel-slide" ref={slideRef}>
                <img src={images[totalImages - 1]} alt="Last Clone" />
                {images.map((img, index) => (
                    <img src={img} alt={`Slide ${index}`} key={index} />
                ))}
                <img src={images[0]} alt="First Clone" />
            </div>
            <FaChevronLeft className="carousel-prev" onClick={prevSlide} />
            <FaChevronRight className="carousel-next" onClick={nextSlide} />
            <ol className="carousel-dots">
                {images.map((_, index) => (
                    <li
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={currentIndex === index + 1 ? 'active-dot' : ''}
                    ></li>
                ))}
            </ol>
        </div>
    );
};

export default Carousel;
