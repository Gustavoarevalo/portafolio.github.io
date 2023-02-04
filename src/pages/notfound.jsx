import { useRouteError, Link } from "react-router-dom";
import "../App.css";

const Notfund = () => {
  const error = useRouteError();

  return (
    <div className="pt-12 sm:pt-24 w-2/3 mx-auto">
      <div className="border border-green-500 bg-gray-900 bg-opacity-25">
        <div className="principal">
          <div className="text-center text-white py-auto mt-10">
            <h1 className="text-9xl">404</h1>
            <p>Page not found </p>
            <p>{error.statusText || error.message}</p>
            <button className="mt-12 h-10 w-40 border border-green-500">
              <Link to="/"> Return Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notfund;
