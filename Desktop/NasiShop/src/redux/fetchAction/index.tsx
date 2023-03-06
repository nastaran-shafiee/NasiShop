import { instance } from "../../api/contants";
import { Dispatch } from "redux";
import { addProducts } from "../fetchSlice";
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
//
