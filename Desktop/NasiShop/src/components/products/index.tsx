import Product from "../product";
import { ProductInterface } from "../../types/interface";
import { Icon } from "@iconify/react";
import { NavLink, useNavigate } from "react-router-dom";

interface ProductsProps {
  categoryProduct: string;
  data: ProductInterface[];
}

function Products({ categoryProduct, data }: ProductsProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-8">
      <div className="flex gap-2">
        <div className="text-2xl text-purple items-center">
          <NavLink to={`:${categoryProduct}`} className="landing">
            {categoryProduct}
          </NavLink>
        </div>
        <NavLink to={`:${categoryProduct}`} className="self-center">
          <Icon
            icon="material-symbols:arrow-back-ios"
            width="25"
            height="25"
            className=" text-purple"
          />
        </NavLink>
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
                id1={product.id}
                quntity={product.quantity}
                onClick={() => {
                  navigate(`/product/:${product.id}`);
                }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Products;
