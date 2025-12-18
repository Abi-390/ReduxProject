import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncLogoutUser } from "../store/actions/userActions";

const Nav = () => {
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
  };

  return (
    <nav className="flex items-center justify-center gap-5 font-normal">
      {user ? (
        <>
          <NavLink
            className={(e) => (e.isActive ? "text-rose-500" : "text-gray-900")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-rose-500" : "text-gray-900")}
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-rose-500" : "text-gray-900")}
            to="/admin/create-product"
          >
            Create Product
          </NavLink>
          <button className="text-gray-900 hover:text-gray-500 transition" onClick={logoutHandler}>Logout</button>
        </>
      ) : (
        <>
          <NavLink
            className={(e) => (e.isActive ? "text-rose-500" : "text-gray-900")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-rose-500" : "text-gray-900")}
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "text-rose-500" : "text-gray-900")}
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
