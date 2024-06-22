import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="w-full py-16 bg-white">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className=" text-colorTextNavbar text-32px text-center font-poppinsbold md:text-left md:text-40px  ">¿Quiénes somos?</h2>
                            <h3 className="text-colorTextSubtitulo font-poppinssemibold mb-8 text-center text-2xl md:text-lg md:text-left  ">Creamos tecnología</h3>
                            <p className=" text-colorTextNavbar mb-4 text-justify text-base md:text-lg font-poppinsregular">
                            Somos <span className="font-poppinsbold ">Deep Skill</span> y tenemos el reto de generar gran impacto en la creación de una industria de software en Latinoamérica.
                            </p>
                            <p className="text-colorTextNavbar mb-4 text-justify text-base md:text-lg font-poppinsregular">
                            Escasas empresas latinoamericanas desarrollando software <span className="font-poppinsbold">deep tech</span> y el desencuentro de las instituciones educativas con la industria explican la razón de una incipiente y todavía débil industria.
                            </p>
                            <p className="text-colorTextNavbar mb-4 text-justify text-base md:text-lg font-poppinsregular">
                            Nuestra respuesta ha sido el diseño de una propuesta integral, que cubre el desarrollo y entretenimiento tecnológico, <span className="font-poppinsbold">liderada por el talento más representativo de nuestra región.</span>
                            </p>
                            <div className="flex justify-center md:justify-normal mt-10">
                                <button className="bg-blue-600 text-white font-poppinssemibold text-base py-4 font-semibold px-9 rounded-3xl">NUESTRO EQUIPO</button>
                             </div>
                        </div>
                        <div className="flex justify-end">
                            <Image
                            src="/images/about.png" // Asegúrate de que la imagen esté en la carpeta "public" o en el path correcto
                            alt="Equipo trabajando"
                            width={500}
                            height={400}
                            className="rounded-75px md:rounded-75px"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-4/5 ">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div>
                                <h4 className="font-poppinsbold text-colorTextNavbar text-2xl md:text-xl mb-2">Misión Latinoamérica</h4>
                                <p className="font-poppinsregular text-colorTextNavbar text-base md:text-sm text-justify">Nos proponemos llevar a Latinoamérica a su independencia tecnológica, cuando menos en el desarrollo de software, sector en el que somos expertos.</p>
                            </div>
                            <div>
                                <h4 className="font-poppinsbold text-colorTextNavbar text-2xl md:text-xl mb-2">Filosofía de profundidad</h4>
                                <p className="font-poppinsregular text-colorTextNavbar text-base md:text-sm text-justify">Nuestra propuesta de entretenimiento unifica el desarrollo de la teoría computacional con los estándares técnicos de desarrollo de software aplicable en la industria.</p>
                            </div>
                            <div>
                                <h4 className="font-poppinsbold text-colorTextNavbar text-2xl md:text-xl mb-2">Software Deep Tech</h4>
                                <p className="font-poppinsregular text-colorTextNavbar text-base md:text-sm text-justify">Desarrollamos <span className="font-poppinsbold">software de calidad</span> basado en la necesidad del modelo de negocio. Tenemos un capítulo enfocado en la solución de problemas de <span className="font-poppinsbold">ciencia e ingeniería</span> con tecnología.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default AboutUs;