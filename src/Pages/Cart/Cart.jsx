import { Link } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Cart = () => {
  const { products, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="my-8">
        <div className="text-center my-8">
          <h2 className="text-3xl mb-2">Added Products</h2>
        </div>

        <div>
          {products.map((product) => (
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={product._id}
            >
              <div className="border-r pr-5 shrink-0">
                <img src={product.image} alt="" className="h-full" />
              </div>
              <div className="px-2 w-full flex flex-col gap-3">
                <h1 className="text-2xl self-center">{product.name}</h1>
                <p>Quantity: {product.quantity || 0}</p>
                <p className="text-xl">
                  Total Price:{" "}
                  {(product.price * (product.quantity || 0)).toFixed(2)} $
                </p>
              </div>
              <div className="border-l pl-5 flex flex-col justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white"
                  onClick={() => dispatch(addToCart(product))}
                >
                  +
                </button>
                <button onClick={() => dispatch(removeOne(product))}>-</button>
                <button
                  onClick={() => dispatch(removeFromCart(product))}
                  className="bg-red-500 hover:bg-red-400"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            Total Price{" "}
            <span className="text-2xl font-semibold text-gray-900">
              ${total.toFixed(2)}
            </span>
          </h1>
        </div>

        <Link
          className="mt-4 inline-flex w-full items-center justify-center rounded bg-purple-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
          to="/checkout"
        >
          Checkout
        </Link>
      </div>
    </>
  );
};

export default Cart;
