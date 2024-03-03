import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.user) {
        console.log("Registration successful");
        toast.success("Account created successful");
        setLoading(false);
        navigate("/login");
      } else {
        // Registration failed, handle the error
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen bg-white sm:py-12">
        <div className="p-10 mx-auto xs:p-0 md:w-full md:max-w-md">
          <h1 className="mb-5 text-2xl font-bold text-center">
            Create Account
          </h1>
          <div className="w-full bg-white divide-y divide-gray-200 rounded-lg shadow-2xl">
            <div className="px-5 py-7">
              <form onSubmit={handleSubmit(handleRegister)}>
                <label className="block pb-1 text-sm font-semibold text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg"
                  required
                />
                <label className="block pb-1 text-sm font-semibold text-gray-600">
                  E-mail
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg"
                  required
                />
                <label className="block pb-1 text-sm font-semibold text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  {...register("address")}
                  className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg"
                  required
                />
                <label className="block pb-1 text-sm font-semibold text-gray-600">
                  Number
                </label>
                <input
                  type="number"
                  {...register("number")}
                  className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg"
                />
                <label className="block pb-1 text-sm font-semibold text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="transition duration-200 bg-green-500 hover:bg-green-600 focus:bg-lime-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">
                    {loading ? "Creating Account..." : "Create Account"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline-block w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <Link
                  to="/login"
                  className="px-5 py-4 mx-5 text-sm font-normal text-gray-500 transition duration-200 rounded-lg cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                >
                  <span className="inline-block ml-1">
                    Already have an account? Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
