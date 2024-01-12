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
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {product && (
        <div className="flex flex-col md:flex-row items-center md:space-x-8 border-b border-gray-300">
          <div className="w-full md:w-1/2">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full h-auto md:h-full md:w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 space-y-3">
            <h1 className="text-3xl font-semibold">{product?.name}</h1>
            <p className="text-xl">Rating: {product?.rating}</p>
            <ul className="space-y-1 text-lg">
              {product?.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={() => handleAddProduct(product)}
              className="px-6 py-2 mt-4 md:mt-6 transition ease-in duration-200 uppercase rounded-2xl hover:bg-purple-800 hover:text-white border-2 border-purple-900 focus:outline-none"
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
