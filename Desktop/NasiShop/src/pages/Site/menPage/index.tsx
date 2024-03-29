import WomenHeader from "../../../Layout/womenHeader";
import Products from "../../../components/products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData2 } from "../../../redux/fetchAction";
import { FetchSliceData, ProductInterface } from "../../../types/interface";
import { MEN_URL, PRODUCT_URL } from "../../../api/endpoint";
import { addMen } from "../../../redux/fetchSlice";
import { instance } from "../../../api/contants";
import MenHeader from "../../../Layout/menHeader";
// men category--------------------------------------------------------------
interface MenCategory {
  men1: number;
  men2: number;
  men3: number;
  men4: number;
}
// men page--------------------------------------------------------------------
function MenPage() {
  const dispatch = useDispatch();
  const data2 = useSelector((state: FetchSliceData) => state.fetchSlice.data);
  const [menCategory, setMenCategory] = useState<MenCategory[]>();
  const [data, setData] = useState<ProductInterface[]>();
  // useeffect-----------------------------------------------------------
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(MEN_URL);
        const data = response.data;
        setMenCategory(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [menCategory]);

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
  // return function------------------------------------------------
  return (
    <>
      <MenHeader />

      {menCategory && data && (
        <>
          <Products
            categoryProduct={menCategory[0].men1}
            data={data
              .filter((product: ProductInterface) => {
                return product.category === menCategory[0].men1;
              })
              .splice(0, 4)}
          />
          <Products
            categoryProduct={menCategory[0].men2}
            data={data
              .filter(
                (product: ProductInterface) =>
                  product.category === menCategory[0].men2
              )
              .splice(0, 4)}
          />
          <Products
            categoryProduct={menCategory[0].men3}
            data={data
              .filter(
                (product: ProductInterface) =>
                  product.category === menCategory[0].men3
              )
              .splice(0, 4)}
          />
          <Products
            categoryProduct={menCategory[0].men4}
            data={data
              .filter(
                (product: ProductInterface) =>
                  product.category === menCategory[0].men4
              )
              .splice(0, 4)}
          />
        </>
      )}
    </>
  );
}

export default MenPage;
