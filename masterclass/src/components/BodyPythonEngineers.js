"use client";

import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

export const Body = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Consider mobile view up to 768px width
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const opts = {
        height: isMobile ? '200' : '220', // Reduced height for desktop view
        width: isMobile ? '100%' : '360',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="bg-white p-4 lg:pb-0 w-full flex flex-col min-h-screen justify-center">
            <div className="md:pl-12 flex flex-col md:flex-row items-center md:items-start">
                <div className="w-full md:w-1/2 mt-20 text-center md:text-left">
                    <h1 className="text-customBlue font-timeburnerbold  text-5xl mt-14 leading-tight drop-shadow-lg md:text-8xl">
                        Python<br />
                        <span className="text-7xl md:text-80 font-fuentetitulo drop-shadow-lg">para ingenieros</span>
                    </h1>
                    <p className="text-colorText mt-8 px-6 pl-1 text-2xl font-poppinsregular leading-normal md:text-xl sm:text-2xl">
                        Programa en vivo, intensivo y ultra personalizado.
                    </p>
                    <p className="text-colorText mt-6 px-6 pl-1 text-2xl font-poppinsregular leading-normal md:text-xl sm:text-2xl">
                        Diseñado para ingenieros que buscan maximizar sus conocimientos sumando
                        la habilidad de tratar datos y automatizar procesos con programación.
                    </p>
                    <div className="flex flex-col mb-10 sm:flex-row items-center mt-12 space-y-6 md:mt-20 md:space-x-16 sm:space-y-0 sm:space-x-10">
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[mdi--calendar-range] text-colorsIcon w-9 h-9 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText font-poppinsregular text-2xl  md:text-base ">8 semanas</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--online-prediction] text-colorsIcon w-9 h-9  mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-2xl sm:text-xl md:text-base font-poppinsregular">Virtual en vivo</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[mdi--account-group-outline] text-colorsIcon w-9 h-9 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-2xl sm:text-xl md:text-base font-poppinsregular">Máximo 10 participantes</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center lg:mt-20 md:mt-0">
                    <div className="md:w-[50%] flex flex-col items-center bg-colorBackgroundCards" style={{ maxWidth: opts.width }}>
                        <div className="bg-blue-500 font-poppinsbold font-extrabold lg:text-2xl text-white text-center w-full py-4 mt-0"> {/* Adjusted mt-4 */}
                            ¡QUEDAN POCOS CUPOS!
                        </div>
                        <div className="mt-0">
                            <YouTube videoId="Ni6SlemWS1Y" opts={opts} />
                        </div>
                        <div className="text-customBlue font-poppinsbold text-xl mt-4">
                            <h1>MÓDULO 1</h1>
                            <p>lorem imsum</p>
                            <p>lorem imsum</p>
                            <p>lorem imsum</p>
                            <p>lorem imsum</p>
                        </div>
                        <div className="bg-colorsButton font-poppinsbold lg:text-base text-colorTextNavbar text-center w-full py-1 mt-2">
                            HASTA EL 14/03 <br />
                            <span className="font-poppinsbold text-3xl">USD 400.00 </span><br />
                            2 módulos
                        </div>
                        <button className="bg-customBlue rounded-full text-sm lg:text-xs font-poppinssemibold mt-4 mb-6 p-3 px-9 w-[90%] md:text-base sm:px-10">
                            ÚNETE A ESTE MASTERCLASS AHORA!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;

