import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FetchSliceInterface,
  initialstateInterface,
} from "../../types/interface";

const initialState: initialstateInterface = {
  data: [],
  data2: [],
  category: [],
  addModal: false,
};

const FetchSlice: FetchSliceInterface = createSlice({
  name: "fetchProducts",
  initialState: initialState,
  reducers: {
    addProducts(state, action) {
      state.data = action.payload;
    },
    dataCategory(state, action) {
      state.category = action.payload;
    },
    changeAddMod(state, action) {
      state.addModal = action.payload;
    },
  },
});

export const { addProducts, dataCategory, changeAddMod } = FetchSlice.actions;
export default FetchSlice.reducer;
