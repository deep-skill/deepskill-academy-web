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
        height: isMobile ? '200' : '180', // Reduced height for desktop view
        width: isMobile ? '100%' : '355',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="bg-white p-4 lg:pb-0 w-full flex flex-col min-h-screen justify-center">
            <div className="md:pl-16 flex flex-col md:flex-row items-center md:items-start">
                <div className="w-full md:w-1/2 mt-20 text-center md:text-left">
                    <h1 className="text-customBlue font-timeburnerbold text-5xl mt-14 leading-tight drop-shadow-lg md:text-6xl lg:text-8xl">
                        Python & SQL<br />
                        <span className="text-colorTextNavbar text-40px md:text-6xl lg:text-80px font-timeburnerbold leading-tight drop-shadow-lg">for Data Projects</span>
                    </h1>
                    <p className="text-colorText mt-8 lg:mt-10 px-3 pl-1 text-xl font-poppinsbold leading-normal lg:text-26px md:text-xl sm:text-2xl">
                        Programa en vivo, intensivo y ultra personalizado.
                    </p>
                    <p className="text-colorText mt-6 lg:mt-10 px-3 pl-1 text-xl font-poppinsregular leading-normal md:text-xl lg:text-2xl sm:text-2xl lg:leading-snug">
                        Diseñado para ingenieros que buscan maximizar sus conocimientos sumando
                        la habilidad de tratar datos y automatizar procesos con programación.
                    </p>
                    <div className="flex flex-col mb-10 sm:flex-row items-center mt-12 space-y-6 md:mt-20 md:space-x-10 sm:space-y-0 sm:space-x-10">
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[mdi--calendar-range] text-colorsIcon w-9 h-9 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText font-poppinsregular text-2xl md:text-base lg:text-xl">8 semanas</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--online-prediction] text-colorsIcon w-9 h-9  mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-2xl sm:text-xl md:text-base lg:text-xl font-poppinsregular">Virtual en vivo</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[mdi--account-group-outline] text-colorsIcon w-9 h-9 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-2xl sm:text-xl md:text-base lg:text-xl font-poppinsregular">Máximo 10 participantes</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col items-center lg:mt-20 md:mt-0">
                    <div className="md:w-[50%] flex flex-col items-center bg-colorBackgroundCards" style={{ maxWidth: opts.width }}>
                        <div className="bg-blue-500 font-poppinsbold font-extrabold text-xl lg:text-2xl text-white text-center w-full py-4 mt-0">
                            ¡QUEDAN POCOS CUPOS!
                        </div>
                        <div className="mt-0">
                            <YouTube videoId="Ni6SlemWS1Y" opts={opts} />
                        </div>
                        <div className="text-customBlue font-poppinsbold mt-4 w-full px-7">
                            <h1 className='font-poppinsbold text-xl text-left'>Módulo 1</h1>
                            <p className='text-sm text-colorTextNavbar text-left'>Martes y jueves de 7 pm a 9 pm</p>
                            <p className='text-sm text-colorTextNavbar text-left'>Jun 11 - Jul 04</p>
                            <h1 className='font-poppinsbold text-xl mt-5 text-left'>Módulo 2</h1>
                            <p className='text-sm text-colorTextNavbar text-left'>Martes y jueves de 7 pm a 9 pm</p>
                            <p className='text-sm text-colorTextNavbar text-left'>Jun 11 - Jul 04</p>
                            <div className="mt-4 text-center justify-between">
                                <p className='text-sm text-customBlue'>1 módulo <span className='ml-12'>2 módulos</span></p>
                                <p className='text-base text-customBlue'>USD 300.00 <span className='ml-6'>USD 500.00</span></p>
                            </div>
                        </div>
                        <div className="bg-colorsButton font-poppinsbold lg:text-sm text-colorTextNavbar text-center w-full py-1 mt-2">
                            HASTA EL 14/03 <br />
                            <span className="font-poppinsbold text-2xl">USD 400.00 </span><br />
                            2 módulos
                        </div>
                        <a href="https://wa.me/message/NLMBFZBSKV64M1" target="_blank" className="bg-customBlue rounded-full text-xl font-poppinssemibold mt-4 mb-6 p-2 px-9 w-[90%] md:text-base lg:text-xl sm:px-10 text-center">
                            ¡ÚNETE AHORA!
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Body;


