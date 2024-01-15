import { useEffect, useState } from "react";
import Products from "./Products";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  setPriceRange,
  toggleState,
} from "../../redux/features/products/productSlice";
import { useGetProductsQuery } from "../../redux/api/apiSlice";

const Product = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const dispatch = useAppDispatch();
  const { priceRange, status } = useAppSelector((state) => state.product);

  // Step 1: Add state for search query
  const [searchQuery, setSearchQuery] = useState("");

  const handleSlider = (e) => {
    dispatch(setPriceRange(Number(e.target.value)));
  };

  let productsData;

  if (!isLoading) {
    // Step 2: Update filter logic based on search query
    productsData = data?.map((item) => ({
      ...item,
      // imageUrl: `http://localhost:5173/images/${item.image}`,
    }));
    if (status) {
      productsData = productsData?.filter(
        (item) =>
          item.status === true &&
          item.price <= priceRange &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
      );
    } else if (priceRange > 0) {
      productsData = productsData?.filter(
        (item) =>
          item.price <= priceRange &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto relative">
        <div className="bg-slate-100 md:bg-white md:col-span-3 z-0 mr-19 mt-4 space-y-5 border border-gray-200/80 p-7 self-start sticky top-16 h-[calc(40vh-80px)]">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
            </div>
          </form>

          <div className="space-y-3">
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

        <div className="col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
          {!isLoading && productsData ? (
            productsData
              .filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((product) => <Products product={product} key={product.id} />)
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
