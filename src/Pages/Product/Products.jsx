import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/features/cart/cartSlice";
import toast from "react-hot-toast";

const Products = ({ product }) => {
  const dispatch = useAppDispatch();
  const handleAddProduct = (product) => {
    dispatch(addToCart(product));
    toast.success("Product Added!");
  };

  return (
    <>
      <div>
        <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2 mb-3">
          <Link to={`/product-details/${product.id}`} className="w-full">
            <img src={product?.image} alt="product" />
            <h1 className="text-xl font-semibold">{product?.name}</h1>
          </Link>
          <p>Rating: {product?.rating}</p>
          <p className="text-sm">
            Availability: {product?.status ? "In stock" : "Out of stock"}
          </p>
          <p className="text-sm">Price: ${product?.price}</p>
          <button
            onClick={() => handleAddProduct(product)}
            className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

Products.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    status: PropTypes.bool,
    price: PropTypes.number,
  }).isRequired,
  handleAddProduct: PropTypes.func.isRequired,
};

export default Products;
