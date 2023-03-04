import Product from "../product";

function Products() {
  return (
    <>
      <div className="flex flex-col gap-4 mt-4 p-4 border-box">
        <p className="text-3xl">نام محصول</p>
        <div className="w-full grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
}
export default Products;
