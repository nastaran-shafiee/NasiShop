import { configureStore } from "@reduxjs/toolkit";
import fetchProductsReducer from "../fetchSlice";
const store = configureStore({
  reducer: {
    fetchSlice: fetchProductsReducer,
  },
});
export default store;
