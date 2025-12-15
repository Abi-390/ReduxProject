import { useDispatch } from "react-redux";
import axios from "../../api/axiosconfig";
import { loaduser } from "../userSlice";

export const asyncLoginUser = (user) => async (dispatchEvent, getState) => {
  try {
    const data = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("user", JSON.stringify(data[0]));
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = (user) => async (dispatchEvent, getState) => {
  try {
    localStorage.setItem("user", "");
  } catch (error) {
    console.log(error);
  }
};
export const asyncCurrentUser = (user) => async (dispatchEvent, getState) => {
  
  try {
   const user= JSON.parse(localStorage.getItem("user"));
   if(user) dispatch(loaduser(user))
    else
console.log("User not logged in")
  } catch (error) {
    console.log(error);
  }
};

export const asyncRegisterUser = (user) => async (dispatchEvent, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
