"use client";

import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CourseCard = () => {
    const courses = [
        {
            title: 'PYTHON PARA INGENIEROS',
            description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
            date: '00/00/0000',
            imageSrc: '/images/image-course.jpg',
        },
        {
            title: 'PYTHON PARA INGENIEROS',
            description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
            date: '00/00/0000',
            imageSrc: '/images/image-course.jpg',
        },
        {
            title: 'PYTHON PARA INGENIEROS',
            description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
            date: '00/00/0000',
            imageSrc: '/images/image-course.jpg',
        }
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 844); // Consider mobile view up to 844px width
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full bg-gray-900 text-white bg-cover bg-center pb-12 md:py-12" style={{ backgroundImage: 'url("/images/background-coursecard.jpg")' }}>
            <header className={`py-8 text-center md:text-left ${isMobile ? 'bg-blue-700 w-full' : ''}`}>
                    <h1 className={`font-poppins text-32px md:text-5xl lg:text-6xl md:ml-32 font-bold leading-relaxed ${isMobile ? 'p-2' : ''} drop-shadow-md`}>
                        Aprende a tu ritmo<br />
                        <span className={`${isMobile ? 'block text-2xl' : 'inline'} md:text-5xl lg:text-6xl`}>Profundiza tus habilidades</span>
                    </h1>
            </header>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <main className={`py-8 ${isMobile ? 'mt-4' : 'mt-0'}`}>
                    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20">
                        {isMobile ? (
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                                {courses.map((course, index) => (
                                    <div key={index} className="bg-white text-gray-900 rounded-lg shadow-md">
                                        <img
                                            src={course.imageSrc}
                                            alt={course.title}
                                            className="w-full h-48 object-cover rounded-t-lg"
                                        />
                                        <div className="p-6">
                                            <h3 className="font-poppins text-left text-2xl font-bold mb-2">{course.title}</h3>
                                            <p className="text-xl mb-4 text-justify font-poppins">{course.description}</p>
                                            <p className="text-xl mb-6 font-poppins text-left"><strong>Próxima fecha de inicio: {course.date}</strong></p>
                                            <div className="flex justify-center">
                                                <button className="bg-colorsButton text-colorTextNavbar text-base font-poppins font-bold px-9 py-3 rounded-3xl">
                                                    MÁS INFORMACIÓN AQUÍ
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        ) : (
                            <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {courses.map((course, index) => (
                                    <div key={index} className="bg-white text-gray-900 rounded-lg shadow-md">
                                        <img
                                            src={course.imageSrc}
                                            alt={course.title}
                                            className="w-full h-48 object-cover rounded-t-lg"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                                            <p className="text-sm mb-4 text-justify">{course.description}</p>
                                            <p className="text-sm mb-6"><strong>Próxima fecha de inicio: {course.date}</strong></p>
                                            <div className="flex justify-center">
                                                <button className="bg-colorsButton text-colorTextNavbar text-sm font-semibold px-6 py-2 rounded-3xl">
                                                    MÁS INFORMACIÓN AQUÍ
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CourseCard;



