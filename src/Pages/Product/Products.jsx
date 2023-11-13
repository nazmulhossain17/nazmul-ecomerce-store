import React from "react";
import PropTypes from "prop-types";

const Products = ({ demo }) => {
  const { category, name, img, price } = demo;
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full" src={img} alt="product" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{category}</p>
        <div>
          {/* <ReactStars {...options} /> */}
          <span>(256 Reviews)</span>
        </div>
        <p className="text-gray-900 text-base">Price: ${price}</p>
        <button className="mb-2 block w-full rounded bg-purple-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg dark:shadow-lg dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg">
          Buy
        </button>
      </div>
    </div>
  );
};

Products.propTypes = {
  demo: PropTypes.shape({
    category: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    // Add other necessary prop types for demo object properties
  }).isRequired,
};

export default Products;
