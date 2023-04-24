import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import GreenBtn from "./GreenBtn";

const PriceCard = ({ priceCategory, dollar, features, texto }) => {
  return (
    <section className="bg-white text-slate-900 m-4 rounded-xl overflow-hidden shadow-2xl price-card-container">
      <div className="text-center bg-darkColor text-white py-4 uppercase">
        <p>{priceCategory}</p>
      </div>
      <div className="p-4">
        <p className="text-6xl font-bold py-4 flex">
          {`$${dollar} `}
          <span className="text-xl text-darkColor flex flex-col justify-end">
            /mo
          </span>
        </p>
      </div>

      <p className="text-2xl px-4 py-8 text-slate-500">
      {texto}
      </p>

      <div className="text-2xl">
        <div className="px-4">
          {features.map(({ id, title }) => (
            <p key={id} className="flex items-center py-3 text-lg">
              <FaPlusCircle className="w-5 mr-3 text-lightColor" /> {title}
            </p>
          ))}
        </div>

        <GreenBtn
          title="contratar"
          className="capitalize w-full py-4 mt-14 rounded-none hover:border-none"
        />
      </div>
    </section>
  );
};

export default PriceCard;
