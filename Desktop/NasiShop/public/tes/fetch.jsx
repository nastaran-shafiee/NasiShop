import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const mySlice = createSlice({
  name: "myData",
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    createDataSuccess: (state, action) => {
      state.data.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    updateDataSuccess: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index] = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    deleteDataSuccess: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  fetchDataSuccess,
  createDataSuccess,
  updateDataSuccess,
  deleteDataSuccess,
} = mySlice.actions;

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/data");
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const createData = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/api/data", data);
    dispatch(createDataSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const updateData = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/data/${id}`, data);
    dispatch(updateDataSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/data/${id}`);
    dispatch(deleteDataSuccess(id));
  } catch (error) {
    console.log(error);
  }
};

export default mySlice.reducer;
