"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Mentors = () => {
    const mentors = [
        {
            name: 'JEAN PIERRE MANDUJANO',
            role: 'Software Engineer | Engineering Manager | CTO',
            description: 'Founder & CTO de Deep Pit Technology Manager de Ingeniería en Scotiabank Tech Lead en BCP. Ingeniero de Software Senior en startups como Crehana y Fandango.',
            company: 'Deep Skill',
            companyLogo: '/images/company/deep-skill.svg',
            bgColor: 'bg-colorCards',
            image: '/images/mentors/jean-pierre.jpg',
        },
        {
            name: 'ELVIS CAPIA',
            role: 'Ingeniero de Software | Científico de Datos | Coach de Programación',
            description: 'Ingeniero de Software con experiencia en Ciencia de Datos, Realidad Aumentada, Algoritmos y Estructuras de Datos en Big Techs como Google y Meta.',
            company: 'Google',
            companyLogo: '/images/company/google.svg',
            bgColor: 'bg-colorsCards2',
            image: '/images/mentors/elvis-capia.jpg',
        },
        {
            name: 'LAYLA SCHELI',
            role: 'Analista de BI | Big Data | Data Science.',
            description: 'Software engineer con posgrados en Digital Busisness Management, Marketing digital y Comercio electrónico. Ex docente y mentora de Data Science en Coderhouse.',
            company: 'Deep Skill',
            companyLogo: '/images/company/deep-skill.svg',
            bgColor: 'bg-colorCards',
            image: '/images/mentors/layla-scheli.jpg',
        },
        {
            name: 'EMANUEL',
            role: '',
            description: '',
            company: 'Deep Skill',
            companyLogo: '/images/company/deep-skill.svg',
            bgColor: 'bg-colorsCards2',
            image: '/images/mentors/jean-pierre.jpg',
        }
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
        <div className="w-full flex flex-col min-h-screen">
            <div className="bg-blue-900 py-12 w-full" style={{ backgroundImage: 'url("/images/background.png")', backgroundBlendMode: 'overlay' }}>
            <h2 className="text-4xl text-center md:text-left font-bold font-poppins text-white mb-12 md:ml-12">
                <span className="block md:inline">Expertos tech: </span>
                <span className="hidden md:inline">Mentores en tu aprendizaje</span>
                <span className="md:hidden block text-2xl pt-2">Mentores en tu aprendizaje</span>
            </h2>
                <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
                    {isMobile ? (
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                            {mentors.map((mentor, index) => (
                                <div key={index} className={`h-full ${mentor.bgColor} rounded-lg flex flex-col items-start text-left p-8 sm:p-6`}>
                                    <div className="w-25 h-25 rounded-full overflow-hidden mb-4">
                                        <Image src={mentor.image} alt={mentor.name} width={120} height={120} className="object-cover rounded-full" />
                                    </div>
                                    <h3 className="text-2xl sm:text-lg font-bold font-poppins text-white">{mentor.name}</h3>
                                    <p className="text-white text-justify text-base sm:text-sm font-poppins font-bold my-2 sm:my-2">{mentor.role}</p>
                                    <p className="text-white text-base sm:text-sm mt-4 text-justify font-poppins my-2 sm:my-5">{mentor.description}</p>
                                    <div className="my-8 mx-auto">
                                        <Image src={mentor.companyLogo} alt={mentor.company} width={60} height={20} className="sm:w-20 sm:h-8" />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <div className="flex flex-wrap justify-center lg:justify-between">
                            {mentors.map((mentor, index) => (
                                <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2 sm:p-4">
                                    <div className={`h-full ${mentor.bgColor} rounded-lg flex flex-col items-start text-left p-4 sm:p-6`}>
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4">
                                            <Image src={mentor.image} alt={mentor.name} width={96} height={96} className="object-cover rounded-full" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold font-poppins text-white">{mentor.name}</h3>
                                        <p className="text-white text-justify text-xs sm:text-sm font-poppins font-bold my-2 sm:my-2">{mentor.role}</p>
                                        <p className="text-white text-xs sm:text-sm mt-1 text-justify font-poppins my-2 sm:my-5">{mentor.description}</p>
                                        <div className="mt-auto mx-auto">
                                            <Image src={mentor.companyLogo} alt={mentor.company} width={120} height={40} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full bg-customBlue text-center text-white font-poppins py-6 px-2">
                <p className='px-8'>Nuestros mentores también lideran en otras de las empresas más importantes del mundo</p>
                <div className="flex flex-wrap justify-center mt-6">
                    <Image src="/images/company/deep-pit.svg" alt="Deep Pit" width={100} height={50} className="m-2 md:w-40 sm:h-10" />
                    <Image src="/images/company/scotiabank.svg" alt="Scotiabank" width={100} height={50} className="m-2 md:w-40 sm:h-10" />
                    <Image src="/images/company/interbank.svg" alt="Interbank" width={100} height={50} className="m-2 md:w-40 sm:h-10" />
                    <Image src="/images/company/coder-house.svg" alt="Coder House" width={100} height={50} className="m-2 md:w-40 sm:h-10" />
                    <Image src="/images/company/google.svg" alt="Google" width={100} height={50} className="m-2 md:w-40 sm:h-10" />
                </div>
            </div>
        </div>
    );
}

export default Mentors;
