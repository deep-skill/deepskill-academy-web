import React from 'react';

const Programs = () => {
  return (
    <div className="w-full md:py-10 bg-white">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="px-2 2xl:pt-7 lg:pl-2 xl:pl-20 py-8 lg:py-1 lg:p-5 md:p-12">
          <h2 className="font-poppinsbold text-colorTextSubtitulo text-32px lg:text-3xl xl:text-4xl 2xl:text-40px text-center md:text-left mb-4 md:mb-1 lg:mb-1">
            ¿Qué Incluye el Programa?
          </h2>
          <p className="font-poppinssemibold text-lg text-center text-colorTextNavbar mb-10 md:text-xl  lg:text-xl xl:text-xl 2xl:text-2xl md:text-left">
            Beneficios para nuestra comunidad
          </p>
          <div className=" md:w-full flex flex-wrap justify-center lg:gap-x-5 xl:gap-x-10 lg:px-2 xl:px-2">
            {/* Card Azul 1 */}
            <div className="w-full lg:w-[48%] xl:w-[48%] lg:px-1 mb-4">
              <div className="bg-customBlue text-white rounded-lg lg:p-6 2xl:p-8 h-full flex flex-col justify-between">
                <div className="flex items-center mb-2 md:mb-4 lg:mb-0">
                  <img src="/images/icon/clock-icon.svg" alt="Clock Icon" className="w-36 h-36 mb-2 mr-3 md:w-25 md:h-25 lg:w-40 lg:h-40  sm:mb-0" />
                  <p className="font-poppinsbold text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl md:pr-20">
                    24 horas de sesiones grupales en vivo con tu Deep Mentor.
                  </p>
                </div>
              </div>
            </div>
            {/* Card Azul 2 */}
            <div className="w-full lg:w-[48%] xl:w-[48%] lg:px-1 mb-4">
              <div className="p-1 bg-customBlue text-white rounded-lg lg:p-6 2xl:p-8 h-full flex flex-col justify-between">
                <div className="flex items-center mb-2 md:mb-4 lg:mb-0">
                  <img src="/images/icon/rocket-launch-icon.svg" alt="Rocket Launch Icon" className="w-36 h-36 mb-2 mr-3 md:w-25 md:h-25 lg:w-40 lg:h-40  sm:mb-0" />
                  <p className="font-poppinsbold text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-2xl md:pr-20">
                   4 horas de trabajo de laboratorio en sesión 1 a 1 con tu Buddy.
                  </p>
                </div>
              </div>
            </div>
            {/* Card Verde 1 */}
            <div className="w-full lg:w-[31%] lg:px-0 md:mb-4 md:my-4 mb-0 flex justify-center">
              <div className="p-4 lg:p-4 xl:py-6 2xl:py-8 2xl:p-7 bg-colorsButton text-white rounded-lg h-full flex flex-col justify-between">
                <div className="flex items-center mb-2 md:mb-4">
                  <img src="/images/icon/monitor-icon.svg" alt="Monitor Icon" className="w-28 h-28 mb-2 mr-2 md:w-15 md:h-15 lg:w-28 lg:h-28  sm:mb-0 sm:mr-2"/>
                  <p className="font-poppinsbold  text-black text-xl md:text-lg lg:text-sm xl:text-lg 2xl:text-xl md:text-left pl-5 md:pl-6">
                    Seguimiento asíncrono full time durante todo el programa
                  </p>
                </div>
              </div>
            </div>
            {/* Card Verde 2 */}
            <div className="w-full lg:w-[31%] lg:px-0 my-4 flex justify-center">
              <div className="p-6 lg:p-4 xl:py-6 2xl:py-8 2xl:p-7 bg-colorsButton text-white rounded-lg h-full flex flex-col justify-between">
                <div className="flex items-center mb-2 md:mb-4">
                  <img src="/images/icon/book-icon.svg" alt="Book Icon" className="w-28 h-28 mb-2 mr-2 md:w-15 md:h-15 lg:w-28 lg:h-28 sm:mb-0 sm:mr-2" />
                  <p className="font-poppinsbold text-black text-xl md:text-lg lg:text-sm xl:text-lg 2xl:text-xl md:text-left pl-4 md:pl-6">
                    Acceso premium a nuestra comunidad de Discord.
                  </p>
                </div>
              </div>
            </div>
            {/* Card Verde 3 */}
            <div className="w-full lg:w-[31%] lg:px-0 md:mb-4 md:my-4 mb-0 flex justify-center">
              <div className="p-6 lg:p-4 xl:py-6 2xl:py-8 2xl:p-7 bg-colorsButton text-white rounded-lg h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img src="/images/icon/book-icon2.svg" alt="Book Icon" className="w-28 h-28 md:w-15 md:h-15 lg:w-28 lg:h-28 mr-2 sm:mb-0 sm:mr-2" />
                  <p className="font-poppinsbold text-black text-xl md:text-lg lg:text-sm xl:text-lg 2xl:text-xl  text-left pl-6">
                    Acceso a todas las grabaciones y material de estudio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
