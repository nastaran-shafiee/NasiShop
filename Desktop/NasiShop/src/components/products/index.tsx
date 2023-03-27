import Product from "../product";
import { ProductInterface } from "../../types/interface";
import { Icon } from "@iconify/react";
interface ProductsProps {
  categoryProduct: string;
  data: ProductInterface[];
}

function Products({ categoryProduct, data }: ProductsProps) {
  return (
    <div className="flex flex-col p-8">
      <div className="flex gap-2">
        <div className="text-2xl text-purple items-center">
          {categoryProduct}
        </div>
        <Icon
          icon="material-symbols:arrow-back-ios"
          width="25"
          height="25"
          className="self-center text-purple"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 ">
        {data &&
          data.map((product: ProductInterface) => {
            return (
              <Product
                name={product.name}
                price={product.price}
                img={`http://localhost:3002${product.image}`}
                key={product.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Products;
