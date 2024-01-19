import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CreateProduct = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/create-product",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.data.user) {
        console.log("Product created successful");
        toast.success("Product created successful");
        setLoading(false);
        // navigate("/login");
      } else {
        // Registration failed, handle the error
        console.error("failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="max-w-2xl w-full p-4">
          <h1 className="text-3xl font-semibold mb-4">Create Product</h1>
          <form
            className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="lg:col-span-5">
              <label htmlFor="product_name">Product Name</label>
              <input
                type="text"
                name="product_name"
                id="product_name"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                {...register("name")}
              />
            </div>
            <div className="lg:col-span-5">
              <label htmlFor="image_url">Image URL</label>
              <input
                type="text"
                name="image_url"
                id="image_url"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                {...register("image")}
              />
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                {...register("category")}
              />
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                {...register("price")}
              />
            </div>
            <div className="lg:col-span-5">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="h-20 border mt-1 rounded px-4 w-full bg-gray-50 resize-none"
                {...register("description")}
              ></textarea>
            </div>
            <div className="lg:col-span-5">
              <button
                type="submit"
                disabled={loading}
                className={`transition duration-200 bg-green-500 hover:bg-green-600 focus:bg-lime-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-flex items-center justify-center ${
                  loading ? "cursor-not-allowed opacity-75" : ""
                }`}
              >
                {loading && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V1.01a10 10 0 00-8 16.792"
                    ></path>
                  </svg>
                )}
                <span>
                  {loading ? "Creating Product..." : "Create Product"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
