import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
    return (
    <footer className="w-full bg-blue-600 text-white py-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-32 md:py-5">
        
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-center mb-6 md:mb-0">
                <div className="flex items-center">
                    {/* Logo */}
                    <Image
                    src="/images/company/deep-skill.svg" // Reemplaza con la ruta de tu logo
                    alt="DeepSkill Logo"
                    width={175}
                    height={30}
                    />
                </div>
                <p className="font-poppinsregular mt-2 text-center md:text-center md:text-10px">&copy; 2024 Deep Skill Software Factory.</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-6 md:mb-0">
                <Link href="https://www.linkedin.com/company/deep-skill/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                    <span className="icon-[akar-icons--linkedin-box-fill]"></span>
                </Link>
                <Link href="https://www.facebook.com/Deep-Skill-Academy-117339758058300" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                    <span className="icon-[akar-icons--facebook-fill]"></span>
                </Link>
                <Link href="https://x.com/_deepskill" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                    <span className="icon-[akar-icons--twitter-fill]"></span>
                </Link>
                <Link href="https://www.instagram.com/deepskill.academy/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                    <span className="icon-[akar-icons--instagram-fill]"></span>
                </Link>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-right">
                <h3 className="font-poppinsbold text-lg">Escríbenos</h3>
                <p className="text-sm font-poppinsregular">contact@deepskill.space</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;