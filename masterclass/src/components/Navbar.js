import Image from 'next/image';
import deepSkillImg from '../assets/image/logo.png';

const NavBar = () =>{
    return(
        <nav className="flex items-center justify-between bg-colorNavbar text-white p-8 w-full">
            {/* Logo en el lado izquierdo */}
            <div className="flex items-center pl-12">
                <Image src={deepSkillImg} alt="logo" width={200} />
            </div>
            
            {/* Secciones de navegación en el lado derecho */}
            <ul className="flex space-x-7">
                <li><a href="#" className="text-colorTextNavbar hover:text-gray-400">Inicio</a></li>
                <li><a href="#" className="text-colorTextNavbar hover:text-gray-400">¿Quiénes somos?</a></li>
                <li><a href="#" className="text-colorTextNavbar hover:text-gray-400">Para profesionales</a></li>
                <li><a href="#" className="text-colorTextNavbar hover:text-gray-400">Para empresas</a></li>
            </ul>
       </nav>
    )
}

export default NavBar;