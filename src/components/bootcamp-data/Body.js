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
                    <header className={`absolute top-20 left-0 bg-colorTextSubtitulo w-[60%] lg:w-[25%] xl:w-[32%] 2xl:w-[22%] lg:rounded-br-[3rem] xl:rounded-br-[4rem] rounded-br-[3rem] lg:py-6 2xl:py-5 py-3 text-center md:text-left`}>
                        <h1 className={` font-poppinsmedium lg:-mb-2 text-2xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-32px md:ml-20 drop-shadow-md`}>
                            BOOTCAMP
                        </h1>
                    </header>
                    <h1 className="text-customBlue font-timeburnerbold text-5xl mt-20 xl:mt-28 2xl:mt-20 leading-none drop-shadow-lg md:text-6xl lg:text-80px xl:text-80px 2xl:text-80px">
                        Python y SQL<br />
                        <span className="text-customBlue text-40px md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-timeburnerbold leading-none xl:leading-3">para ingenieros</span>
                    </h1>
                    <h3 className='text-customBlue text-2xl mt-4 md:text-6xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-andikanewbasicregular xl:leading-3 '>Aplicados a proyectos de Datos</h3>
                    <p className="text-colorText mt-8 2xl:mt-7 xl:mt-16 lg:mt-10 px-3 pl-1 text-xl font-poppinsbold leading-normal lg:text-2xl xl:text-2xl 2xl:text-2xl md:text-xl sm:text-2xl ">
                        Programa en vivo, intensivo y ultra personalizado.
                    </p>
                    <p className="text-colorText mt-6 lg:mt-10 2xl:mt-7 px-3 pl-1 text-xl font-poppinsregular leading-normal md:text-xl lg:text-xl xl:text-xl 2xl:text-xl sm:text-2xl lg:leading-snug 2xl:leading-snug">
                        Entrenamiento premium para profesionales de ciencias e ingeniería, basado en proyectos reales propuestos por
                        los participantes. 
                    </p>
                    <p className="text-colorText 2xl:mt-1 lg:mt-1 px-3 pl-1 text-xl font-poppinsregular leading-normal md:text-xl lg:text-xl xl:text-xl 2xl:text-xl sm:text-2xl lg:leading-snug">
                        Diseñado por líderes tecnológicos más top de la región. 
                    </p>
                    <div className="mt-6 lg:mt-12 2xl:mt-7 mb-6 2xl:mb-4 lg:mb-12 lg:w-[42%] 2xl:w-[50%] flex justify-center lg:justify-left">
                        <a href="https://wa.me/message/NLMBFZBSKV64M1" target="_blank" rel="noopener noreferrer" className="bg-customBlue rounded-full text-xl font-poppinssemibold p-2 lg:w-full px-9 md:text-base lg:text-xl sm:px-10 text-center">
                            ¡ÚNETE AHORA!
                        </a>
                    </div>
                    <div className="flex flex-col mb-10 lg:mb-16 sm:flex-row items-center mt-12 2xl:mt-6 lg:mt-10 space-y-6 md:mt-20 md:space-x-16 lg:space-x-10 xl:space-x-16 sm:space-y-0 sm:space-x-10">
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[mdi--calendar-range] text-colorsIcon w-9 h-9 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText font-poppinsregular text-xl md:text-base lg:text-base xl:text-base 2xl:text-xl">12 semanas</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--online-prediction] text-colorsIcon w-9 h-9  mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-xl sm:text-xl md:text-base lg:text-base xl:text-base 2xl:text-xl font-poppinsregular">Virtual en vivo</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[mdi--account-group-outline] text-colorsIcon w-9 h-9 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-xl sm:text-xl md:text-base lg:text-base xl:text-base 2xl:text-xl font-poppinsregular">Máximo 15 participantes</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-[40%] flex flex-col items-center lg:mt-24 md:mt-0">
                    <div className="md:w-[78%] flex flex-col items-center bg-colorBackgroundCards w-full rounded-3xl">
                        <div className="bg-blue-500 font-poppinsbold font-extrabold text-2xl lg:text-2xl text-white text-center w-full py-4 mt-6">
                            ¡QUEDAN POCOS CUPOS!
                        </div>
                        <div className="w-full">
                            <YouTube videoId="h0UP-4wAdkg" opts={opts} className="w-full aspect-video" />
                        </div>
                        <div className="text-customBlue font-poppinsbold mt-6 w-full px-7 lg:pb-6">
                            <div className="flex items-center">
                                <div className="flex-1">
                                    <h1 className='font-poppinsbold text-xl text-left'>FECHA</h1>
                                    <p className='font-poppinsmedium text-sm lg:text-sm 2xl:text-base xl:mt-2 2xl:mt-0 text-colorTextNavbar text-left'>Iniciamos el 17 de septiembre de 2024</p>
                                </div>
                                <div className="mx-4 h-full border-l-2 border-black"></div>
                                <div className="flex-1">
                                    <h1 className='font-poppinsbold text-xl text-left'>HORARIO</h1>
                                    <p className='font-poppinsmedium lg:text-sm 2xl:text-base text-sm xl:mt-2 2xl:mt-0 text-colorTextNavbar text-left'>Martes y jueves de  7 pm a 9 pm (UTC-5)</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-colorsButton font-poppinsbold text-xs lg:text-sm text-colorTextNavbar rounded-3xl text-center w-full lg:p-3 py-3 lg:py-5 mt-5 flex justify-evenly">
                            <div>
                                HASTA EL 30/08 <br />
                                <span className="font-poppinsbold text-xl lg:text-3xl">USD 600.00 </span>
                            </div>
                            <div>
                                <div className="text-blue-500 text-xl lg:text-2xl line-through lg:mt-5 mt-3">
                                    USD 750.00
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


