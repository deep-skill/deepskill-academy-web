"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CourseCard = () => {
    const courses = [
        {
            title: 'ALGORITMOS Y ESTRUCTURAS DE DATOS',
            description: [
                'Entrenamiento de 4 semanas, en vivo y ultra personalizado.',
                'Para Ingenieros de Software y Científicos de Datos.',
                'Requisito nivel intermedio en programación.',
                'Pruebas de código con estilo big techs.',
            ],
            date: '16 Enero 2025',
            imageSrc: '/images/image-course-card/image-course.png',
            link: '/algorithms-data',
            type: 'MASTERCLASS',
            headerColor: 'bg-colorsButton'
        },
        {
            title: 'PYTHON y SQL PARA INGENIEROS',
            subtitle: 'APLICADOS A PROYECTOS DE DATOS',
            description: [
                'Entrenamiento de 12 semanas, en vivo y ultra personalizado.',
                'Diseñado para profesionales de Ciencias e Ingenierías.',
                'Iniciamos desde cero en programación.',
                'Aplicado a proyectos de data.',
            ],
            date: '17 Sep 2024',
            imageSrc: '/images/image-course-card/image-course2.png',
            link: '/bootcamp-data',
            type: 'BOOTCAMP',
            headerColor: 'bg-blue-600'
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
        <div className="w-full bg-gray-900 text-white bg-cover bg-center pb-12 md:pt-0 lg:pt-0 lg:pb-6 md:pb-6" style={{ backgroundImage: 'url("/images/background-coursecard.jpg")' }}>
            <header id="my-courses" className={`lg:bg-blue-700 lg:w-[68%] xl:w-[55%] 2xl:w-[45%] lg:rounded-br-[4rem] lg:py-10 2xl:py-8 py-7 text-center md:text-left ${isMobile ? 'bg-blue-700 w-full' : ''}`}>
                <h1 className={`font-poppinsbold text-4xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-40px md:ml-20 leading-tight ${isMobile ? 'p-2' : ''} drop-shadow-md`}>
                    Profundiza <span className={`${isMobile ? 'block text-32px' : 'inline'} md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-4xl`}>tus habilidades</span>
                </h1>
            </header>
            <div className="max-w-8xl mx-auto px-4 sm:px-4 2xl:px-8 xl:px-2 lg:px-1">
                <main className={`py-8 lg:pt-10 ${isMobile ? 'mt-4' : 'mt-0'}`}>
                    <div className="container mx-auto px-2 sm:px-8 md:px-10 2xl:px-40 xl:px-14 lg:px-1">
                        {isMobile ? (
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                                {courses.map((course, index) => (
                                    <div key={index} className="bg-white text-gray-900 rounded-lg shadow-md relative">
                                        <img
                                            src={course.imageSrc}
                                            alt={course.title}
                                            className="w-full h-72 object-cover mt-6 rounded-t-lg"
                                        />
                                        <header className={`absolute top-0 left-0 ${course.headerColor} w-[65%] rounded-br-[3rem] py-2 text-center text-white`}>
                                            <h1 className="font-poppinsmedium text-2xl drop-shadow-md">
                                                {course.type}
                                            </h1>
                                        </header>
                                        <div className="p-4">
                                            <h3 className="font-poppinsbold text-colorTextSubtitulo text-3xl text-center">{course.title}</h3>
                                            <h3 className="font-poppinsbold text-colorTextSubtitulo text-base mb-6 text-center">{course.subtitle}</h3>
                                            <ul className="font-poppinsregular text-gray-700 list-disc text-lg leading-normal text-left px-6">
                                                {course.description.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                            <p className="text-xl my-8 font-poppinssemibold text-left">Fecha de inicio: {course.date}</p>
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
                            <div className="lg:pt-8 grid gap-16 2xl:gap-24 xl:gap-10 lg:gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
                                {courses.map((course, index) => (
                                    <div key={index} className="bg-white text-gray-900 rounded-lg shadow-md flex flex-col relative lg:w-[90%] xl:w-[80%] 2xl:w-[85%]">
                                        <img
                                            src={course.imageSrc}
                                            alt={course.title}
                                            className="w-full h-72 p-5 2xl:p-4 object-cover rounded-t-lg"
                                        />
                                        <header className={`absolute top-0 left-0 ${course.headerColor} lg:w-[47%] xl:w-[45%] 2xl:w-[40%] lg:rounded-br-[3rem] xl:rounded-br-[4rem] rounded-br-[3rem] lg:py-4 2xl:py-3 py-3 text-center text-white`}>
                                            <h1 className="font-poppinsmedium text-left pl-5 text-xl md:text-2xl lg:text-xl xl:text-xl 2xl:text-lg drop-shadow-md">
                                                {course.type}
                                            </h1>
                                        </header>
                                        <div className="px-12 lg:px-5 xl:px-8 flex flex-col flex-grow">
                                            <h3 className="text-colorTextSubtitulo text-xl text-center lg:text-3xl xl:text-3xl font-poppinsbold mb-2">{course.title}</h3>
                                            <h3 className="text-colorTextSubtitulo text-xl text-center lg:text-xl xl:text-xl 2xl:text-lg xl:-mt-2 lg:-mt-2 font-poppinsbold mb-2">{course.subtitle}</h3>
                                            <ul className="font-poppinsregular text-gray-700 list-disc text-xl lg:text-lg lg:px-6 leading-normal lg:leading-loose xl:leading-snug 2xl:leading-snug 2xl:text-base">
                                                {course.description.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                            <p className="2xl:text-lg xl:text-xl lg:text-xl my-5 font-poppinssemibold">Fecha de inicio: {course.date}</p>
                                            <div className="flex justify-center py-2 2xl:pb-2 mt-auto mb-6">
                                                <Link href={course.link}>
                                                    <button className="bg-colorsButton text-colorTextNavbar text-sm lg:text-base xl:text-lg font-poppinssemibold px-14 py-3 rounded-3xl">
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


