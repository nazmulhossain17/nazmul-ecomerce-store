import { useEffect, useState } from "react";
import Products from "./Products";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  setPriceRange,
  toggleState,
} from "../../redux/features/products/productSlice";
import { useGetProductsQuery } from "../../redux/api/apiSlice";

const Product = () => {
  // const [data, setData] = useState([]);
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/v1/products")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const { data, isLoading } = useGetProductsQuery(undefined);
  const dispatch = useAppDispatch();
  const { priceRange, status } = useAppSelector((state) => state.product);

  const handleSlider = (e) => {
    dispatch(setPriceRange(Number(e.target.value)));
  };

  let productsData;

  if (!isLoading) {
    productsData = data?.map((item) => ({
      ...item,
      // imageUrl: `http://localhost:5173/images/${item.image}`,
    }));
    if (status) {
      productsData = productsData?.filter(
        (item) => item.status === true && item.price <= priceRange
      );
    } else if (priceRange > 0) {
      productsData = productsData?.filter((item) => item.price <= priceRange);
    }
  }

  return (
    <>
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
        <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
          <div>
            <h1 className="text-2xl uppercase">Availability</h1>
            <div
              className="flex items-center space-x-2 mt-3"
              onClick={() => dispatch(toggleState())}
            >
              {/* <switch id="in-stock" /> */}
              {/* <label htmlFor="in-stock">In stock</label> */}
              <label
                htmlFor="in-stock"
                className="relative inline-flex items-center cursor-pointer"
              >
                <input
                  id="in-stock"
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div className="space-y-3 ">
            <h1 className="text-2xl uppercase">Price Range</h1>
            <div className="max-w-xl">
              <input
                type="range"
                defaultValue={350}
                max={1000}
                min={0}
                step={1}
                onChange={handleSlider}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
            </div>
            <div>From 0$ To {priceRange}$</div>
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
          {!isLoading && productsData ? (
            productsData.map((product) => (
              <Products product={product} key={product.id} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
