import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;

    dispatch(asyncRegisterUser(user));
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-4 pt-24">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-full max-w-md bg-gradient-to-l from-rose-100 to-gray-100 border border-gray-200 rounded-lg shadow-md p-6 space-y-6"
      >
        <h2 className="text-2xl font-light text-gray-900 text-center">
          Create Account
        </h2>

        {/* Username */}
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-gray-900 transition"
          type="text"
          placeholder="Username"
          {...register("username")}
        />

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
          Register
        </button>

        {/* Login link */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-rose-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
