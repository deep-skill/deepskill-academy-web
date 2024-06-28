"use client";

import Carousel from "./Carousel";
import { useState, useEffect } from 'react';

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
            <div className="md:pl-10 flex flex-col md:flex-row items-center md:items-start">
                <div className="w-full md:w-1/2 mt-12 text-center md:text-left">
                    <h1 className="text-customBlue font-timeburnerbold text-5xl mt-20 drop-shadow-lg lg:text-8xl ">
                        Aquí empieza <br />
                        <span className="text-colorTextNavbar text-40px font-timeburnerbold md:text-7xl lg:text-80px leading-tight drop-shadow-lg">tu futuro tech</span>
                    </h1>
                    <p className="text-colorText mt-8 px-6 pl-1 text-2xl font-poppinsregular leading-normal lg:leading-relaxed lg:text-3xl sm:text-2xl">
                        Conecta junto a nuestros expertos con el mundo tecnológico de hoy.
                    </p>
                    <button className="bg-customBlue rounded-full text-2xl font-poppinssemibold  mt-9 p-2 px-9 md:text-lg sm:px-10">
                        VER CURSOS
                    </button>
                    <div className="flex flex-col mb-10 sm:flex-row items-center mt-12 space-y-6 md:mt-20 md:space-x-9 sm:space-y-0 sm:space-x-10">
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--online-prediction] text-colorsIcon w-11 h-11 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText font-poppinsregular text-2xl md:text-base lg:text-base ">Online | En vivo | Remoto</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--school-outline-rounded] text-colorsIcon w-11 h-11 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-2xl sm:text-xl md:text-base font-poppinsregular lg:text-base">Mentores expertos</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--rocket-launch-outline] text-colorsIcon w-11 h-11 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-2xl sm:text-xl md:text-base font-poppinsregular lg:text-base ">Vacantes limitadas</p>
                        </div>
                    </div>
                </div>
                {!isMobile && (
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Carousel images={images} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Body;

