
export const Body = () => {
    return (
        <div className="bg-white p-4 w-full min-h-screen flex flex-col justify-center">
            <div className="md:pl-16 flex flex-col items-center md:items-start">
                <div className="w-full md:w-1/2 mt-12 text-center md:text-left">
                    <h1 className="text-customBlue text-4xl sm:text-6xl md:text-8xl font-timeburner mt-8 leading-tight">
                        Aquí empieza <br /> tu futuro tech
                    </h1>
                    <p className="text-colorText text-lg sm:text-2xl md:text-3xl mt-8 font-poppins leading-normal">
                        Conecta junto a nuestros expertos con el mundo tecnológico de hoy.
                    </p>
                    <button className="bg-customBlue rounded-full p-3 px-6 sm:px-10 mt-8">
                        VER CURSOS
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row items-center mt-12 md:mt-20 space-y-6 sm:space-y-0 sm:space-x-10">
                    <div className="flex items-center">
                        <span className="icon-[material-symbols--online-prediction] text-colorsIcon w-8 h-8 mr-2"></span>
                        <p className="text-colorText text-base sm:text-xl md:text-2xl ml-4 font-poppins">Online | En vivo | Remoto</p>
                    </div>
                    <div className="flex items-center">
                        <span className="icon-[material-symbols--school-outline-rounded] text-colorsIcon w-8 h-8 mr-2"></span>
                        <p className="text-colorText text-base sm:text-xl md:text-2xl ml-4 font-poppins">Mentores expertos</p>
                    </div>
                    <div className="flex items-center">
                        <span className="icon-[material-symbols--rocket-launch-outline] text-colorsIcon w-8 h-8 mr-2"></span>
                        <p className="text-colorText text-base sm:text-xl md:text-2xl ml-4 font-poppins">Vacantes limitadas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;