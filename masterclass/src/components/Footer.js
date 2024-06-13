import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
    return (
    <footer className="w-full bg-blue-600 text-white py-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-20">
        
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                <div className="flex items-center">
                    {/* Logo */}
                    <Image
                    src="/images/company/deep-skill.svg" // Reemplaza con la ruta de tu logo
                    alt="DeepSkill Logo"
                    width={180}
                    height={35}
                    />
                </div>
                <p className="mt-2 text-center md:text-left">&copy; 2024 Deep Skill Software Factory.</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-6 md:mb-0">
                <Link href="https://www.linkedin.com" className="text-white hover:text-gray-200">
                    <span className="icon-[akar-icons--linkedin-box-fill]"></span>
                </Link>
                <Link href="https://www.facebook.com" className="text-white hover:text-gray-200">
                    <span className="icon-[akar-icons--facebook-fill]"></span>
                </Link>
                <Link href="https://www.twitter.com" className="text-white hover:text-gray-200">
                    <span className="icon-[akar-icons--twitter-fill]"></span>
                </Link>
                <Link href="https://www.instagram.com" className="text-white hover:text-gray-200">
                    <span className="icon-[akar-icons--instagram-fill]"></span>
                </Link>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-right">
                <h3 className="font-bold">Escríbenos</h3>
                <p>contact@deepskill.space</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;