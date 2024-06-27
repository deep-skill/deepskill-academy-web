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
            <div className="bg-black bg-opacity-75 py-10 lg:pb-2 w-full" style={{ backgroundImage: 'url("/images/background-masterclass.png")', backgroundBlendMode: 'overlay' }}>
                <div className="container px-8 sm:px-8 md:px-14 lg:px-20">
                    <h2 className="font-poppinsbold text-white text-4xl text-center md:text-left mb-0">
                        Contenido del masterclass
                    </h2>
                    <p className="font-poppinssemibold text-white text-base lg:text-xl text-center md:text-lg md:text-left mb-12">
                        Lo que necesitas saber
                    </p>
                    <div className="flex flex-wrap items-center mb-8 lg:space-x-20">
                        <div className="w-full md:w-1/2 lg:px-24">
                            <p className="font-poppinsregular text-white lg:text-xl text-center lg:text-justify md:text-left mb-6 lg:mb-10">
                                Organizamos junto a nuestros expertos un temario que te ayudará a alcanzar tus metas profesionales.
                            </p>
                            <button className="bg-customBlue font-poppinssemibold text-white lg:text-base py-2 px-10 rounded-full block mb-12">
                                SOLICITA MÁS DETALLES AQUÍ
                            </button>
                        </div>
                        <div className="w-full lg:w-2/5 bg-customBlue p-8 px-10 lg:p-14 lg:px-18 lg:py-14 rounded-[38px]">
                            <h3 className="font-poppinsregular text-white text-lg lg:text-lg mb-4">Sílabo</h3>
                            <h4 className="font-poppinsbold text-white text-md lg:text-xl mb-2">Módulo 1: Introducción a Python</h4>
                            <ul className="font-poppinsregular text-white list-disc lg:text-lg lg:px-6">
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
                </div>
            </div>
            <div className="w-full bg-colorTextNavbar text-center text-white py-4 px-2">
                <p className="font-poppinssemibold text-lg lg:text-left lg:ml-40">Tecnologías utilizadas</p>
                <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
                    {isMobile ? (
                        <Carousel autoPlay interval={3000} showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                            {['python', 'tensorflow', 'pandas', 'scikit-learn', 'matplotlib'].map((tech, index) => (
                                <div key={index} className="flex justify-center">
                                    <Image src={`/images/tech/${tech}.png`} alt={tech} width={60} height={30} className="m-8" />
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <div className="flex flex-wrap justify-center mt-2">
                            {['python', 'tensorflow', 'pandas', 'scikit-learn', 'matplotlib'].map((tech, index) => (
                                <Image key={index} src={`/images/tech/${tech}.png`} alt={tech} width={80} height={40} className="m-5 md:w-44 md:h-20 sm:h-10" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MasterclassContent;


