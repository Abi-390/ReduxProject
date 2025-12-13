import axios from "../api/axiosconfig";
import { loaduser } from "./userSlice";

export const asyncgetuser = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/users");
    console.log("current state>>",getState());
    dispatch(loaduser(res.data));
  } catch (error) {
    console.log(error);
  }
};
