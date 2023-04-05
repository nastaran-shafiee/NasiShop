import WomenHeader from "../../../Layout/womenHeader";
import Products from "../../../components/products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData2 } from "../../../redux/fetchAction";
import { FetchSliceData, ProductInterface } from "../../../types/interface";
import { PRODUCT_URL, WOMEN_URL } from "../../../api/endpoint";
import { instance } from "../../../api/contants";

function WomenPage() {
  const dispatch = useDispatch();
  const data2 = useSelector((state: FetchSliceData) => state.fetchSlice.data);
  const [womenCategory, setwomanCategory] = useState<any>();
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(WOMEN_URL);
        const data = response.data;
        setwomanCategory(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [womenCategory]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(PRODUCT_URL);

        const data = response.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [data]);
  return (
    <>
      <WomenHeader />

      {womenCategory && data && (
        <>
          <Products
            categoryProduct={womenCategory[0].women1}
            data={data
              .filter((product: ProductInterface) => {
                return product.category === womenCategory[0].women1;
              })
              .splice(0, 4)}
            key={"women1"}
          />
          <Products
            categoryProduct={womenCategory[0].women2}
            data={data
              .filter(
                (product: ProductInterface) =>
                  product.category === womenCategory[0].women2
              )
              .splice(0, 4)}
            key={"women2"}
          />
          <Products
            categoryProduct={womenCategory[0].women3}
            data={data
              .filter(
                (product: ProductInterface) =>
                  product.category === womenCategory[0].women3
              )
              .splice(0, 4)}
            key={"women3"}
          />
          <Products
            categoryProduct={womenCategory[0].women4}
            data={data
              .filter(
                (product: ProductInterface) =>
                  product.category === womenCategory[0].women4
              )
              .splice(0, 4)}
            key={"women4"}
          />
        </>
      )}
    </>
  );
}

export default WomenPage;
