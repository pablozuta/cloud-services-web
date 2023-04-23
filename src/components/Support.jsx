import React from "react";

import {
  MdOutlineComputer,
  MdOutlineSupportAgent,
  MdPerson,
} from "react-icons/md";
import GreenBtn from "./GreenBtn";

const Support = () => {
  const supportLinks = [
    {
      id: 1,
      title: "Tecnico",
      subtitle: `Soporte técnico en línea para solucionar cualquier problema técnico que puedas tener en tu empresa. Nuestro equipo de expertos está disponible las 24 horas del día para brindarte soluciones rápidas y efectivas.`,
      icon: <MdOutlineComputer size={25} />,
    },
    {
      id: 2,
      title: "Ventas",
      subtitle: `Nuestro equipo de soporte de ventas está compuesto por expertos en la materia que están comprometidos en ayudar a nuestros clientes a encontrar la solución perfecta para sus necesidades.`,
      icon: <MdOutlineSupportAgent size={25} />,
    },
    {
      id: 3,
      title: "General",
      subtitle: `Valoramos la satisfacción del cliente por encima de todo. Es por eso que ofrecemos un servicio de soporte general para ayudar a nuestros clientes a resolver cualquier problema o duda que puedan tener.`,
      icon: <MdPerson size={25} />,
    },
  ];

  return (
    <div name="support" className="w-full h-fit bg-slate-300">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="px-4 py-12">
          <h2 className="text-5xl font-bold text-center">Soporte</h2>
          <p className="text-xl py-8  text-gray-600 text-center">
          Nuestro equipo de soporte está conformado por profesionales experimentados en el campo de la tecnología en la nube. Estamos disponibles para nuestros clientes en todo momento, ya sea por teléfono, correo electrónico o chat en vivo.
          </p>
        </div>

        {/* support cards */}
        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          {supportLinks.map(({ id, title, subtitle, icon }) => (
            <div
              key={id}
              className="bg-gray-900 text-white rounded-xl shadow-lg shadow-lightColor"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 p-4 bg-lightColor text-darkColor rounded-full mt-[-4rem]">
                  {icon}
                </div>
                <h3 className="font-bold text-2xl my-6">{title}</h3>
                <p className="text-gray-300 text-base pb-12">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-center">
          <GreenBtn
            title="ponte en contacto"
            className="capitalize py-3 px-6 w-1/2 my-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
