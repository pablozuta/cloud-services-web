import React from "react";
import './hero.css';
import hero from "../assets/hero.jpg";
import GreenBtn from "./GreenBtn";

const Hero = () => {
  return (
    <main name="home" className="container-hero" >

      <header>
        <p className="text-2xl text-gray-500">
          Servicio de alojamiento web seguro y confiable.
        </p>
        <h1 className="pt-1 pb-6 text-5xl md:text-7xl font-bold">
          <span className="text-gray-400">ALPHA</span> Web Services
        </h1>
        <p className="text-base font-light text-gray-500">
          Un buen servicio de alojamiento web debe ofrecer una amplia gama de características para garantizar la seguridad y la estabilidad del sitio web.
        </p>
        <GreenBtn
          title="conoce mas"
          className="capitalize py-3 px-6  my-8 ancho"
        />
      </header>

      <div className="imagen-hero">
        <img src="https://www.svgrepo.com/show/249686/monitor-computer.svg" alt="hero" />
      </div>
      <br />


    </main>
  );
};

export default Hero;
