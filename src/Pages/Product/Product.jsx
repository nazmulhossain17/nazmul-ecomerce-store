import { useEffect, useState } from "react";
import Products from "./Products";

const Product = () => {
  const [demo, setDemo] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setDemo(data));
  }, []);
  return (
    <>
      <div className="md:px-14 px-4 py-14 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-3xl mb-2">All Products</h2>
        </div>
      </div>
      <div className="shop-container gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 space-x-1">
          {demo.map((item) => (
            <Products key={item.id} demo={item} />
          ))}
        </div>
        <div className="cart-container max-w-sm rounded shadow-lg">
          <h3>Cart Summary</h3>
        </div>
      </div>
    </>
  );
};

export default Product;
