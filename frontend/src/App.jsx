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
    <div className="w-screen h-screen bg-gray-800 text-white font-thin p-5">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
