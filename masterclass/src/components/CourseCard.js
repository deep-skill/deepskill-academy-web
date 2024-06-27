"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CourseCard = () => {
    const courses = [
        {
            title: 'BOOTCAMP THE DATA',
            description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
            date: '00/00/0000',
            imageSrc: '/images/image-course.jpg',
            link: '/bootcamp-data'
        },
        {
            title: 'PYTHON & SQL FOR DATA PROJECTS',
            description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
            date: '00/00/0000',
            imageSrc: '/images/image-course.jpg',
            link: '/python-sql-data'
        },
        {
            title: 'ALGORITHMS & DATA STRUCTURES',
            description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
            date: '00/00/0000',
            imageSrc: '/images/image-course.jpg',
            link: '/courses/masterclass-algorithms'
        },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 844);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full bg-gray-900 text-white bg-cover bg-center pb-12 md:py-12" style={{ backgroundImage: 'url("/images/background-coursecard.jpg")' }}>
            <header className={`py-8 text-center md:text-left ${isMobile ? 'bg-blue-700 w-full' : ''}`}>
                <h1 className={`font-poppinsbold text-32px md:text-5xl lg:text-6xl md:ml-32 leading-relaxed ${isMobile ? 'p-2' : ''} drop-shadow-md`}>
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
                                            <h3 className="font-poppinsbold text-left text-2xl mb-2">{course.title}</h3>
                                            <p className="text-lg mb-6 text-justify font-poppinsregular">{course.description}</p>
                                            <p className="text-xl mb-6 font-poppinssemibold text-left">Próxima fecha de inicio: {course.date}</p>
                                            <div className="flex justify-center my-4">
                                                <Link href={course.link}>
                                                    <button className="bg-colorsButton text-colorTextNavbar text-base font-poppinssemibold px-9 py-3 rounded-3xl">
                                                        MÁS INFORMACIÓN AQUÍ
                                                    </button>
                                                </Link>
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
                                            <h3 className="text-xl font-poppinsbold mb-2">{course.title}</h3>
                                            <p className="text-sm mt-5 mb-4 text-justify font-poppinsregular">{course.description}</p>
                                            <p className="text-sm mb-6 font-poppinssemibold">Próxima fecha de inicio: {course.date}</p>
                                            <div className="flex justify-center py-6">
                                                <Link href={course.link}>
                                                    <button className="bg-colorsButton text-colorTextNavbar text-sm font-poppinssemibold px-14 py-2 rounded-3xl">
                                                        MÁS INFORMACIÓN AQUÍ
                                                    </button>
                                                </Link>
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

