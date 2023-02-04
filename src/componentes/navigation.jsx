import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [index, setIndex] = useState(0);
  const pages = ["/", "about", "skill", "contact"];

  const handleNext = () => {
    setIndex(index === pages.length - 1 ? 0 : index + 1);
  };

  const handleBack = () => {
    setIndex(index === 0 ? pages.length - 1 : index - 1);
  };

  return (
    <div className="flex justify-between z-10 mt-4 sm:mt-0 ">
      <div className="ml-8 px-4 py-2 text-lg rounded-lg bg-white text-black hover:bg-green-500">
        <NavLink to={pages[index]} onClick={handleBack}>
          Back
        </NavLink>
      </div>

      <div className="mr-8 px-4 py-2 text-lg rounded-lg bg-white text-black hover:bg-green-500 flex justify-end">
        <NavLink to={pages[index]} onClick={handleNext}>
          Next
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
