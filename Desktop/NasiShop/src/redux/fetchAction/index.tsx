import { instance } from "../../api/contants";
import { Dispatch } from "redux";
import {
  addProducts,
  deleteDataSucces,
  updateDataSuccess,
} from "../fetchSlice";
import { fetchDataInterface, ProductInterface } from "../../types/interface";
import { createDataSuccess } from "../fetchSlice";
import { PRODUCT_URL } from "../../api/endpoint";

// page url---------------------------------------------------------------------------------------------------------

export const fetchData =
  ({
    page,
    limit,
    setTotalPages,
    url,
    category,
    delivered,
  }: fetchDataInterface) =>
  async (dispatch: Dispatch) => {
    try {
      let queryUrl = `${url}?_limit=${limit}&_page=${page}`;
      if (category) {
        queryUrl += `&category=${category}`;
      }
      if (delivered !== undefined) {
        queryUrl += `&delivered=${delivered}`;
      }
      const res = await instance.get(queryUrl);
      setTotalPages(Math.ceil(res.headers["x-total-count"] / limit));
      dispatch(addProducts(res.data));
    } catch (error) {
      console.log("error");
    }
  };
//fetch category----------------------------------------------------------------
export const fetchData2 =
  ({ url }: any) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await instance.get(url);
      dispatch(addProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  };

// create method-----------------------------------------------------------------------------
export const createData =
  (data: ProductInterface, url: string) => async (dispatch: Dispatch) => {
    try {
      const response = await instance.post(url, data);
      console.log(data);
      dispatch(createDataSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
//delelte date------------------------------------------------------------------------------
export const deleteData = (id: number) => async (dispatch: Dispatch) => {
  try {
    await instance.delete(`${PRODUCT_URL}/${id}`);
    dispatch(deleteDataSucces(id));
  } catch (error) {
    console.log(error);
  }
};
// update data-----------------------------------------------------------------------------------

export const updateData =
  (id: number, data: FormData, url: string) => async (dispatch: Dispatch) => {
    try {
      const response = await instance.patch(`${url}/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
      dispatch(updateDataSuccess({ id: id, data: response.data }));
    } catch (error) {
      console.log(error);
    }
  };
