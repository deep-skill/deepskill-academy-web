import Image from "next/image";

export const Mentors = () => {
    const mentors = [
        {
            name: 'JEAN PIERRE MANDUJANO',
            role: 'Software Engineer | Engineering Manager | CTO',
            description: 'Founder & CTO de Deep Pit Technology Manager de Ingeniería en Scotiabank Tech Lead en BCP. Ingeniero de Software Senior en startups como Crehana y Fandango.',
            company: 'Deep Skill',
            companyLogo: '/images/company/deep-skill.svg',
            bgColor: 'bg-colorCards',
            image: '/images/jean-pierre.jpg',
        },

        {
            name: 'ELVIS CAPIA',
            role: 'Ingeniero de Software | Científico de Datos | Coach de Programación',
            description: 'Ingeniero de Software con experiencia en Ciencia de Datos, Realidad Aumentada, Algoritmos y Estructuras de Datos en Big Techs como Google y Meta.',
            company: 'Google',
            companyLogo: '/images/company/google.svg',
            bgColor: 'bg-colorsCards2',
            image: '/images/mentors/elvis-capia.jpg',
        },

        {
            name: 'LAYLA SCHELI',
            role: 'Analista de BI | Big Data | Data Science.',
            description: 'Software engineer con posgrados en Digital Busisness Management, Marketing digital y Comercio electrónico. Ex docente y mentora de Data Science en Coderhouse.',
            company: 'Deep Skill',
            companyLogo: '/images/company/deep-skill.svg',
            bgColor: 'bg-colorCards',
            image: '/images/mentors/layla-scheli.jpg',
        },
        {
            name: 'EMANUEL',
            role: '',
            description: '',
            company: 'Deep Skill',
            companyLogo: '/images/company/deep-skill.svg',
            bgColor: 'bg-colorsCards2',
            image: '/images/jean-pierre.jpg',
        }
    ];
    return (
      <div className="w-full flex flex-col min-h-screen">
            <div className="bg-blue-900 py-12 w-full" style={{ backgroundImage: 'url("/images/background.png")', backgroundBlendMode: 'overlay' }}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-left text-white mb-5 ml-4 sm:ml-8 md:ml-12">Expertos tech: Mentores en tu aprendizaje</h2>
                <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 flex flex-wrap justify-center lg:justify-between">
                    {mentors.map((mentor, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2 sm:p-4">
                            <div className={`h-full ${mentor.bgColor} rounded-lg flex flex-col items-start text-left p-4 sm:p-6`}>
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4">
                                    <Image src={mentor.image} alt={mentor.name} width={96} height={96} className="object-cover rounded-full" />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold font-poppins text-white">{mentor.name}</h3>
                                <p className="text-white text-justify text-xs sm:text-sm font-poppins font-bold my-2 sm:my-2">{mentor.role}</p>
                                <p className="text-white text-xs sm:text-sm mt-1 text-justify font-poppins my-2 sm:my-5">{mentor.description}</p>
                                <div className="mt-auto mx-auto">
                                    <Image src={mentor.companyLogo} alt={mentor.company} width={120} height={40} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full bg-customBlue text-center text-white font-poppins py-6 px-2">
                <p>Nuestros mentores también lideran en otras de las empresas más importantes del mundo</p>
                <div className="flex flex-wrap justify-center mt-6">
                    <Image src="/images/company/deep-pit.svg" alt="Deep Pit" width={100} height={30} className="m-2" />
                    <Image src="/images/company/scotiabank.svg" alt="Scotiabank" width={100} height={30} className="m-2" />
                    <Image src="/images/company/interbank.svg" alt="Interbank" width={100} height={30} className="m-2" />
                    <Image src="/images/company/coder-house.svg" alt="Coder House" width={100} height={30} className="m-2" />
                    <Image src="/images/company/google.svg" alt="Google" width={100} height={30} className="m-2" />
                </div>
            </div>
      </div>
    );
}

export default Mentors;
