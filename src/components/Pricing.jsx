import React from "react";
import PriceCard from "./PriceCard";
import "./pricing.css";

const Pricing = () => {
  return (
    <section name="planes" className="main-container">
      <div className="header-container">

        <div className="px-4 py-12 text-center">
          <h2 className="text-5xl font-bold">Planes</h2>
          
        </div>

        <div className="card-pricing">
          <PriceCard
            priceCategory="individuales"
            dollar="9.990"
            texto="Servicios para usuarios individuales ofrecen variedad de opciones para satisfacer las necesidades de cualquier persona, desde el almacenamiento de fotos y documentos personales hasta el acceso a software."
            features={[
              {
                id: 1,
                title: "Forma conveniente y segura de compartir archivos.",
              },
              {
                id: 2,
                title: "Aplicaciones en línea",
              },
              {
                id: 3,
                title: "Portabilidad y Accesibilidad",
              },
            ]}
          />
          <PriceCard
            priceCategory="empresas"
            dollar="59.990"
            texto="Soluciones personalizadas y escalables para satisfacer las necesidades de su organización. Estos planes pueden incluir almacenamiento, infraestructura de red, software de gestión empresarial."
            features={[
              {
                id: 1,
                title: "Protección contra ataques cibernéticos",
              },
              {
                id: 2,
                title: "Software de gestión empresarial personalizado.",
              },
              {
                id: 3,
                title: "Aumenta la productividad de su equipo",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
