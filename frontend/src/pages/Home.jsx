import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gradient-to-b from-white to-rose-100">

      
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-light  text-gray-900 ">
          OTAKU STREET
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl">
          A demo e-commerce app with authentication, admin product management,
          and cart functionality.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
          >
            View Products
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 border border-gray-900 text-gray-900 rounded hover:bg-gray-100 transition"
          >
            Login
          </button>
        </div>
      </section>

      
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-lg font-medium">Secure Auth</h3>
          <p className="text-gray-600 mt-2">
            Login & protected routes using Redux.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">Cart System</h3>
          <p className="text-gray-600 mt-2">
            Add & remove products with persistence.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium">Admin Control</h3>
          <p className="text-gray-600 mt-2">
            Admin-only product creation.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
