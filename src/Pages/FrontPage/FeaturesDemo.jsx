import PropTypes from "prop-types";

const FeaturesDemo = ({ demo }) => {
  const { category, image, price, description } = demo;

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full" src={image} alt="product" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{category}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-900 text-base">Price: ${price}</p>
      </div>
    </div>
  );
};

FeaturesDemo.propTypes = {
  demo: PropTypes.shape({
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturesDemo;
