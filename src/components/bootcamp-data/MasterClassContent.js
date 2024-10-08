'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MasterclassContent = () => {
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
        <div className="w-full flex flex-col min-h-screen">
            <div className="relative w-full h-full bg-black bg-opacity-75 py-10 lg:pb-2" style={{ backgroundImage: 'url("/images/background-masterclass.png")', backgroundBlendMode: 'overlay' }}>
                <header className={`absolute top-0 left-0 lg:bg-customBlue lg:w-[50%] lg:rounded-br-[4rem] lg:py-6 py-5 text-center md:text-left ${isMobile ? 'bg-blue-700 w-full' : ''}`}>
                    <h1 className={`font-poppinsbold lg:-mb-2 text-32px md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-40px md:ml-20 lg:leading-relaxed ${isMobile ? 'p-2' : ''} drop-shadow-md`}>
                        Contenido de la masterclass <span className={`${isMobile ? 'block text-2xl' : 'inline'} md:text-5xl lg:text-4xl`}></span>
                    </h1>
                    {!isMobile && (
                        <h3 className={`font-poppinssemibold text-xl md:text-3xl lg:text-xl xl:text-xl 2xl:text-2xl md:ml-20 xl:leading-10 2xl:leading-relaxed ${isMobile ? 'p-0' : ''} drop-shadow-md`}>
                            Lo que necesitas saber 
                        </h3>
                    )}
                </header>
                <div className="container px-8 sm:px-8 md:px-10 lg:px-1 xl:px-10 pt-40">
                    <div className="flex flex-wrap items-center mb-8 lg:space-x-24 xl:space-x-20">
                        <div className="w-full md:w-1/2 lg:px-12 xl:px-12">
                            <p className="font-poppinsregular text-white lg:text-xl xl:text-xl 2xl:text-2xl text-xl text-center lg:text-justify md:text-left mb-10 lg:mb-10 xl:mb-15 2xl:mb-10">
                                Organizamos junto a nuestros expertos un temario que te ayudará a alcanzar tus metas profesionales.
                            </p>
                            <button className="bg-customBlue font-poppinssemibold text-white lg:text-base text-base py-2 px-10 rounded-full block mb-12">
                                <a href="https://drive.google.com/file/d/1jemGn7Js0pGnpgv_mcn8d5M77GXwhIS0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    TEMARIO DETALLADO
                                </a>
                            </button>
                        </div>
                        <div className="w-full lg:w-2/5 xl:w-3/10 relative">
                            <Carousel
                                autoPlay
                                interval={5000}
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop
                                useKeyboardArrows
                                showIndicators={false} // Oculta los indicadores de círculos
                                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                    hasPrev && (
                                        <button
                                            type="button"
                                            onClick={onClickHandler}
                                            title={label}
                                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-customBlue rounded-full"
                                        >
                                            &lt;
                                        </button>
                                    )
                                }
                                renderArrowNext={(onClickHandler, hasNext, label) =>
                                    hasNext && (
                                        <button
                                            type="button"
                                            onClick={onClickHandler}
                                            title={label}
                                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-customBlue rounded-full"
                                        >
                                            &gt;
                                        </button>
                                    )
                                }
                            >
                                <div className="bg-customBlue text-left p-8 px-10 lg:p-10 lg:px-10 xl:px-18 2xl:px-12 lg:py-14 rounded-[38px] flex items-stretch min-h-full">
                                    <div className="flex-1">
                                        <h4 className="font-poppinsbold text-white text-2xl lg:text-xl xl:text-2xl mb-6 2xl:mb-5 2xl:text-2xl">Fundamentos</h4>
                                        <ul className="font-poppinsregular text-white list-disc text-xl lg:text-lg lg:px-6 leading-normal lg:leading-loose">
                                            <li>Introducción a Python</li>
                                            <li>Estructuras de Control</li>
                                            <li>Strings, Listas y Tuplas</li>
                                            <li>Diccionarios y Sets</li>
                                            <li>Funciones y Módulos</li>
                                            <li>Programación funcional</li>
                                            <li>Programación orientada a objetos</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-customBlue text-left p-8 px-10 lg:p-10 lg:px-10 xl:px-18 2xl:px-18 lg:py-14 rounded-[38px] flex items-stretch min-h-full">
                                    <div className="flex-1">
                                        <h4 className="font-poppinsbold text-white text-2xl lg:text-xl xl:text-2xl mb-6 2xl:mb-5 2xl:text-2xl">Proyecto de datos</h4>
                                        <ul className="font-poppinsregular text-white list-disc text-xl lg:text-lg lg:px-6 leading-normal lg:leading-loose">
                                            <li>Manejo de archivos</li>
                                            <li>Consumo de API</li>
                                            <li>Pandas</li>
                                            <li>Base de datos (SQL)</li>
                                            <li>Estadística</li>
                                            <li>Análisis Exploratorio de Datos (EDA)</li>
                                            <li>Introducción a Machine Learning</li>
                                        </ul>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center text-white py-0 px-0">
                    <p className="font-poppinssemibold pt-5 lg:pt-2 xl:pt-2 2xl:pt-2 text-2xl lg:text-2xl lg:text-left lg:ml-20">Tecnologías utilizadas</p>
                    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-4 xl:px-10">
                        {isMobile ? (
                            <Carousel autoPlay interval={3000} showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows showIndicators={false}>
                                {['logo3', 'logo2', 'logo1', 'logo4', 'logo5', 'logo6'].map((tech, index) => (
                                    <div key={index} className="flex justify-center">
                                        <Image src={`/images/tech/${tech}.png`} alt={tech} width={80} height={40} className="m-28 my-10" />
                                    </div>
                                ))}
                            </Carousel>
                        ) : (
                            <div className="flex flex-wrap lg:gap-10 xl:gap-2 2xl:gap-10 justify-center mt-2">
                                {['logo3', 'logo2', 'logo1', 'logo4', 'logo5', 'logo6'].map((tech, index) => (
                                    <Image key={index} src={`/images/tech/${tech}.png`} alt={tech} width={100} height={40} className="m-5 lg:mx-5 xl:mx-12 md:w-20 md:h-20 sm:h-10" />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterclassContent;
