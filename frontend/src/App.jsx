import React, { useEffect } from "react";
import { asyncgetuser } from "./store/userActions";
import { useDispatch, useSelector } from "react-redux";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";

const App = () => {
  const data = useSelector((state) => state);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetuser());
  }, []);
  return (
    <div className="w-screen h-screen bg-gray-800 text-white font-thin p-5">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
