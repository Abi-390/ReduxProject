import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import {Link} from 'react-router'
const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const registerHandler = (user) => {
    user.id = nanoid();
    console.log("register data",user);
  };

  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex items-center justify-center flex-col"
    >
      <input
        className="border-b-2 outline-0 mb-5"
        type="text"
        placeholder="Enter your username" {...register("username")}
      />
      <input
        className="border-b-2 outline-0 mb-5"
        type="email"
        placeholder="Enter your email" {...register("email")}
      />
      <input
        className="border-b-2 outline-0 mb-5"
        type="password"
        placeholder="Create a password" {...register("password")}
      />
      <button className="px-4 py-1 rounded bg-gray-400 text-white font-bold mt-3">Submit</button>
      <p className="mt-4">Already have an account?</p>
      <Link className="mt-2 text-red-400" to="/login">Login</Link>
    </form>
  );
};

export default Register;
