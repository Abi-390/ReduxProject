import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Routes, Route } from "react-router";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import AuthWrapper from "./AuthWrapper";
import PageNotFound from "../PageNotFound";


const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AuthWrapper><Products /></AuthWrapper>} />
      <Route path="/cart" element={<AuthWrapper><Cart /></AuthWrapper>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<AuthWrapper><ProductDetails /></AuthWrapper>} />
      <Route path="/admin/create-product" element={<AuthWrapper><CreateProduct /></AuthWrapper>} />
      <Route path="*" element={<PageNotFound />} />
     
    </Routes>
  );
};

export default Mainroutes;
