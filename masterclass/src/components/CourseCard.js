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
            imageSrc: '/images/image-course-card/image-course.jpg',
            link: '/bootcamp-data'
        },
        {
            title: 'PYTHON & SQL APLICADO A PROYECTOS',
            description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
            date: '11/07/2024',
            imageSrc: '/images/image-course-card/image-course2.jpg',
            link: '/python-sql-data'
        },
        {
            title: 'ALGORITHMS & DATA STRUCTURES',
            description: 'Programa en vivo, intensivo y ultra personalizado. Diseñado para ingenieros que buscan maximizar sus conocimientos sumando la habilidad de tratar datos y automatizar procesos con programación.',
            date: '06/08/2024',
            imageSrc: '/images/image-course-card/image-course3.jpg',
            link: '/algorithms-data'
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
        <div  className="w-full bg-gray-900 text-white bg-cover bg-center pb-12 md:pt-0 lg:pt-0 lg:pb-6 md:pb-6" style={{ backgroundImage: 'url("/images/background-coursecard.jpg")' }}>
            <header id="my-courses" className={`lg:bg-blue-700 lg:w-[65%] lg:rounded-br-[4rem] lg:py-10 py-7 text-center md:text-left ${isMobile ? 'bg-blue-700 w-full' : ''}`}>
                <h1 className={`font-poppinsbold text-32px md:text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl md:ml-20 leading-relaxed ${isMobile ? 'p-2' : ''} drop-shadow-md`}>
                    Aprende a tu ritmo <span className={`${isMobile ? 'block text-2xl' : 'inline'} md:text-5xl lg:text-3xl xl:text-3xl 2xl:text-4xl`}>profundiza tus habilidades</span>
                </h1>
            </header>
            <div className="max-w-8xl mx-auto px-4 sm:px-4 2xl:px-8 xl:px-2 lg:px-1">
                <main className={`py-8 lg:pt-10 ${isMobile ? 'mt-4' : 'mt-0'}`}>
                    <div className="container mx-auto px-4 sm:px-8 md:px-10 2xl:px-20 xl:px-14 lg:px-1">
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
                            <div className="lg:pt-8 grid gap-16 2xl:gap-16 xl:gap-10 lg:gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {courses.map((course, index) => (
                                    <div key={index} className="bg-white text-gray-900 rounded-lg shadow-md flex flex-col">
                                        <img
                                            src={course.imageSrc}
                                            alt={course.title}
                                            className="w-full h-48 object-cover rounded-t-lg"
                                        />
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl lg:text-2xl font-poppinsbold mb-2">{course.title}</h3>
                                            <p className="text-sm lg:text-base mt-5 mb-4 text-justify font-poppinsregular flex-grow">{course.description}</p>
                                            <p className="text-sm mb-6 font-poppinssemibold">Próxima fecha de inicio: {course.date}</p>
                                            <div className="flex justify-center py-6 mt-auto">
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

