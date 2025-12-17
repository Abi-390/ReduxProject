import axios from "../../api/axiosconfig";
import { loaduser } from "../userSlice";


export const asyncLoginUser = (user) => async (dispatch) => {
  try {
    const email = user.email?.trim();
    const password = user.password?.trim();

   
    if (!email || !password) {
      console.log("Email and password are required");
      return;
    }
    const res = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    if (res.data.length === 0) {
      console.log("Invalid credentials");
      return;
    }

    localStorage.setItem("user", JSON.stringify(res.data[0]));
    dispatch(loaduser(res.data[0]));
    console.log("User logged in");
  } catch (error) {
    console.log(error);
  }
};


export const asyncLogoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(loaduser(null));
  } catch (error) {
    console.log(error);
  }
};


export const asyncCurrentUser = () => async (dispatch) => {
  try {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      console.log("User not logged in");
      return;
    }

    const user = JSON.parse(storedUser);
    dispatch(loaduser(user));
  } catch (error) {
    console.log("Corrupted user data, clearing storage");
    localStorage.removeItem("user");
  }
};


export const asyncRegisterUser = (user) => async () => {
  try {
    const res = await axios.post("/users", user);
    console.log("User registered", res.data);
  } catch (error) {
    console.log(error);
  }
};
