import {
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";
import {
  FetchSliceInterface,
  InitialStateInterface,
  Product,
} from "../../types/interface";

interface FetchSliceInterface2
  extends Slice<
    InitialStateInterface,
    SliceCaseReducers<InitialStateInterface>,
    "fetchProducts"
  > {}
// inintial interface-----------------------------------------------
const initialState: InitialStateInterface = {
  data: [],
  data2: [],
  addModal: false,
  deleteModal: false,
  id: 0,
  editProduct: {},
  editMode: false,
  menCategory: {},
  womanCategory: {},
  singleProduct: {},
  orderMode: false,
  orderID: 0,
  Cart: 0,
  mode2: 0,
};
// redusers-------------------------------------------------
const FetchSlice: FetchSliceInterface2 = createSlice({
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
      const updatedData: any = [...state.data]; // create a new copy of the array
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

    addWomen(state, action) {
      state.womanCategory = action.payload;
    },
    editMen: (state, action) => {
      const index = state.menCategory.findIndex(
        (item: any) => item.id === action.payload.id
      );
      const updatedData = [...state.menCategory]; // create a new copy of the array
      updatedData[index] = action.payload.data; // update the item at the specified index
      return { ...state, data: updatedData };
    },
    editWoman: (state, action) => {
      const index = state.womanCategory.findIndex(
        (item: any) => item.id === action.payload.id
      );
      const updatedData = [...state.womanCategory]; // create a new copy of the array
      updatedData[index] = action.payload.data; // update the item at the specified index
      return { ...state, data: updatedData };
    },
    singleProductFunction(state, action) {
      state.singleProduct = action.payload;
    },

    orderModeFunction(state, action) {
      state.orderMode = action.payload.mode;
      state.orderID = action.payload.id;
    },
    cartChange(state, action) {
      state.Cart = state.Cart + action.payload;
      let number = localStorage.getItem("Number")!;

      if (number) {
        number = Number(number) + action.payload;
      } else {
        number = action.payload;
      }

      localStorage.setItem("Number", number.toString());
    },
    cartchange2(state, action) {
      state.Cart = state.Cart - action.payload;
      localStorage.setItem("Number", state.Cart.toString());
    },
    ChangeMode2(state, action) {
      const updatedMode2 = state.mode2 + action.payload;
      return { ...state, mode2: updatedMode2 };
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
  singleProductFunction,
  orderModeFunction,
  cartChange,
  cartchange2,
  ChangeMode2,
} = FetchSlice.actions;
export default FetchSlice.reducer;
