
export const Body = () => {
    return (
        <div className="bg-white p-4 w-full h-screen flex flex-col">
            <div className="pl-16">
                <div className="w-[48%] mt-12">
                    <h1 className="text-customBlue text-8xl font-timeburner mt-8 leading-tight outline-pink-500"> Aquí empieza <br/> tu futuro tech</h1>
                    <p className="text-colorText text-3xl mt-8 font-poppins leading-normal">Conecta junto a nuestros expertos con el mundo tecnológico de hoy.</p>
                    <button className="bg-customBlue rounded-full p-3 px-10 mt-8">VER CURSOS</button>
                </div>
    
                
                <div className="flex flex-row items-center mt-20 space-x-10">
                    <div className="flex items-center">
                        <span className="icon-[material-symbols--online-prediction] text-colorsIcon w-8 h-8 mr-2"></span>
                        <p className="text-colorText text-2xl ml-4 font-poppins">Online | En vivo | Remoto</p>
                    </div>
                    <div className="flex items-center">
                        <span class="icon-[material-symbols--school-outline-rounded]  text-colorsIcon w-8 h-8 mr-2"></span>
                        <p className="text-colorText ml-4 text-2xl font-poppins">Mentores expertos</p>
                    </div>
                    <div className="flex items-center">
                        <span class="icon-[material-symbols--rocket-launch-outline] text-colorsIcon w-8 h-8 mr-2"></span>
                        <p className="text-colorText ml-4 text-2xl font-poppins">Vacantes limitadas</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Body;