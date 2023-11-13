import { useEffect, useState } from "react";
import FeaturesDemo from "./FeaturesDemo";

const FeaturedSection = () => {
  const [demo, setDemo] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setDemo(data));
  }, []); // Adding an empty dependency array to run the effect only once

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-3xl mb-2">Featured Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 space-x-1">
        {demo.map(
          (
            demo // Changed 'demos' to 'demo' for singular clarity
          ) => (
            <FeaturesDemo key={demo.id} demo={demo} />
          )
        )}
      </div>
    </div>
  );
};

export default FeaturedSection;
