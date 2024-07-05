import Image from "next/image";

const AboutUs = () => {
    return (
        <div id="about" className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 lg:w-[90%] md:w-[90%]">
                <div className="flex justify-center">
                    <div className="w-full flex flex-col md:flex-row md:w-[90%] lg:w-full">
                        <div className="w-full md:w-[55%]">
                            <h2 className="text-colorTextNavbar text-32px md:text-40px lg:text-5xl text-center font-poppinsbold md:text-left ">
                                ¿Quiénes somos?
                            </h2>
                            <h3 className="text-colorTextSubtitulo font-poppinssemibold mb-8 text-center text-2xl md:text-lg lg:text-3xl md:text-left">
                                Creamos tecnología
                            </h3>
                            <p className="text-colorTextNavbar mb-4 text-justify text-base md:text-lg font-poppinsregular">
                                Somos <span className="font-poppinsbold">Deep Skill</span> y tenemos el reto de generar gran impacto en la creación de una industria de software en Latinoamérica.
                            </p>
                            <p className="text-colorTextNavbar mb-4 text-justify text-base md:text-lg font-poppinsregular">
                                Escasas empresas latinoamericanas desarrollando software <span className="font-poppinsbold">deep tech</span> y el desencuentro de las instituciones educativas con la industria explican la razón de una incipiente y todavía débil industria.
                            </p>
                            <p className="text-colorTextNavbar mb-4 text-justify text-base md:text-lg font-poppinsregular">
                                Nuestra respuesta ha sido el diseño de una propuesta integral, que cubre el desarrollo y entretenimiento tecnológico, <span className="font-poppinsbold">liderada por el talento más representativo de nuestra región.</span>
                            </p>
                            <div className="flex justify-center md:justify-start mt-10">
                             <button className="bg-blue-600 text-white font-poppinssemibold text-base lg:text-xl py-2 px-6 lg:px-10 rounded-3xl">
                                <a href="#our-team">
                                  NUESTRO EQUIPO
                                </a>
                             </button>
                            </div> 
                        </div>
                        <div className="w-full md:w-[40%] flex justify-center lg:justify-end lg:ml-10 mt-8 md:mt-0">
                            <Image
                                src="/images/about.png"
                                alt="Equipo trabajando"
                                width={500}
                                height={450}
                                className="rounded-75px"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <div className="w-full lg:w-full md:w-[90%]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14 mb-10">
                            <div>
                                <h4 className="font-poppinsbold text-colorTextNavbar text-2xl md:text-2xl mb-4">
                                    Software Deep Tech
                                </h4>
                                <p className="font-poppinsregular text-colorTextNavbar text-base md:text-lg text-justify">
                                    Desarrollamos <span className="font-poppinsbold">software de calidad</span> basado en la necesidad del modelo de negocio.
                                </p>
                                <p className="font-poppinsregular text-colorTextNavbar text-base md:text-lg text-justify">
                                    Tenemos un capítulo enfocado en la solución de problemas de <span className="font-poppinsbold">ciencia e ingeniería</span> con tecnología.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-poppinsbold text-colorTextNavbar text-2xl md:text-2xl mb-4">
                                    Filosofía de profundidad
                                </h4>
                                <p className="font-poppinsregular text-colorTextNavbar text-base md:text-lg text-justify">
                                    Nuestra propuesta de entrenamiento unifica el estudio profundo de la teoría computacional con las más modernas técnicas de desarrollo de software aplicadas en la industria.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-poppinsbold text-colorTextNavbar text-2xl md:text-2xl mb-4">
                                    Misión Latinoamérica
                                </h4>
                                <p className="font-poppinsregular text-colorTextNavbar text-base md:text-lg text-justify">
                                Nos propusimos llevar a Latinoamérica a su independencia tecnológica, cuando menos en el Desarrollo de Software, sector en el que somos expertos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
