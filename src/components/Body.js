"use client";

import Carousel from "./Carousel";
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export const Body = () => {
    const images = [
        '/images/carousel/jean-pierre-mandujano.png',
        '/images/carousel/layla-scheli.png',
        '/images/carousel/elvis-capia.png',
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Consider mobile view up to 768px width
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-white p-4 w-full flex flex-col min-h-screen justify-center">
            <div className="lg:pl-10 xl:pl-10 2xl:pl-16 md:pl-5 flex flex-col md:flex-row items-center md:items-start">
                <div className="w-full md:w-3/5 mt-12 text-center md:text-left">
                    <h1 className="text-customBlue font-timeburnerbold text-5xl mt-20 drop-shadow-lg lg:text-80px 2xl:text-8xl">
                        Aquí empieza <br />
                        <span className="text-colorTextNavbar text-5xl font-timeburnerbold md:text-7xl lg:text-7xl 2xl:text-80px leading-tight drop-shadow-lg">tu futuro tech</span>
                    </h1>
                    <p className="lg:w-4/5 xl:w-85 2xl:w-85 text-colorText mt-8 px-6 pl-1 text-xl text-justify font-poppinsregular leading-normal lg:leading-relaxed lg:text-2xl xl:text-2xl 2xl:text-2xl sm:text-2xl">
                        Upskilling para profesionales de tecnología, ciencias e ingeniería con el más alto nivel de exigencia. Aprende de nuestros Deep Mentors, los líderes tecnológicos más destacados de la región.
                    </p>
                    <ScrollLink to="my-courses" smooth={true} duration={600} offset={-60}>
                        <button className="bg-customBlue rounded-full text-2xl font-poppinssemibold  mt-9 p-2 px-9 md:text-lg sm:px-10">
                        ENTRENAMIENTOS
                        </button>
                    </ScrollLink>
                    <div className="flex flex-col mb-10 sm:flex-row items-center mt-12 space-y-6 md:mt-20 md:space-x-4 xl:space-x-9 2xl:space-x-9 sm:space-y-0 sm:space-x-10">
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--online-prediction] text-colorsIcon w-11 h-11 lg:w-9 lg:h-9 2xl:w-11 2xl:h-11 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText font-poppinsregular text-xl md:text-base lg:text-base xl:text-base 2xl:text-lg">Online | En vivo | Remoto</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--school-outline-rounded] text-colorsIcon w-11 h-11 lg:w-9 lg:h-9 2xl:w-11 2xl:h-11 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-xl sm:text-xl md:text-base font-poppinsregular lg:text-base xl:text-base 2xl:text-lg">Mentores expertos</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--rocket-launch-outline] text-colorsIcon w-11 h-11 lg:w-9 lg:h-9 2xl:w-11 2xl:h-11 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-xl sm:text-xl md:text-base font-poppinsregular lg:text-base xl:text-base 2xl:text-lg ">Vacantes limitadas</p>
                        </div>
                    </div>
                </div>
                {!isMobile && (
                    <div className="w-full md:w-1/2 lg:w-2/5 flex justify-end">
                        <Carousel images={images} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Body;

