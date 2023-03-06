import { instance } from "../../api/contants";
import { Dispatch } from "redux";
import { addProducts, dataCategory } from "../fetchSlice";
import { fetchDataInterface } from "../../types/interface";
// page url---------------------------------------------------------------------------------------------------------

// actions-----------------------------------------------------------------------------------------------------------
// fetch data products---------------------------------------------------------------------------------------
export const fetchData =
  ({ page, limit, setTotalPages, url }: fetchDataInterface) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await instance.get(`${url}?_limit=${limit}&_page=${page}`);
      setTotalPages(Math.ceil(res.headers["x-total-count"] / limit));
      dispatch(addProducts(res.data));
    } catch (error) {
      console.log("error");
    }
  };
//fetch category----------------------------------------------------------------
export const fetchData2 =
  ({ url }: string) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await instance.get(url);
      dispatch(addProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  };
// category------------------------------------------------------------------
export const fetchCategory =
  ({ page, limit, setTotalPages, url }: fetchDataInterface) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await instance.get(`${url}?_limit=${limit}&_page=${page}`);
      setTotalPages(Math.ceil(res.headers["x-total-count"] / limit));
      dispatch(dataCategory(res.data));
    } catch (error) {
      console.log("error");
    }
  };
