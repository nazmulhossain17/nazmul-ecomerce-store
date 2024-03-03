import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAppDispatch } from "../../redux/hook";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/user/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.error("Fetch error:", error.message);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen bg-white sm:py-12">
      <div className="p-10 mx-auto xs:p-0 md:w-full md:max-w-md">
        <h1 className="mb-5 text-2xl font-bold text-center">Login</h1>
        <div className="w-full bg-white divide-y divide-gray-200 rounded-lg shadow-2xl">
          <div className="px-5 py-7">
            <form onSubmit={handleSubmit}>
              <label className="block pb-1 text-sm font-semibold text-gray-600">
                E-mail
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="block pb-1 text-sm font-semibold text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-1 mb-5 text-sm border rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Login</span>
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
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="px-5 py-4 mx-5 text-sm font-normal text-gray-500 transition duration-200 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline-block w-4 h-4 align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              <Link
                to="/register"
                className="px-5 py-4 mx-5 text-sm font-normal text-gray-500 transition duration-200 rounded-lg cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
              >
                <span className="inline-block ml-1">
                  Don't have an account? Register
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
