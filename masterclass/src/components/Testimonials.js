import Image from "next/image";

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Alvaro Salcedo G.',
            role: 'Ingeniero Ambiental',
            country: 'Perú',
            description: "La Masterclass de Deep Skill fue un verdadero punto de inflexión en mi carrera. Aprendí a aplicar técnicas avanzadas de Python, lo cual me permitió automatizar procesos críticos de seguridad en la empresa donde trabajo. Ahora, gracias a lo aprendido en este curso, me destaco como una pieza clave en mi equipo. Recomiendo esta capacitación a todos los que buscan potenciar su impacto en el campo laboral.",
            image: '/images/jean-pierre.jpg',
        },
           
        {
            name: 'Francisco Gomez Q.',
            role: 'Ingeniero de Minas',
            country: 'Perú',
            description: "Fue una experiencia transformadora. Aprendí a utilizar Python de manera eficiente para optimizar procesos de extracción y análisis de datos en la operación de mi trabajo. Los conocimientos adquiridos me han permitido aplicar simulación de transporte minero y así estimar las colas y esperas en las rutas. ¡No puedo recomendar esta capacitación lo suficiente para aquellos en el campo de la minería!",
            image: '/images/jean-pierre.jpg',
        },

        {
            name: 'Miguel Gutierrez T.',
            role: 'Ingeniero Civil',
            country: 'Chile',
            description: "Como ingeniero civil, siempre he buscado formas de mejorar los procesos de análisis del peligro sísmico. La Masterclass de Deep Skill me proporcionó las herramientas necesarias para lograrlo. Aprendí a utilizar Python para automatizar tareas repetitivas, analizar grandes volúmenes de datos y optimizar el flujo de trabajo en mis proyectos. Gracias a este curso, he podido destacarme en mi campo y ofrecer soluciones innovadoras a mis clientes.",
            image: '/images/jean-pierre.jpg',
        },

        
        {
            name: 'Bruno Molina T.',
            role: 'Ingeniero de Sistemas',
            country: 'Argentina',
            description: "Participar en la Masterclass de Deep Skill fue una excelente decisión para mi carrera como ingeniero de sistemas, después del programa pude cambiar de rol a Ingeniero de Datos en una startup prestigiosa. No conozco otro curso con la profundidad y calidad a la que llegan los Deep Mentors.",
            image: '/images/jean-pierre.jpg',
        },
        
    ]
    return (
        <div className="w-full h-screen">
            <div className=" bg-white py-12 w-full" >
                <div className="w-7/10 mx-auto">
                    <h2 className="text-40px font-bold font-poppins text-colorTextSubtitulo -mb-3 ">TESTIMONIOS</h2>
                    <h3 className="text-colorTextNavbar text-lg font-poppins font-bold  mb-8">Experiencias de nuestros ex alumnos</h3>
                </div>
                <div className="container mx-auto px-20 flex flex-wrap justify-center lg:justify-between">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-[25%] p-5">
                        <div className={`h-full bg-colorsTestimonial rounded-lg flex flex-col items-center text-left p-6`}>
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                            <Image src={testimonial.image} alt={testimonial.name} width={96} height={96} className="object-cover" />
                        </div>
                        <h3 className="text-lg font-bold font-poppins text-customBlue">{testimonial.name}</h3>
                        <p className="text-customBlue text-justify text-sm font-poppins my-1 ">{testimonial.role}</p>
                        <p className="text-customBlue text-justify text-sm font-poppins -mt-1 mb-4 ">{testimonial.country}</p>
                        <p className="text-colorTextNavbar text-sm mt-2 text-justify font-poppins my-6">{testimonial.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
      </div>
    )
}

export default Testimonials;