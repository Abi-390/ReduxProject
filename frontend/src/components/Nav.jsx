import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="flex items-center justify-center gap-5 px-[5%] mb-10">
      <NavLink
        className={(e) => (e.isActive ? "text-pink-300" : "text-white")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-pink-300" : "text-white")}
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-pink-300" : "text-white")}
        to="/cart"
      >
        Cart
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-pink-300" : "text-white")}
        to="/login"
      >
        Login
      </NavLink>
     
    </nav>
  );
};

export default Nav;
