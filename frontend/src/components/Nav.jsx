import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Nav = () => {
  const user = useSelector((state) => state.user.users);
  /*useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);*/

  return (
    <nav className="flex items-center justify-center gap-5">
      {user ? (
        <>
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
            to="/admin/create-product"
          >
            Create Product
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className={(e) => (e.isActive ? "text-pink-300" : "text-white")}
            to="/login"
          >
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
