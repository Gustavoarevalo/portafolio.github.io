import { Outlet } from "react-router-dom";
import Navbar from "../componentes/nav";
import Navigation from "../componentes/navigation";

const Layoutpublic = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <Navigation />
    </>
  );
};
export default Layoutpublic;
