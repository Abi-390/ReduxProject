import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { asyncLoginUser } from "../store/actions/userActions";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const loginHandler = async(user) => {
    const success =await dispatch(asyncLoginUser(user));
    if(success){
    navigate("/products");
    }
  };
  const loggedInUser = useSelector((state) => state.user.users);

useEffect(() => {
  if (loggedInUser) {
    navigate("/products", { replace: true });
  }
}, [loggedInUser]);


  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-4 pt-24">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full max-w-md bg-gradient-to-l from-rose-100 to-gray-100 border border-gray-200 rounded-lg shadow-md p-6 space-y-6"
      >
        <h2 className="text-2xl font-light text-gray-900 text-center">
          Login
        </h2>

        {/* Email */}
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition"
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        {/* Password */}
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition"
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Login
        </button>

        {/* Register link */}
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-rose-500 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
