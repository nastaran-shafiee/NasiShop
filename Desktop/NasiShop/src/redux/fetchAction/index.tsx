import { instance } from "../../api/contants";
import { Dispatch } from "redux";
import {
  addProducts,
  deleteDataSucces,
  singleProductFunction,
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
    sort, // new parameter for sorting
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
      if (sort) {
        // add sorting parameter to the query URL
        queryUrl += `&_sort=createdAt&_order=desc`;
      }
      const res = await instance.get(queryUrl);
      setTotalPages(Math.ceil(res.headers["x-total-count"] / limit));
      dispatch(addProducts(res.data));
    } catch (error) {
      console.log("error");
    }
  };

// create method-----------------------------------------------------------------------------
export const createData =
  (data: ProductInterface, url: string) => async (dispatch: Dispatch) => {
    try {
      const response = await instance.post(url, data);

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
// function single product------------------------------------------------

export const fetchSingleProduct = (productId: any, url: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await instance.get<ProductInterface>(
        `${url}/${productId}`
      );
      dispatch(singleProductFunction(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
//fetch category----------------------------------------------------------------
export const fetchData2 =
  ({ url, categoryDospatch }: any) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await instance.get(url);

      dispatch(categoryDospatch(res.data));
    } catch (error) {
      console.log("error");
    }
  };
// create data2-----------------------------------------------------------------------------------
export const createData2 =
  (data: ProductInterface, url: string, categoryDospatch: any) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await instance.post(url, data);

      dispatch(categoryDospatch(response.data));
    } catch (error) {
      console.log(error);
    }
  };
// create data---------------------------------------------
export const updateData2 =
  (id: number, data: FormData, url: string, categoryDospatch: any) =>
  async (dispatch: Dispatch) => {
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
