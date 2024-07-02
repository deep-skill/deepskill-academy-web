"use client";
import { useState } from 'react';
import Image from 'next/image';
import deepSkillImg from '/public/images/logo.png';

const NavBar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-colorNavbar text-white p-6 w-full fixed top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo en el lado izquierdo */}
                <div className="flex items-center">
                    <Image src={deepSkillImg} alt="logo" width={200} />
                </div>
                
                {/* Icono de menú hamburguesa */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-customBlue focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Secciones de navegación en el lado derecho, ocultas en pantallas pequeñas */}
                <ul className="hidden md:flex space-x-7">
                    <li><a href="#" className="text-colorTextNavbar hover:text-gray-400">Inicio</a></li>
                    <li><a href="#" className="text-colorTextNavbar hover:text-gray-400">¿Quiénes somos?</a></li>
                    <li><a href="#" className="text-colorTextNavbar hover:text-gray-400">Para profesionales</a></li>
                    <li><a href="#" className="text-colorTextNavbar hover:text-gray-400">Para empresas</a></li>
                </ul>
            </div>

            {/* Menú desplegable para pantallas pequeñas */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="space-y-4 p-4">
                    <li><a href="#" className="text-colorTextNavbar block px-4 py-2 hover:bg-colorsButton">Inicio</a></li>
                    <li><a href="#" className="text-colorTextNavbar block px-4 py-2 hover:bg-colorsButton">¿Quiénes somos?</a></li>
                    <li><a href="#" className="text-colorTextNavbar block px-4 py-2 hover:bg-colorsButton">Para profesionales</a></li>
                    <li><a href="#" className="text-colorTextNavbar block px-4 py-2 hover:bg-colorsButton">Para empresas</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;