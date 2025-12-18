import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { asyncCurrentUser } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, []);

  return (
    <div className="w-full
  min-h-screen
  bg-white
  text-gray-900
  font-thin
  p-4
  sm:p-6">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
