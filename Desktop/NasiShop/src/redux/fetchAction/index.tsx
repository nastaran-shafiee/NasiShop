import { instance } from "../../api/contants";
import { Dispatch } from "redux";
import { addProducts, dataCategory } from "../fetchSlice";
import { fetchDataInterface } from "../../types/interface";
import { createDataSuccess } from "../fetchSlice";
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

// create method-----------------------------------------------------------------------------
export const createData = (data, url) => async (dispatch: Dispatch) => {
  try {
    const response = await instance.post(url, data);
    dispatch(createDataSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};
