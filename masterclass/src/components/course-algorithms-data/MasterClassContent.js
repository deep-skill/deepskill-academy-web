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
                    <h1 className={`font-poppinsbold lg:-mb-2 text-32px md:text-4xl lg:text-40px md:ml-20 lg:leading-relaxed ${isMobile ? 'p-2' : ''} drop-shadow-md`}>
                        Contenido de la masterclass <span className={`${isMobile ? 'block text-2xl' : 'inline'} md:text-5xl lg:text-4xl`}></span>
                    </h1>
                    {!isMobile && (
                        <h3 className={`font-poppinssemibold text-xl md:text-3xl lg:text-2xl md:ml-20 leading-relaxed ${isMobile ? 'p-0' : ''} drop-shadow-md`}>
                            Lo que necesitas saber 
                        </h3>
                    )}
                </header>
                <div className="container px-8 sm:px-8 md:px-14 lg:px-10 pt-40">
                    <div className="flex flex-wrap items-center mb-8 lg:space-x-20 ">
                        <div className="w-full md:w-1/2 lg:px-12">
                            <p className="font-poppinsregular text-white lg:text-2xl text-xl text-center lg:text-justify md:text-left mb-10 lg:mb-10">
                                Organizamos junto a nuestros expertos un temario que te ayudará a alcanzar tus metas profesionales.
                            </p>
                            <button className="bg-customBlue font-poppinssemibold text-white lg:text-base text-base py-2 px-10 rounded-full block mb-12">
                                SOLICITA MÁS DETALLES AQUÍ
                            </button>
                        </div>
                        <div className="w-full lg:w-2/5 bg-customBlue p-8 px-10 lg:p-14 lg:px-18 lg:py-14 rounded-[38px]">
                            <h3 className="font-poppinsregular text-white text-xl lg:text-lg mb-2">Sílabo</h3>
                            <h4 className="font-poppinsbold text-white text-xl lg:text-xl mb-2">Algorithms & Data Structures</h4>
                            <ul className="font-poppinsregular text-white list-disc text-xl lg:text-lg lg:px-6 leading-normal lg:leading-loose">
                                <li>Arrays, Strings and Hash Tables</li>
                                <li>Linked List, Stack and Queues</li>
                                <li>Tree and Graph</li>
                                <li>Graph next level</li>
                                <li>Recursion and Backtracking</li>
                                <li>Dynamic Programming</li>
                                <li>Merge Sort</li>
                                <li>Binary Search</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center text-white py-4 px-0">
                    <p className="font-poppinssemibold lg:pt-10 text-2xl lg:text-2xl lg:text-left lg:ml-20">Tecnologías utilizadas</p>
                    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-10">
                        {isMobile ? (
                            <Carousel autoPlay interval={3000} showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                                {['logo3', 'logo2', 'logo1', 'logo4', 'logo5', 'logo6'].map((tech, index) => (
                                    <div key={index} className="flex justify-center">
                                        <Image src={`/images/tech/${tech}.png`} alt={tech} width={100} height={60} className="m-24" />
                                    </div>
                                ))}
                            </Carousel>
                        ) : (
                            <div className="flex flex-wrap gap-10 justify-center mt-2">
                                {['logo3', 'logo2', 'logo1', 'logo4', 'logo5', 'logo6'].map((tech, index) => (
                                    <Image key={index} src={`/images/tech/${tech}.png`} alt={tech} width={100} height={40} className="m-5 mx-12 md:w-20 md:h-20 sm:h-10" />
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


