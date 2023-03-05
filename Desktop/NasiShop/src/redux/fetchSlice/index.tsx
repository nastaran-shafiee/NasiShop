import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialstateInterface } from "../../types/interface";

const initialState: initialstateInterface = {
  data: [],
};

const FetchSlice = createSlice({
  name: "fetchProducts",
  initialState: initialState,
  reducers: {
    addProducts(state, action) {
      state.data = action.payload;
    },
  },
});

export const { addProducts } = FetchSlice.actions;
export default FetchSlice.reducer;
