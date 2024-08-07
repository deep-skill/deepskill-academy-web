"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Mentors = () => {
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
            name: 'EMANUEL SOTO ORTEGA',
            role: 'Ingeniero de Software | Programador competitivo',
            description: 'Ingeniero de Software con conocimientos sólidos en Algoritmos y Estructura de Datos. Participante de competencias ICPC.',
            company: 'Deep Skill',
            companyLogo: '/images/company/deep-skill.svg',
            bgColor: 'bg-colorsCards2',
            image: '/images/mentors/emanuel-soto.png',
        }
    ];

    const companyLogos = [
        { src: '/images/company/deep-pit.svg', alt: 'Deep Pit' },
        { src: '/images/company/scotiabank.svg', alt: 'Scotiabank' },
        { src: '/images/company/interbank.svg', alt: 'Interbank' },
        { src: '/images/company/hudbay.svg', alt: 'Hudbay' },
        { src: '/images/company/google.svg', alt: 'Google' },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 850); // Consider mobile view up to 850px width
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full flex flex-col min-h-screen">
            <div className="bg-blue-900 py-12 xl:py-5 2xl:py-12 w-full" style={{ backgroundImage: 'url("/images/background.png")', backgroundBlendMode: 'overlay' }}>
                <h2 className="text-4xl text-center md:text-left font-poppinsbold text-white mb-12 lg:mt-10 lg:ml-20 md:ml-8 leading-normal lg:leading-normal sm:leading-normal">
                    <span className="block md:inline lg:ml-3 lg:text-4xl xl:text-4xl 2xl:text-5xl">Deep Mentors</span>
                    <span className="block px-2 text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl pt-2 lg:ml-2">Los líderes Tech más top de la región detrás de tu crecimiento profesional.</span>
                </h2>
                <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-5 xl:px-20 2xl:px-20">
                    {isMobile ? (
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                            {mentors.map((mentor, index) => (
                                <div key={index} className={`h-full ${mentor.bgColor} rounded-lg flex flex-col justify-between items-start text-left p-7 sm:p-10 sm:px-20 mentor-card-mobile overflow-hidden`}>
                                    <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-4">
                                        <Image src={mentor.image} alt={mentor.name} width={96} height={96} className="object-cover rounded-full" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl sm:text-3xl sm:mt-4 font-poppinsbold text-white">{mentor.name}</h3>
                                        <p className="text-white text-justify text-base sm:text-lg font-poppinsbold my-2">{mentor.role}</p>
                                        <p className="text-white text-base sm:text-lg mt-4 text-justify font-poppinsregular my-5">{mentor.description}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <Image src={mentor.companyLogo} alt={mentor.company} width={140} height={60} className="mx-auto" />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <div className="flex flex-wrap justify-center xl:justify-between">
                            {mentors.map((mentor, index) => (
                                <div key={index} className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 p-2 sm:p-4 lg:p-2 xl:p-2 2xl:p-4">
                                    <div className={`h-full ${mentor.bgColor} rounded-lg flex flex-col justify-between items-start text-left p-4 sm:p-6 xl:p-5 2xl:p-6 overflow-hidden`}>
                                        <div className="w-28 h-28 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4">
                                            <Image src={mentor.image} alt={mentor.name} width={96} height={96} className="object-cover rounded-full" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-base sm:text-lg font-poppinsbold text-white">{mentor.name}</h3>
                                            <p className="text-white text-justify text-xs sm:text-sm font-poppinsbold lg:mt-4 my-2 sm:my-2">{mentor.role}</p>
                                            <p className="text-white text-xs sm:text-sm mt-1 text-justify font-poppinsregular my-2 sm:my-5">{mentor.description}</p>
                                        </div>
                                        <div className="mt-4 lg:mt-3 xl:mt-6">
                                            <Image src={mentor.companyLogo} alt={mentor.company} width={140} height={60} className="mx-auto lg:w-48" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full bg-customBlue text-center text-white py-6 lg:py-3 px-2">
                <p className='px-8 font-poppinsregular lg:text-lg sm:text-2xl sm:mb-8 lg:mt-2'>Nuestros mentores también lideran en otras de las empresas más importantes del mundo</p>
                <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
                    {isMobile ? (
                        <Carousel autoPlay interval={3000} showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                            {companyLogos.map((logo, index) => (
                                <div key={index} className="flex justify-center">
                                    <Image src={logo.src} alt={logo.alt} width={60} height={30} className="m-5" />
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <div className="flex flex-wrap justify-center mt-6 lg:mt-2">
                            {companyLogos.map((logo, index) => (
                                <Image key={index} src={logo.src} alt={logo.alt} width={100} height={50} className="m-5 lg:mx-5 lg:my-1 md:w-40 sm:h-10" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Mentors;
