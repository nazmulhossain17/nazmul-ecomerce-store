import { useEffect, useState } from "react";
import Products from "./Products";

const Product = () => {
  const [demo, setDemo] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setDemo(data));
  }, []);

  const handleAddToCart = (demo) => {
    console.log(demo);
    const newCart = [...cart, demo];
    setCart(newCart);
  };
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
            <Products
              key={item.id}
              demo={item}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="cart-container max-w-sm rounded shadow-lg h-32 w-200">
          <div className="p-5 mt-3">
            <h3>Cart Summary</h3>
            <p>Selected items {cart.length}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
