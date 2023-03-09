import React from "react";
import "../App.css";
import Contacttype from "../componentes/contacttype";
import Linkformulario from "../componentes/linkformulario";

const Contact = () => {
  return (
    <main className="mt-10 w-2/3 mx-auto">
      <div className="border border-green-500 bg-gray-900 bg-opacity-25 rounded-lg">
        <div className="principal">
          <div className="h-20 sm:h-36">
            <Contacttype />
          </div>
          <div className="grid justify-items-center ">
            <Linkformulario />
          </div>
          <div>
            <h3 className="text-white ml-2 lg:ml-4 text-lg">
              Mail: gustavoamero@gmail.com
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
