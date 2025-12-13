import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice.jsx";
import cartSlice from "./reducers/cartSlice.jsx";
import productSlice from "./reducers/productSlice.jsx";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    cartReducer: cartSlice,
    productReducer: productSlice,
  },
});
