'use client'
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
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="bg-white p-4 lg:pb-0 w-full flex flex-col min-h-screen justify-center">
            <div className="md:pl-16 flex flex-col md:flex-row items-center md:items-start">
                <div className="w-full md:w-[60%] mt-20 2xl:mt-20 xl:mt-16 text-center md:text-left">
                    <h1 className="text-customBlue font-timeburnerbold text-5xl mt-14 leading-tight drop-shadow-lg md:text-6xl lg:text-80px xl:text-80px 2xl:text-8xl">
                        Bootcamp<br />
                        <span className="text-colorTextNavbar text-40px md:text-6xl lg:text-6xl xl:text-68px 2xl:text-7xl font-timeburnerbold leading-tight drop-shadow-lg">De Data</span>
                    </h1>
                    <p className="text-colorText mt-8 lg:mt-10 px-3 pl-1 text-xl font-poppinsbold leading-normal lg:text-2xl xl:text-2xl 2xl:text-26px md:text-xl sm:text-2xl">
                        Programa en vivo, intensivo y ultra personalizado.
                    </p>
                    <p className="text-colorText mt-6 lg:mt-10 px-3 pl-1 text-xl font-poppinsregular leading-normal md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl sm:text-2xl lg:leading-snug">
                        Diseñado para ingenieros que buscan maximizar sus conocimientos sumando
                        la habilidad de tratar datos y automatizar procesos con programación.
                    </p>
                    <div className="mt-6 lg:mt-12 mb-6 lg:mb-12 lg:w-[42%] 2xl:w-[50%] flex justify-center lg:justify-left">
                        <a href="https://wa.me/message/NLMBFZBSKV64M1" target="_blank" rel="noopener noreferrer" className="bg-customBlue rounded-full text-xl font-poppinssemibold p-2 lg:w-full px-9 md:text-base lg:text-xl sm:px-10 text-center">
                            ¡ÚNETE AHORA!
                        </a>
                    </div>
                    <div className="flex flex-col mb-10 lg:mb-16 sm:flex-row items-center mt-12 lg:mt-10 space-y-6 md:mt-20 md:space-x-16 sm:space-y-0 sm:space-x-10">
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[mdi--calendar-range] text-colorsIcon w-9 h-9 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText font-poppinsregular text-xl md:text-base lg:text-xl xl:text-base 2xl:text-xl">8 semanas</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--online-prediction] text-colorsIcon w-9 h-9  mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-xl sm:text-xl md:text-base lg:text-xl xl:text-base 2xl:text-xl font-poppinsregular">Virtual en vivo</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[mdi--account-group-outline] text-colorsIcon w-9 h-9 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-xl sm:text-xl md:text-base lg:text-xl xl:text-base 2xl:text-xl font-poppinsregular">Máximo 15 participantes</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-[40%] flex flex-col items-center lg:mt-24 md:mt-0">
                    <div className="md:w-[78%] flex flex-col items-center bg-colorBackgroundCards w-full rounded-3xl">
                        <div className="bg-blue-500 font-poppinsbold font-extrabold text-2xl lg:text-2xl text-white text-center w-full py-4 mt-6">
                            ¡QUEDAN POCOS CUPOS!
                        </div>
                        <div className="w-full">
                            <YouTube videoId="Ni6SlemWS1Y" opts={opts} className="w-full aspect-video" />
                        </div>
                        <div className="text-customBlue font-poppinsbold mt-6 w-full px-7 lg:pb-6">
                            <div className="flex items-center">
                                <div className="flex-1">
                                    <h1 className='font-poppinsbold text-xl text-left'>FECHA</h1>
                                    <p className='font-poppinsmedium text-sm lg:text-sm 2xl:text-lg xl:mt-2 2xl:mt-0 text-colorTextNavbar text-left'>Iniciamos el 06 de agosto de 2024</p>
                                </div>
                                <div className="mx-4 h-full border-l-2 border-black"></div>
                                <div className="flex-1">
                                    <h1 className='font-poppinsbold text-xl text-left'>HORARIO</h1>
                                    <p className='font-poppinsmedium lg:text-sm 2xl:text-lg text-sm xl:mt-2 2xl:mt-0 text-colorTextNavbar text-left'>Martes y jueves de  7 pm a 9 pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-colorsButton font-poppinsbold text-xs lg:text-sm text-colorTextNavbar rounded-3xl text-center w-full lg:p-3 py-3 lg:py-5 mt-5 flex justify-evenly">
                            <div>
                                HASTA EL 15/07 <br />
                                <span className="font-poppinsbold text-xl lg:text-3xl">USD 200.00 </span>
                            </div>
                            <div>
                                <div className="text-blue-500 text-xl lg:text-2xl line-through lg:mt-5 mt-3">
                                    USD 250.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Body;


