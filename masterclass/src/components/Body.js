import Carousel from "./Carousel";

export const Body = () => {
    const images = [
        '/images/carousel/jean-pierre-mandujano.png',
        '/images/carousel/layla-scheli.png',
        '/images/carousel/elvis-capia.png',
    ];

    return (
        <div className="bg-white p-4 w-full flex flex-col min-h-screen justify-center">
            <div className="md:pl-16 flex flex-col md:flex-row items-center md:items-start">
                <div className="w-full md:w-1/2 mt-12 text-center md:text-left">
                    <h1 className="text-customBlue font-TimeBurnerBold font-semibold text-5xl mt-14 leading-tight drop-shadow-lg md:text-8xl ">
                        Aquí empieza <br />
                        <span className="text-40px md:text-80px">tu futuro tech</span>
                    </h1>
                    <p className="text-colorText mt-8 px-6 pl-1 text-2xl font-Poppins leading-normal md:text-3xl sm:text-2xl">
                        Conecta junto a nuestros expertos con el mundo tecnológico de hoy.
                    </p>
                    <button className="bg-customBlue rounded-full text-2xl font-Poppins font-semibold mt-9 p-3 px-9 md:text-base sm:px-10">
                        VER CURSOS
                    </button>
                    <div className="flex flex-col mb-10 sm:flex-row items-center mt-12 space-y-6 md:mt-20 md:space-x-7 sm:space-y-0 sm:space-x-10">
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--online-prediction] text-colorsIcon w-11 h-11 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText font-Poppins text-2xl  md:text-base ">Online | En vivo | Remoto</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--school-outline-rounded] text-colorsIcon w-11 h-11 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-2xl sm:text-xl md:text-base font-Poppins">Mentores expertos</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:items-center">
                            <span className="icon-[material-symbols--rocket-launch-outline] text-colorsIcon w-11 h-11 mb-2 sm:mb-0 sm:mr-2"></span>
                            <p className="text-colorText text-2xl sm:text-xl md:text-base font-Poppins">Vacantes limitadas</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Carousel images={images} />
                </div>
            </div>
        </div>
    );
}

export default Body;

