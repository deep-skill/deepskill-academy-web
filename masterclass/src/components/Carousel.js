"use client";
import { useState } from 'react';

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

    return (
        <div className="relative w-[450px] h-[650px] mx-auto mt-8 overflow-hidden flex items-center">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="min-w-full flex-shrink-0 flex items-center justify-center"
                    >
                        <img src={image} alt={`Slide ${index}`} className="max-h-full w-auto object-cover rounded-bl-[142px]" />
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
