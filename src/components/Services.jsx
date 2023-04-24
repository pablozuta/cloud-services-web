import React from "react";
import "./services.css"
import { FaChevronCircleRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Almacenamiento",
      subtitle: `Soluciones de almacenamiento en la nube para que puedas guardar tus archivos de manera segura y acceder a ellos desde cualquier lugar del mundo.`,
    },

    {
      id: 2,
      title: "Servidores virtuales",
      subtitle: `Servidores virtuales que te permiten alojar tus aplicaciones y sitios web en la nube, con acceso rápido y seguro desde cualquier lugar.`,
    },
    {
      id: 3,
      title: "Copias de seguridad",
      subtitle: `Copias de seguridad para que puedas proteger tus datos y recuperarlos en caso de emergencia, garantizando la continuidad de tu negocio.`,
    },
    {
      id: 4,
      title: "Correo electrónico",
      subtitle: `Soluciones de correo electrónico en la nube para que puedas enviar y recibir correos electrónicos de manera segura y accesible desde cualquier dispositivo.`,
    },
  ];

  return (
    <section name="servicios" className="services-container">
      <div className="altura"></div>
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <h2 className="text-5xl font-bold text-center">Servicios</h2>
        <p className="text-xl py-8 text-gray-600 text-center">
          Sabemos que los usuarios buscan sistemas armoniosos y sin problemas. En nuestra empresa, ofrecemos el servicio que necesita para brindar agilidad y respaldo a tus clientes.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 pt-4" style={{ flexWrap: "wrap" }}>
          {services.map(({ id, title, subtitle }) => (
            <div key={id} className="flex items-start p-4 bg-gray-900 text-white rounded-md" style={{ minWidth: "45%" }}>
              <div>
                <FaChevronCircleRight size={20} className="mt-3 mr-4 text-lightColor" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-lightColor pt-2 pb-4 capitalize">
                  {title}
                </h3>
                <p className="text-lg">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <br />

      </div>
    </section>

  );
};

export default Services;
