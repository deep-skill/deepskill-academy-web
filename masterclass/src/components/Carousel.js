"use client";

import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                nextSlide();
            } else if (touchEndX - touchStartX > 50) {
                prevSlide();
            }
        };

        const carouselElement = document.getElementById('carousel');

        carouselElement.addEventListener('touchstart', handleTouchStart);
        carouselElement.addEventListener('touchend', handleTouchEnd);

        return () => {
            carouselElement.removeEventListener('touchstart', handleTouchStart);
            carouselElement.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div
            id="carousel"
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mt-4 sm:mt-12 overflow-hidden flex items-center"
        >
            <style jsx>{`
                @media (max-width: 390px) and (min-height: 844px) {
                    #carousel {
                        max-width: 70vw; // Reducir el ancho en la vista 390x844
                    }
                    .carousel-slide img {
                        width: 100%; // Ajustar el ancho de la imagen al 100% del contenedor
                        height: auto; // Mantener la proporción original de la imagen
                    }
                }
            `}</style>

            <div
                className="flex transition-transform duration-700 ease-in-out carousel-slide"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="min-w-full flex-shrink-0 flex items-center justify-center"
                        style={{ height: '100%', paddingTop: '20px', paddingBottom: '20px' }}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="h-full w-auto object-cover rounded-bl-[142px]"
                            style={{ maxHeight: '100%', maxWidth: '100%' }}
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;

