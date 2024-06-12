import Image from "next/image";

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
        <div className="w-full bg-white py-12">
            
                <div className="w-4/5 mx-auto mb-8">
                    <h2 className="text-40px font-bold font-poppins text-colorTextSubtitulo -mb-3 ">TESTIMONIOS</h2>
                    <h3 className="text-colorTextNavbar text-lg font-poppins font-bold">Experiencias de nuestros ex alumnos</h3>
                </div>
                <div className="container mx-auto px-4 md:px-20 flex flex-wrap justify-center lg:justify-between">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-[25%] p-5">
                        <div className={`h-full bg-colorsTestimonial rounded-lg flex flex-col items-center text-left p-6`}>
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                            <Image src={testimonial.image} alt={testimonial.name} width={96} height={96} className="object-cover" />
                        </div>
                        <h3 className="text-lg font-bold font-poppins text-customBlue">{testimonial.name}</h3>
                        <p className="text-customBlue text-justify text-sm font-poppins my-1 ">{testimonial.role}</p>
                        <p className="text-customBlue text-justify text-sm font-poppins mt-1  ">{testimonial.country}</p>
                        <p className="text-colorTextNavbar text-sm mt-2 text-justify font-poppins my-6">{testimonial.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            
      </div>
    )
}

export default Testimonials;