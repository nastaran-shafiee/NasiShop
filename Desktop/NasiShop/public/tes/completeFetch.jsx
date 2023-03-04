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
    fetchDataStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    createDataStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createDataSuccess: (state, action) => {
      state.data.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    createDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateDataStart: (state) => {
      state.isLoading = true;
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
    updateDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteDataStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteDataSuccess: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      state.isLoading = false;
      state.error = null;
    },
    deleteDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  createDataStart,
  createDataSuccess,
  createDataFailure,
  updateDataStart,
  updateDataSuccess,
  updateDataFailure,
  deleteDataStart,
  deleteDataSuccess,
  deleteDataFailure,
} = mySlice.actions;

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await axios.get("/api/data");
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

export const createData = (data) => async (dispatch) => {
  try {
    dispatch(createDataStart());
    const response = await axios.post("/api/data", data);
    dispatch(createDataSuccess(response.data));
  } catch (error) {
    dispatch(createDataFailure(error.message));
  }
};

export const updateData = (id, data) => async (dispatch) => {
  try {
    dispatch(updateDataStart());
    const response = await axios.put(`/api/data/${id}`, data);
    dispatch(updateDataSuccess(response.data));
  } catch (error) {
    dispatch(updateDataFailure(error.message));
  }
};

export const deleteData = (id) => async (dispatch) => {
  try {
    dispatch(deleteDataStart());
    await axios.delete(`/api/data/${id}`);
    dispatch(deleteDataSuccess(id));
  } catch (error) {
    dispatch(deleteDataFailure(error.message));
  }
};

export default mySlice;
