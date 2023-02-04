import React, { useState } from "react";
import flutter from "../assets/flutter.png";
import html from "../assets/html.png";
import inskcape from "../assets/inkscape.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript-736400_640.png";
import laravel from "../assets/laravel.png";
import sql from "../assets/mysql.png";
import php from "../assets/php.png";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.png";
import vstudio from "../assets/images.png";
import "../App.css";

import Skilltype from "../componentes/skilltype";
import Modal from "../componentes/modal.";

const Skill_tell = () => {
  const [estadomodal, cambiarestadomodal] = useState(false);
  const [estadomodal1, cambiarestadomodal1] = useState(false);
  const [estadomodal2, cambiarestadomodal2] = useState(false);
  const [estadomodal3, cambiarestadomodal3] = useState(false);
  const [estadomodal4, cambiarestadomodal4] = useState(false);
  const [estadomodal5, cambiarestadomodal5] = useState(false);
  const [estadomodal6, cambiarestadomodal6] = useState(false);
  const [estadomodal7, cambiarestadomodal7] = useState(false);
  const [estadomodal8, cambiarestadomodal8] = useState(false);
  const [estadomodal9, cambiarestadomodal9] = useState(false);
  const [estadomodal10, cambiarestadomodal10] = useState(false);

  return (
    <div className="mt-5 sm:mt-10 w-2/3 mx-auto">
      <div className="border border-green-500 bg-gray-900 bg-opacity-25 rounded-lg">
        <div className="principal">
          <div className="h-20 sm:h-36">
            <Skilltype />
          </div>
          <div className="sm:mt-2 ">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center ">
              <button onClick={() => cambiarestadomodal(!estadomodal)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img
                    src={html}
                    alt="html"
                    className=" px-6 sm:px-5 pt-1 sm:h-24"
                  />

                  <p className="px-5 pt-1 sm:px-7 sm:mt-2 sm:text-base sm:font-medium text-black">
                    Html
                  </p>
                  <Modal
                    open={estadomodal}
                    close={cambiarestadomodal}
                    titulo="HTML"
                  >
                    <p className="text-left">
                      HTML is a markup language used to create websites. It is a
                      standard used by most websites to define their structure
                      and content. With HTML, elements such as headers,
                      paragraphs, links, images, tables, and forms can be
                      created.
                    </p>
                  </Modal>
                </div>
              </button>
              <button onClick={() => cambiarestadomodal1(!estadomodal1)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img
                    src={css}
                    alt="css"
                    className=" px-6 sm:px-5 pt-1 sm:h-24"
                  />

                  <p className="px-6 pt-1 sm:px-8 sm:mt-2 sm:text-base sm:font-medium text-black">
                    Css
                  </p>
                  <Modal
                    open={estadomodal1}
                    close={cambiarestadomodal1}
                    titulo="CSS"
                  >
                    <p className="text-left">
                      CSS is a style language used to format and style HTML
                      documents. With CSS, aspects such as background color,
                      margins, fonts, alignment, and element placement on a page
                      can be defined.
                    </p>
                  </Modal>
                </div>
              </button>
              <button onClick={() => cambiarestadomodal2(!estadomodal2)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img
                    src={inskcape}
                    alt="inskcape"
                    className=" px-4 h-12 sm:px-1 pt-1 sm:h-24"
                  />

                  <p className="px-1 pt-1 sm:px-4 sm:mt-2 sm:text-base sm:font-medium text-black">
                    Inskcape
                  </p>
                  <Modal
                    open={estadomodal2}
                    close={cambiarestadomodal2}
                    titulo="INKSCAPE"
                  >
                    <p className="text-left">
                      Inkscape is a vector graphics design program used to
                      create graphics, drawings, diagrams and logos. It offers a
                      powerful editing toolset and allows you to create visually
                      stunning designs.
                    </p>
                  </Modal>
                </div>
              </button>
              <button onClick={() => cambiarestadomodal3(!estadomodal3)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img
                    src={flutter}
                    alt="flutter"
                    className=" px-5 h-12 sm:px-3 pt-1 sm:h-24"
                  />

                  <p className="px-4 pt-1 sm:px-6 sm:mt-2 sm:text-base sm:font-medium text-black">
                    Flutter
                  </p>
                  <Modal
                    open={estadomodal3}
                    close={cambiarestadomodal3}
                    titulo="FLUTTER"
                  >
                    <p className="text-left">
                      Flutter is a mobile app development framework developed by
                      Google. It allows for the creation of apps for iOS and
                      Android with the same source code using the Dart
                      programming language. Flutter is known for its speed and
                      ease of use.
                    </p>
                  </Modal>
                </div>
              </button>
              <button onClick={() => cambiarestadomodal4(!estadomodal4)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img
                    src={javascript}
                    alt="javascript"
                    className=" px-3 sm:px-1 pt-1 sm:h-24"
                  />

                  <p className="px-2 sm:px-3 sm:mt-2 text-sm sm:text-base sm:font-medium text-black">
                    Javascript
                  </p>
                  <Modal
                    open={estadomodal4}
                    close={cambiarestadomodal4}
                    titulo="JAVASCRIPT"
                  >
                    <p className="text-left">
                      JavaScript is a high-level programming language for web
                      development. JavaScript is widely used in the development
                      of dynamic web applications, games, and other interactive
                      applications.
                    </p>
                  </Modal>
                </div>
              </button>
              <button onClick={() => cambiarestadomodal5(!estadomodal5)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img
                    src={laravel}
                    alt="laravel"
                    className=" px-5 sm:px-3 pt-1 h-14 sm:h-24"
                  />

                  <p className="px-3 sm:pt-1 sm:px-5 sm:mt-2 sm:text-base sm:font-medium text-black">
                    Laravel
                  </p>
                  <Modal
                    open={estadomodal5}
                    close={cambiarestadomodal5}
                    titulo="LARAVEL"
                  >
                    <p className="text-left">
                      Laravel is an open-source PHP web application development
                      framework. Laravel facilitates web application creation by
                      offering an organized structure and tools for route
                      management, authentication, and database management.
                    </p>
                  </Modal>
                </div>
              </button>
              <button onClick={() => cambiarestadomodal6(!estadomodal6)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img
                    src={sql}
                    alt="sql"
                    className=" px-4 sm:px-5 pt-1 sm:h-24"
                  />

                  <p className="hidden md:block pt-1 sm:px-6 sm:mt-2 sm:text-base sm:font-medium text-black">
                    MySql
                  </p>
                  <Modal
                    open={estadomodal6}
                    close={cambiarestadomodal6}
                    titulo="MYSQL"
                  >
                    <p className="text-left">
                      MySQL is a relational database management system. MySQL is
                      used to store and retrieve information in web applications
                      and is one of the most popular and widely used database
                      management systems in the world.
                    </p>
                  </Modal>
                </div>
              </button>
              <button onClick={() => cambiarestadomodal7(!estadomodal7)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img src={php} alt="php" className=" px-1 pt-1 sm:pt-8 " />

                  <p className="px-6 pt-1 sm:px-7 sm:mt-5 sm:text-base sm:font-medium text-black">
                    PHP
                  </p>
                  <Modal
                    open={estadomodal7}
                    close={cambiarestadomodal7}
                    titulo="PHP"
                  >
                    <p className="text-left">
                      PHP is a server-side programming language used in web
                      development. PHP is one of the most popular programming
                      languages in the world and is used in the development of
                      applications such as WordPress, Joomla, and Magento.
                    </p>
                  </Modal>
                </div>
              </button>
              <button onClick={() => cambiarestadomodal8(!estadomodal8)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img
                    src={react}
                    alt="react"
                    className="h-12 pl-4 sm:px-1 pt-1 sm:h-24"
                  />

                  <p className="px-5 pt-1 sm:px-7 sm:mt-2 sm:text-base sm:font-medium text-black">
                    React
                  </p>
                  <Modal
                    open={estadomodal8}
                    close={cambiarestadomodal8}
                    titulo="REACT"
                  >
                    <p className="text-left">
                      React is a JavaScript library developed by Facebook for
                      building user interfaces. React allows for the creation of
                      reusable and efficient components and is used in many
                      websites and mobile apps.
                    </p>
                  </Modal>
                </div>
              </button>
              <button onClick={() => cambiarestadomodal9(!estadomodal9)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img
                    src={tailwind}
                    alt="tailwind"
                    className=" px-2 sm:px-1 pt-1 sm:h-24"
                  />

                  <p className="px-2 pt-1 sm:px-4 sm:mt-2 sm:text-base sm:font-medium text-black">
                    Tailwind
                  </p>
                  <Modal
                    open={estadomodal9}
                    close={cambiarestadomodal9}
                    titulo="TAILWIND"
                  >
                    <p className="text-left">
                      It is a CSS styling library that provides pre-built
                      classes for quick implementation of styles in web
                      applications. It allows for easy customization of styles
                      and speeds up the design process.
                    </p>
                  </Modal>
                </div>
              </button>
              <button onClick={() => cambiarestadomodal10(!estadomodal10)}>
                <div className="mt-3 sm:mt-10 w-20 sm:w-24 h-20 sm:h-36 mx-auto rounded-lg bg-white sm:hover:shadow-lg sm:hover:shadow-white">
                  <img
                    src={vstudio}
                    alt="vstudio"
                    className=" px-5 sm:px-2 pt-1 sm:h-24"
                  />
                  <p className="block sm:hidden pt-1 px-2 text-base text-black">
                    V-Studio
                  </p>
                  <p className="hidden md:block pt-1 sm:px-6 sm:text-base sm:font-medium text-black">
                    Visual Studio
                  </p>
                  <Modal
                    open={estadomodal10}
                    close={cambiarestadomodal10}
                    titulo="VISUAL STUDIO"
                  >
                    <p className="text-left">
                      It is a Microsoft integrated development environment (IDE)
                      for developing applications for Windows, web, and mobile
                      devices. It includes programming tools, debugging,
                      testing, and error tracking to facilitate software
                      development.
                    </p>
                  </Modal>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill_tell;
