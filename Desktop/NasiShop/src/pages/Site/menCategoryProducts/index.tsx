import Slogan from "../../../components/Slogan";
import Sorting from "../../../components/sorting";
import { usePagination } from "../../../hooks/pagination";
import { useDispatch, useSelector } from "react-redux";
import { FetchSliceData } from "../../../types/interface";
import { useEffect } from "react";
import { fetchData } from "../../../redux/fetchAction";
import { PRODUCT_URL } from "../../../api/endpoint";
import Product from "../../../components/product";

import { useNavigate, useParams } from "react-router-dom";
import MenHeader from "../../../Layout/menHeader";

function MenCategoryProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state: FetchSliceData) => state.fetchSlice.data);
  const { currentPage, rowsPerPage, setTotalPages, renderPaginationButtons } =
    usePagination(1, 4);
  const text = useParams();

  const categoryName = text.name?.substring(1);
  // );
  useEffect(() => {
    dispatch(
      fetchData({
        page: currentPage,
        limit: rowsPerPage,
        setTotalPages: setTotalPages,
        url: PRODUCT_URL,
        category: categoryName,
        sort: "-createdAt",
      })
    );
  }, [dispatch, currentPage, rowsPerPage, data]);

  return (
    <>
      <MenHeader />
      <div>
        <Slogan header="طراحی زنانه نسی شاپ" />
        <div className="w-full flex justify-center">
          <Sorting />
        </div>
        <div className=" flex flex-col items-center my-4">
          <div className="w-[90%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data &&
              data.map((item: any) => {
                return (
                  <Product
                    name={item.name}
                    price={item.price}
                    img={`http://localhost:3002${item.image}`}
                    key={item.id}
                    onClick={() => {
                      navigate(`/product/:${item.id}`);
                    }}
                  />
                );
              })}
          </div>
          <div className="my-8">{renderPaginationButtons()}</div>
        </div>
      </div>
    </>
  );
}
export default MenCategoryProducts;
