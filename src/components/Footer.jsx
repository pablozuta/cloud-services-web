import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container bg-gray-900">
      <div>
        <p className="font-bold uppercase mb-8 text-lightColor text-lg text-center md:text-left">
          Subscribirse a nuestra lista de correo
        </p>
      </div>

      <div >
        <form >
          <input
            type="text"
            name="email"
            className="input-field  p-2 mr-4 rounded-md mb-4 text-gray-900"
            placeholder="Tu email..."/>
          <center><button className="submit-footer">Submit</button></center>          
        </form>
      </div>

    </footer>
  );
};

export default Footer;
