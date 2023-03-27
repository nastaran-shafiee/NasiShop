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
  deleteModal: false,
  id: 0,
  editProduct: {},
  editMode: false,
  menCategory: {},
  womanCategory: {},
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
    deleteDataSucces(state, action) {
      state.data = state.data.filter((item: any) => item.id !== action.payload);
    },
    openDeleteModal(state, action) {
      state.deleteModal = action.payload;
    },
    getId(state, action) {
      state.id = action.payload;
    },
    updateDataSuccess: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedData = [...state.data]; // create a new copy of the array
      updatedData[index] = action.payload.data; // update the item at the specified index
      return { ...state, data: updatedData };
    },
    editMode(state, action) {
      state.editMode = action.payload.mode;
      state.editProduct = action.payload.item;
    },
    setFetchData(state, action) {
      state.data = action.payload;
    },
    // forctegory-------------------------------------------------------------------------------
    addMen(state, action) {
      state.menCategory = action.payload;
    },
    addMen2(state, action) {
      state.menCategory = action.payload;
    },
    addWomen(state, action) {
      state.womanCategory = action.payload;
    },
    editMen: (state, action) => {
      const index = state.menCategory.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedData = [...state.menCategory]; // create a new copy of the array
      updatedData[index] = action.payload.data; // update the item at the specified index
      return { ...state, data: updatedData };
    },
    editWoman: (state, action) => {
      const index = state.womanCategory.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedData = [...state.womanCategory]; // create a new copy of the array
      updatedData[index] = action.payload.data; // update the item at the specified index
      return { ...state, data: updatedData };
    },
  },
});

export const {
  addProducts,
  changeAddMod,
  createDataSuccess,
  deleteDataSucces,
  openDeleteModal,
  getId,
  updateDataSuccess,
  editMode,
  setFetchData,
  addMen,
  addWomen,
  editMen,
  editWoman,
  addMen2,
} = FetchSlice.actions;
export default FetchSlice.reducer;
