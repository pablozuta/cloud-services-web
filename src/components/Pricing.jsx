import React from "react";
import PriceCard from "./PriceCard";
import "./pricing.css"

const Pricing = () => {
  return (
    <section name="pricing" className="main-container">
      <div className="header-container">

        <div className="px-4 py-12 text-center">
          <h2 className="text-5xl font-bold">Pricing</h2>
          <p className="text-xl py-8 text-gray-500">
            Startled that over nothing hear and or it into. Lenore cushioned
            angels something bust if from and for laden. Opened said nothing i
            entreating a shorn nothing that, word perched.He bird repeating
            moment that repeating mortals rapping prophet a with.
          </p>
        </div>

        <div className="card-pricing">
            <PriceCard
            priceCategory="hobby"
            dollar="55"
            features={[
              {
                id: 1,
                title: "Feature One",
              },
              {
                id: 2,
                title: "Feature Two",
              },
              {
                id: 3,
                title: "Feature Three",
              },
            ]}
          />
          <PriceCard
            priceCategory="growth"
            dollar="69"
            features={[
              {
                id: 1,
                title: "* Feature One",
              },
              {
                id: 2,
                title: "+ Feature Two",
              },
              {
                id: 3,
                title: "Feature Three",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
