
import axios from "../../api/axiosconfig";
import { loadcart } from "../reducers/cartSlice";


export const asyncLoadCart = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/cart");
    dispatch(loadcart(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateCart = (cart) => async (dispatch, getState) => {
  try {
    await axios.post("/cart", cart);
    dispatch(asyncLoadCart());
  } catch (error) {
    console.log("Failed to create product",error);
    
  }
};

export const asyncDeleteCart = (id) => async (dispatch, getState) => {
  
  try {
    await axios.delete("/cart/"+id);
    dispatch(asyncLoadCart());
   
  } catch (error) {
    console.log("Product update error",error);
   
  }
};

