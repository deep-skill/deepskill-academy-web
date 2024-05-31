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
    ]
    return (
      <div className="w-full">
            <div className=" bg-blue-900 py-12 w-full" style={{ backgroundImage: 'url("/images/background.png")',  backgroundBlendMode: 'overlay', }} >
            <h2 className="text-5xl font-bold font-poppins text-left text-white mb-5 ml-[6%]">Expertos tech: Mentores en tu aprendizaje</h2>
                <div className="container mx-auto px-20 flex flex-wrap justify-center lg:justify-between">
                {mentors.map((mentor, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-[25%] p-4">
                        <div className={`h-full ${mentor.bgColor} rounded-lg flex flex-col items-start text-left p-6`}>
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                            <Image src={mentor.image} alt={mentor.name} width={96} height={96} className="object-cover" />
                        </div>
                        <h3 className="text-lg font-bold font-poppins text-white">{mentor.name}</h3>
                        <p className="text-white text-justify text-sm font-poppins font-bold my-4 ">{mentor.role}</p>
                        <p className="text-white text-sm mt-2 text-justify font-poppins my-8">{mentor.description}</p>
                        <div className="mt-auto mx-auto">
                            <Image src={mentor.companyLogo} alt={mentor.company} width={160} height={50} />
                        </div>
                        </div>
                    </div>
                ))}
                </div>
            
            </div>
            <div className="w-full bg-customBlue text-center text-white font-poppins py-6">
                <p>Nuestros mentores también lideran en otras de las empresas más importantes del mundo</p>
                <div className="flex justify-center mt-6">
                <Image src="/images/company/deep-pit.svg" alt="Deep Pit" width={150} height={50} />
                <Image src="/images/company/scotiabank.svg" alt="Scotiabank" width={150} height={50} className="mx-6" />
                <Image src="/images/company/interbank.svg" alt="Interbank" width={150} height={50} />
                <Image src="/images/company/coder-house.svg" alt="Coder House" width={150} height={50} className="mx-8" />
                <Image src="/images/company/google.svg" alt="Google" width={150} height={50} />
                </div>
            </div>
      </div>
      );
}

export default Mentors;