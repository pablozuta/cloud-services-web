import React from "react";
import GreenBtn from "./GreenBtn";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-400 py-8 px-2 border-t-2">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="flex flex-col gap-8 md:flex-row items-center justify-center w-full">


          {/* newsletter */}
          <div className="w-3/4 md:w-1/2">
            <div className="w-full pt-8 md:pt-2">
              <p className="font-bold uppercase mb-8 text-lightColor text-lg text-center md:text-left">
                Subscribe to our newsletter
              </p>
              <form
                action="https://getform.io/f/fbeaf56f-5d61-4e09-9ea2-84dc28c66a69"
                method="POST"
                className="flex flex-col sm:flex-row"
              >
                <input
                  type="text"
                  name="email"
                  className="w-full p-2 mr-4 rounded-md mb-4 text-gray-900"
                  placeholder="Daily newsletter..."
                />
                <GreenBtn title="Subscribe" className="p-2 mb-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
