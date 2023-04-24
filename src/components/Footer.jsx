import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer name="subscribete" className="footer-container bg-gray-900">
      <div>
        <center>
          <p className="font-bold uppercase mb-4 text-lightColor text-lg text-center md:text-left">
            Subscribirse a nuestra lista de correo
          </p>
        </center>

      </div>

      <div >

        <form >
          <center>
            <input
              type="text"
              name="email"
              className="input-field  p-2  rounded-md mb-4 text-gray-900"
              placeholder="Tu email..." />
          </center>

          <center><button className="submit-footer">Enviar</button></center>
        </form>
      </div>

    </footer>
  );
};

export default Footer;
