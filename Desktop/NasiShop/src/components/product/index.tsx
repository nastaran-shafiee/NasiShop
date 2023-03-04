import shoe from "../../../public/img/shoe.webp";
function Product() {
  return (
    <>
      <div className="mt-4">
        <img src={shoe} alt="" className="w-60" />
        <p>آدیداس</p>
        <p> 100000تومان</p>
      </div>
    </>
  );
}
export default Product;
