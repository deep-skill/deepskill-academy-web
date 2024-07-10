'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'César Ramos S.',
            role: 'Ingeniero Civil',
            country: 'Perú',
            description: '"Gracias a la Masterclass de Deep Skill pude aprender Python desde cero y luego aplicar lo aprendido a la industria de la Construcción. Muy recomendable para quienes deseen ampliar sus habilidades en programación y procesamiento de datos."',
            image: '/images/testimonials/testimonials-1.png',
        },
        {
            name: 'Francisco Gomez Q.',
            role: 'Ingeniero de Minas',
            country: 'Perú',
            description: "Fue una experiencia transformadora. Aprendí a utilizar Python de manera eficiente para optimizar procesos de extracción y análisis de datos en la operación de mi trabajo. Los conocimientos adquiridos me han permitido aplicar simulación de transporte minero y así estimar las colas y esperas en las rutas. ¡No puedo recomendar esta capacitación lo suficiente para aquellos en el campo de la minería!",
            image: '/images/testimonials/testimonials-2.png',
        },
        {
            name: 'Miguel Gutierrez T.',
            role: 'Ingeniero Civil',
            country: 'Chile',
            description: "Como ingeniero civil, siempre he buscado formas de mejorar los procesos de análisis del peligro sísmico. La Masterclass de Deep Skill me proporcionó las herramientas necesarias para lograrlo. Aprendí a utilizar Python para automatizar tareas repetitivas, analizar grandes volúmenes de datos y optimizar el flujo de trabajo en mis proyectos. Gracias a este curso, he podido destacarme en mi campo y ofrecer soluciones innovadoras a mis clientes.",
            image: '/images/testimonials/testimonials-3.png',
        },
        {
            name: 'Bruno Molina T.',
            role: 'Ingeniero de Sistemas',
            country: 'Argentina',
            description: "Participar en la Masterclass de Deep Skill fue una excelente decisión para mi carrera como ingeniero de sistemas, después del programa pude cambiar de rol a Ingeniero de Datos en una startup prestigiosa. No conozco otro curso con la profundidad y calidad a la que llegan los Deep Mentors.",
            image: '/images/testimonials/testimonials-4.png',
        },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); // Consider mobile view up to 1024px width
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full bg-white py-12">
            <div className="w-85% lg:w-[90%] md:w-4/5 mx-auto mb-8">
                <h2 className="text-center text-32px md:text-left md:text-4xl font-poppinsbold text-colorTextNavbar -mb-1">TESTIMONIOS</h2>
                <h3 className=" text-colorTextSubtitulo text-center text-17px md:text-left md:text-2xl font-poppinssemibold">Experiencias de nuestros ex alumnos</h3>
            </div>
            <div className="container mx-auto px-4 md:px-10 lg:px-0 xl:px-12 2xl:px-20">
                {isMobile ? (
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-5">
                                <div className="h-full bg-colorsTestimonial rounded-lg flex flex-col items-center text-left p-6">
                                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                                        <Image src={testimonial.image} alt={testimonial.name} width={96} height={96} className="object-cover" />
                                    </div>
                                    <h3 className="text-customBlue text-2xl font-poppinsbold">{testimonial.name}</h3>
                                    <p className="text-customBlue text-justify text-base font-poppinsregular my-1">{testimonial.role}</p>
                                    <p className="text-customBlue text-justify text-base font-poppinsregular">{testimonial.country}</p>
                                    <p className="text-colorTextNavbar text-base mt-2 text-justify font-poppinsregular my-6">{testimonial.description}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                        <div className="flex">
                            {testimonials.slice(0, 3).map((testimonial, index) => (
                                <div key={index} className="w-1/3 p-5 px-8 2xl:px-6 xl:px-4 lg:px-4">
                                    <div className="h-full bg-colorsTestimonial rounded-lg flex flex-col items-center text-left p-6">
                                        <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                                            <Image src={testimonial.image} alt={testimonial.name} width={96} height={96} className="object-cover" />
                                        </div>
                                        <h3 className="text-customBlue text-2xl font-poppinsbold">{testimonial.name}</h3>
                                        <p className="text-customBlue text-justify text-base font-poppinsregular my-1">{testimonial.role}</p>
                                        <p className="text-customBlue text-justify text-base font-poppinsregular">{testimonial.country}</p>
                                        <p className="text-colorTextNavbar text-base mt-2 text-justify font-poppinsregular my-6 2xl:mx-6 xl:mx-2 lg:mx-1 lg:mb-10">{testimonial.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex">
                            {testimonials.slice(1).map((testimonial, index) => (
                                <div key={index} className="w-1/3 p-5 px-8 2xl:px-8 xl:px-4 lg:px-4">
                                    <div className="h-full bg-colorsTestimonial rounded-lg flex flex-col items-center text-left p-6">
                                        <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                                            <Image src={testimonial.image} alt={testimonial.name} width={96} height={96} className="object-cover" />
                                        </div>
                                        <h3 className="text-customBlue text-2xl font-poppinsbold">{testimonial.name}</h3>
                                        <p className="text-customBlue text-justify text-base font-poppinsregular my-1">{testimonial.role}</p>
                                        <p className="text-customBlue text-justify text-base font-poppinsregular">{testimonial.country}</p>
                                        <p className="text-colorTextNavbar text-base mt-2 text-justify font-poppinsregular my-6 2xl:mx-6 xl:mx-2 lg:mx-1 lg:mb-10">{testimonial.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Carousel>
                )}
            </div>
        </div>
    );
}

export default Testimonials;
