import React from "react";
import Image from "next/image";

const FloatingWhatsAppButton = () => {
  const whatsappNumber = "+51910382207"; // Cambia por tu número de WhatsApp
  const whatsappLink = `https://wa.link/tpvzkb`; // Asegúrate de que el enlace es válido

  return (
    <a
      href={whatsappLink} // Uso directo de la variable sin llaves adicionales
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-5 flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Chat en WhatsApp"
    >
      <Image
        src="/images/icon/whatsapp-icon.svg" // Asegúrate de que el archivo está en la carpeta public
        alt="WhatsApp"
        width={64} // Tamaño del ícono
        height={64}
        priority // Carga optimizada
      />
    </a>
  );
};

export default FloatingWhatsAppButton;
