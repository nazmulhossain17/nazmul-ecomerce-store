import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { addToCart } from "../../redux/features/cart/cartSlice";

const FeaturesDemo = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    dispatch(addToCart(product));
    toast({
      description: "Product Added",
    });
  };

  return (
    <>
      <div>
        <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
          <Link to={`/product-details/${product._id}`} className="w-full">
            <img src={product?.image} alt="product" />
            <h1 className="text-xl font-semibold">{product?.name}</h1>
          </Link>
          <p>Rating: {product?.rating || "N/A"}</p>
          <p className="text-sm">
            Availability: {product?.status ? "In stock" : "Out of stock"}
          </p>
          <p className="text-2xl">Price: ${product?.price}</p>
          {/* <button
            onClick={() => handleAddProduct(product)}
            className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          >
            Add to cart
          </button> */}
        </div>
      </div>
    </>
  );
};

FeaturesDemo.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    status: PropTypes.bool,
    price: PropTypes.number,
  }).isRequired,
};

export default FeaturesDemo;
