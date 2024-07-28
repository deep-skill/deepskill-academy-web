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
            name: 'LAYLA SCHELI',
            role: 'Analista de BI | Big Data | Data Science',
            description: 'Software engineer con posgrados en Digital Busisness Management, Marketing digital y Comercio electrónico. Ex docente y mentora de Data Science en Coderhouse.',
            company: 'Deep Skill',
            companyLogo: '/images/company/deep-skill.svg',
            bgColor: 'bg-colorsCards2',
            image: '/images/mentors/layla-scheli.jpg',
        },
        {
            name: 'EMANUEL SOTO ORTEGA',
            role: 'Ingeniero de Software | Programador competitivo',
            description: 'Ingeniero de Software con conocimientos sólidos en Algoritmos y Estructura de Datos. Participante de competencias ICPC.',
            company: 'Deep Skill',
            companyLogo: '/images/company/deep-skill.svg',
            bgColor: 'bg-colorCards',
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
            <div className="bg-blue-900 py-12 xl:py-5 2xl:py-5 w-full" style={{ backgroundImage: 'url("/images/background.png")', backgroundBlendMode: 'overlay' }}>
                <h2 className="text-4xl text-center md:text-left font-poppinsbold text-white mb-12 xl:mb-10 2xl:mb-12 lg:mt-10 lg:ml-20 md:ml-8 leading-normal lg:leading-normal sm:leading-normal">
                    <span className="block md:inline lg:ml-3 lg:text-4xl xl:text-4xl 2xl:text-40px">Deep Mentors</span>
                    <span className="block px-2 text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl pt-2 lg:ml-2">Los líderes Tech más top de la región detrás de tu crecimiento profesional.</span>
                </h2>
                <div className="container mx-auto px-4 sm:px-8 md:px-10 lg:px-7 xl:px-16 2xl:px-20">
                    {isMobile ? (
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                            {mentors.map((mentor, index) => (
                                <div key={index} className={`h-full ${mentor.bgColor} rounded-lg flex flex-col items-start text-left p-7 sm:p-10 sm:px-20 mentor-card-mobile overflow-hidden`}>
                                    <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-4">
                                        <Image src={mentor.image} alt={mentor.name} width={96} height={96} className="object-cover rounded-full" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl sm:mt-4 font-poppinsbold text-white">{mentor.name}</h3>
                                    <p className="text-white text-justify text-base sm:text-lg font-poppinsbold my-2">{mentor.role}</p>
                                    <p className="text-white text-base sm:text-lg mt-4 text-justify font-poppinsregular my-5">{mentor.description}</p>
                                    <div className="mt-4 sm:mt-16 mx-10 pb-10 sm:w-30 sm:h-30">
                                        <Image src={mentor.companyLogo} alt={mentor.company} width={60} height={20} />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <div className="flex flex-wrap justify-center lg:justify-between">
                            {mentors.map((mentor, index) => (
                                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-2 lg:p-3 xl:p-5 2xl:p-8 md:p-5">
                                    <div className={`h-full ${mentor.bgColor} rounded-lg flex flex-col items-start text-left p-4 sm:p-6 lg:p-6 xl:p-8 2xl:p-10 overflow-hidden`}>
                                        <div className="w-28 h-28 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-4">
                                            <Image src={mentor.image} alt={mentor.name} width={128} height={128} className="object-cover rounded-full" />
                                        </div>
                                        <h3 className="text-base sm:text-lg lg:text-xl font-poppinsbold text-white">{mentor.name}</h3>
                                        <p className="text-white text-justify text-xs sm:text-sm lg:text-base font-poppinsbold lg:mt-2 my-2 sm:my-2">{mentor.role}</p>
                                        <p className="text-white text-xs sm:text-sm lg:text-base mt-1 text-justify font-poppinsregular my-2 sm:my-2 lg:my-4 lg:mb-10">{mentor.description}</p>
                                        <div className="mt-4 lg:mt-auto ">
                                            <Image src={mentor.companyLogo} alt={mentor.company} width={176} height={60} className='lg:w-52'/>
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
                                <Image key={index} src={logo.src} alt={logo.alt} width={160} height={50} className="m-5 lg:mx-5 2xl:mx-7 lg:my-1 md:w-40 sm:h-10" />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Mentors;

