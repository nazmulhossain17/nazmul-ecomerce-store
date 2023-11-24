import React from "react";
import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../../redux/api/apiSlice";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/features/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: product, isLoading, error } = useSingleProductQuery(id);
  const dispatch = useAppDispatch();

  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
    toast.success("Product Added!");
  };
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={product?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>
          <ul className="space-y-1 text-lg">
            {product?.features?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <button
            onClick={() => handleAddProduct(product)}
            className="px-6 py-2 transition ease-in duration-200 uppercase rounded-2xl hover:bg-purple-800 hover:text-white border-2 border-purple-900 focus:outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
      {/* // <ProductReview /> */}
    </>
  );
};

export default ProductDetails;
