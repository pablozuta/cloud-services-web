import React from "react";
import hero from "../assets/hero.jpg";
import GreenBtn from "./GreenBtn";

const Hero = () => {
  return (
    <div
      name="home"
      className="flex flex-col justify-between w-full h-screen bg-gray-900 text-white text-center md:text-left "
    >
      <div className="grid md:grid-cols-2 mt-16 max-w-screen-xl m-auto px-3">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl text-gray-500">
            Servicio de alojamiento web seguro y confiable.
          </p>
          <h1 className="pt-1 pb-6 text-5xl md:text-7xl font-bold">
            <span className="text-lightColor">ONNN</span> Web Services
          </h1>
          <p className="text-base font-light text-gray-500">
          Un buen servicio de alojamiento web seguro y confiable debe ofrecer una amplia gama de características para garantizar la seguridad y la estabilidad del sitio web.
          </p>
          <GreenBtn
            title="sign up"
            className="capitalize py-3 px-6 sm:w-8/12 my-8"
          />
        </div>

        <div className="flex items-center justify-center">
          <img src={hero} alt="hero" className="w-3/4 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
