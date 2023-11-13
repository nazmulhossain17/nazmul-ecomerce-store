import { useEffect, useState } from "react";
import FeaturesDemo from "./FeaturesDemo";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((fetchedData) => {
        // Limit the fetched data to 12 items
        setData(fetchedData.slice(0, 12));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-3xl mb-2">Featured Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 space-x-1">
        {data.map((item) => (
          <FeaturesDemo key={item.id} data={item} />
        ))}
      </div>
      <div className="text-center p-2">
        <Link
          to="/product"
          className="bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold py-2 px-4 rounded mt-4 inline-block "
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
