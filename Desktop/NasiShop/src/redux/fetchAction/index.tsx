import axios from "axios";
import { Dispatch } from "redux";
import { addProducts } from "../fetchSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataInterface } from "../../types/interface";
// page url---------------------------------------------------------------------------------------------------------

// actions-----------------------------------------------------------------------------------------------------------
// fetch data products---------------------------------------------------------------------------------------
export const fetchData =
  ({ page, limit, setTotalPages, url }: fetchDataInterface) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`${url}?_limit=${limit}&_page=${page}`);
      setTotalPages(Math.ceil(res.headers["x-total-count"] / limit));
      dispatch(addProducts(res.data));
    } catch (error) {
      console.log("error");
    }
  };
//
