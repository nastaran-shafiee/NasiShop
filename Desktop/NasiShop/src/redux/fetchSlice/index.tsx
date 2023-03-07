import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  FetchSliceInterface,
  initialstateInterface,
} from "../../types/interface";

const initialState: initialstateInterface = {
  data: [],
  data2: [],

  addModal: false,
};

const FetchSlice: FetchSliceInterface = createSlice({
  name: "fetchProducts",
  initialState: initialState,
  reducers: {
    addProducts(state, action) {
      state.data = action.payload;
    },

    changeAddMod(state, action) {
      state.addModal = action.payload;
    },
    createDataSuccess: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addProducts, changeAddMod, createDataSuccess } =
  FetchSlice.actions;
export default FetchSlice.reducer;
