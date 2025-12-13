import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { asyncRegisterUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    console.log("register data", user);
    dispatch(asyncRegisterUser(user));
    navigate("/login");
  };

  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex items-center justify-center flex-col mt-5"
    >
      <input
        className="border-b-2 outline-0 mb-5"
        type="text"
        placeholder="Enter your username"
        {...register("username")}
      />
      <input
        className="border-b-2 outline-0 mb-5"
        type="email"
        placeholder="Enter your email"
        {...register("email")}
      />
      <input
        className="border-b-2 outline-0 mb-5"
        type="password"
        placeholder="Create a password"
        {...register("password")}
      />
      <button className="px-4 py-1 rounded bg-gray-400 text-white font-bold mt-3">
        Submit
      </button>
      <p className="mt-4">Already have an account?</p>
      <Link className="mt-2 text-red-400" to="/login">
        Login
      </Link>
    </form>
  );
};

export default Register;
