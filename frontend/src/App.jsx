import React, { useEffect } from "react";
import { asyncgetuser } from "./store/userActions";
import { useDispatch, useSelector } from "react-redux";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { asyncCurrentUser } from "./store/actions/userActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
  
   dispatch(
    asyncCurrentUser())
  },[])
  
  return (
    <div className="w-screen h-screen bg-gray-800 text-white font-thin p-5">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
