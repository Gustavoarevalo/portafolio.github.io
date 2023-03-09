import React from "react";
import Abouttype from "../componentes/aboutype";
import "../App.css";

const About = () => {
  return (
    <main className="mt-10 w-2/3 mx-auto">
      <div className="border border-green-500 bg-gray-900 bg-opacity-25 rounded-lg">
        <div className="principal">
          <Abouttype />

          <div className="mt-4 sm:mt-16  flex justify-center">
            <p className="ml-8 mr-8 sm:ml-24 sm:mr-24 text-white font-medium text-sm sm:text-xl text-justify">
              I am a self-taught freelance developer passionate about technology
              and computer science. My dedication and enthusiasm for learning
              and growing in the field is reflected in the high level of quality
              in my projects. With a focus on problem-solving and delivering
              effective solutions, I have stood out as a reliable and capable
              professional. My adaptability and ability to work independently
              are a true demonstration of my experience and skill in the field.
              I am proud to be a valuable asset to any team or project that I
              have the opportunity to work with.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
