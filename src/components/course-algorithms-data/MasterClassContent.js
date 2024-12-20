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
                <header className={`absolute top-0 left-0 lg:bg-customBlue lg:w-[50%] 2xl:w-[45%] lg:rounded-br-[4rem] lg:py-6 py-5 text-center md:text-left ${isMobile ? 'bg-blue-700 w-full' : ''}`}>
                    <h1 className={`font-poppinsbold lg:-mb-2 leading-tight text-32px md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-40px md:ml-20 lg:leading-relaxed ${isMobile ? 'p-2' : ''} drop-shadow-md`}>
                        Contenido de la masterclass <span className={`${isMobile ? 'block text-2xl' : 'inline'} md:text-5xl lg:text-4xl`}></span>
                    </h1>
                    {!isMobile && (
                        <h3 className={`font-poppinssemibold text-xl md:text-3xl lg:text-xl xl:text-xl 2xl:text-xl md:ml-20 xl:leading-10 2xl:leading-loose ${isMobile ? 'p-0' : ''} drop-shadow-md`}>
                            Lo que necesitas saber 
                        </h3>
                    )}
                </header>
                <div className="container px-8 sm:px-8 md:px-10 lg:px-1 xl:px-10 pt-40 xl:pt-40 2xl:pt-24">
                    <div className="flex flex-wrap items-center mb-8 lg:space-x-20 xl:space-x-20">
                        <div className="w-full md:w-1/2 lg:px-12 xl:px-12">
                            <p className="font-poppinsregular text-white lg:text-xl xl:text-xl 2xl:text-xl text-xl text-center lg:text-justify md:text-left mb-10 lg:mb-10 xl:mb-15 2xl:mb-10">
                                Organizamos junto a nuestros expertos un temario que te ayudará a alcanzar tus metas profesionales.
                            </p>
                            <button className="bg-customBlue font-poppinssemibold  text-white lg:text-base text-base py-2 px-10 rounded-full block mb-12">
                                <a href="https://drive.google.com/file/d/1yma6tRa6X2yTBwlFlxJIykzNpVsw3qbo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    TEMARIO DETALLADO
                                </a>
                            </button>
                        </div>
                        <div className="w-full lg:w-2/5 2xl:w-[35%] bg-customBlue p-8 px-10 lg:p-18 lg:px-10 xl:px-18 2xl:px-18 lg:py-14 rounded-[38px]">
                            <h4 className="font-poppinsbold text-white text-xl lg:text-xl mb-2">Algoritmos</h4>
                            <ul className="font-poppinsregular text-white list-disc text-xl lg:text-lg lg:px-6 leading-normal lg:leading-loose">
                                <li>Pensamiento Computacional</li>
                                <li>Complejidad Algorítmica</li>
                                <li>Estructuras de Datos Lineales</li>
                                <li>Construcción de Estructuras de Datos Lineales</li>
                                <li>Estructuras de Datos No Lineales</li>
                                <li>Búsqueda Completa I - Fuerza Bruta</li>
                                <li>Recursión</li>
                                <li>Búsqueda Completa II - Backtracking</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center text-white py-0 px-0">
                    <p className="font-poppinssemibold lg:pt-0 xl:pt-4 2xl:pt-2 text-2xl lg:text-xl lg:text-left lg:ml-20">Tecnologías utilizadas</p>
                    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-4 xl:px-10">
                        {isMobile ? (
                            <Carousel autoPlay interval={3000} showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                                {['logo7', 'logo12', 'logo8', 'logo9', 'logo10', 'logo11'].map((tech, index) => (
                                    <div key={index} className="flex justify-center">
                                        <Image src={`/images/tech/${tech}.svg`} alt={tech} width={60} height={30} className="m-8 w-32 h-32" />
                                    </div>
                                ))}
                            </Carousel>
                        ) : (
                            <div className="flex flex-wrap lg:gap-1 xl:gap-2 2xl:gap-10 justify-center mt-2 xl:mt-6">
                                {['logo7', 'logo12', 'logo8', 'logo9', 'logo10', 'logo11'].map((tech, index) => (
                                    <Image key={index} src={`/images/tech/${tech}.png`} alt={tech} width={100} height={40} className="m-5 lg:mx-10 xl:mx-12 md:w-20 md:h-20 sm:h-10" />
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


