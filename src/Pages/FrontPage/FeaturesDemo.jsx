import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: true,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};

const FeaturesDemo = ({ data }) => {
  const { category, img, price, description } = data;

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full" src={img} alt="product" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{category}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div>
          <ReactStars {...options} />
          <span>(256 Reviews)</span>
        </div>
        <p className="text-gray-900 text-base">Price: ${price}</p>
      </div>
    </div>
  );
};

FeaturesDemo.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturesDemo;