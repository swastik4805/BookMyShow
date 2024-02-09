

import { Link } from "react-router-dom";


export const PageNotFound = () => {

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700">
            404 , Oops!
          </p>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="text-xl bg-green-400 rounded-md p-4">Back back home</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
