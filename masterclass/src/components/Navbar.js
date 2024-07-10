"use client";
import { useState } from 'react';
import Image from 'next/image';
import deepSkillImg from '../assets/image/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-colorNavbar text-white px-6 py-5 w-full fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-1 lg:px-1 2xl:px-6">
        {/* Logo en el lado izquierdo */}
        <div className="flex items-center lg:ml-8 2xl:ml-10 ml-10 md:ml-0">
          <Image src={deepSkillImg} alt="logo" width={180} />
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
          <li>
            <Link href="/" className="text-colorTextNavbar hover:text-gray-400 text-sm font-poppinsregular">Inicio</Link>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={600} offset={-40} className="cursor-pointer">
              <span className="text-colorTextNavbar hover:text-gray-400 text-sm font-poppinsregular">¿Quiénes somos?</span>
            </ScrollLink>
          </li>
          <li>
            <a href="#" className="text-colorTextNavbar hover:text-gray-400 text-sm font-poppinsregular">Para profesionales</a>
          </li>
          <li>
            <a href="https://deepskill.space/" target="_blank" className="text-colorTextNavbar hover:text-gray-400 text-sm font-poppinsregular">Para empresas</a>
          </li>
        </ul>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 p-4">
          <li>
            <Link href="/" className="text-colorTextNavbar block px-4 py-2 hover:bg-colorsButton">Inicio</Link>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={600} offset={-40} className="cursor-pointer">
              <span className="text-colorTextNavbar block px-4 py-2 hover:bg-colorsButton">¿Quiénes somos?</span>
            </ScrollLink>
          </li>
          <li>
            <a href="#" className="text-colorTextNavbar block px-4 py-2 hover:bg-colorsButton">Para profesionales</a>
          </li>
          <li>
            <a href="https://deepskill.space/" target="_blank" className="text-colorTextNavbar block px-4 py-2 hover:bg-colorsButton">Para empresas</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
