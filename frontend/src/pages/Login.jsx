import { useForm } from "react-hook-form";
import { Link } from "react-router";
const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const loginHandler = (user) => {
    console.log("login data", user);
  };

  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="flex items-center justify-center flex-col mt-5"
    >
      <input
        className="border-b-2 outline-0 mb-5"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      <input
        className="border-b-2 outline-0 mb-5"
        type="password"
        placeholder="password"
        {...register("password")}
      />
      <button className="px-4 py-1 rounded bg-gray-400 text-white font-bold mt-3">
        Submit
      </button>
      <p className="mt-4">Don't have an account?</p>
      <Link className="mt-2 text-red-400" to="/register">
        Register
      </Link>
    </form>
  );
};

export default Login;
