import { instance } from "../../api/contants";
import { Dispatch } from "redux";
import { addProducts } from "../fetchSlice";
import { fetchDataInterface, ProductInterface } from "../../types/interface";
import { createDataSuccess } from "../fetchSlice";
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
      dispatch(createDataSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
