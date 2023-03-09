import React from "react";
import Presentacion from "../componentes/presentacion";
import perfil from "../assets/perfil.png";

import "../App.css";

const Home = () => {
  return (
    <main className="mt-10 w-2/3 mx-auto z-30">
      <div className="border border-green-500 rounded-lg bg-gray-900 bg-opacity-25">
        <div className="principal">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="mt-24 lg:mt-80 pt-3 pb-3 h-48 ">
              <p className="text-2xl sm:text-4xl  text-green-500 text-center font-semibold">
                Hello!
              </p>
              <Presentacion />
            </div>

            <div>
              <img
                className="mt-12 lg:mt-64 mx-auto border border-white lg:shadow-lg lg:shadow-white h-48 md:h-80"
                src={perfil}
                alt="perfil"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
