// import Product from "../Product/Product";

// const product = {
//   name: "iphone 12",
//   price: "1500",
//   img: [
//     {
//       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq9VDq-nO7LPivGObxZ21_h5Rgvw9AUW-qtQxV20NaB02JQj63u0niFFwzAui_XPrujzY&usqp=CAU",
//     },
//   ],
//   _id: "sam",
// };

const FeaturedSection = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-3xl mb-2">Featured Products</h2>
        {/* <Product product={product} /> */}
      </div>
    </div>
  );
};

export default FeaturedSection;
