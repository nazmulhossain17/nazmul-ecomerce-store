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
        "https://nazmul-ecomerce-server-1wnx.vercel.app/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.data.user) {
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
      <div className="min-h-screen bg-white flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">
            Create Account
          </h1>
          <div className="bg-white shadow-2xl w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <form onSubmit={handleSubmit(handleRegister)}>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  required
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  E-mail
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  required
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Address
                </label>
                <input
                  type="text"
                  {...register("address")}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  required
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Number
                </label>
                <input
                  type="number"
                  {...register("number")}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
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
                    className="w-4 h-4 inline-block"
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
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
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
