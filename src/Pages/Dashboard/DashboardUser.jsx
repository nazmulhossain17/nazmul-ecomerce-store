import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import About from "../About/About";

const DashboardUser = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const userId = currentUser?.user?.id;
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/own-product/${userId}`
        );

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        console.log(data.products);
        setData(data.products);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle error or set appropriate state indicating an error.
      }
    }

    // Call the function only when userId is available
    if (userId) {
      getData();
    }
  }, [userId]);
 
  return (
    <>
      <main className="w-full">
        <div className="grid w-full px-8 pb-10 mx-4 mb-4 bg-gray-100 border-4 border-green-400 rounded-3xl">
          <div className="grid grid-cols-12 gap-6">
            <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
              <div className="col-span-12 mt-8">
                <div className="flex items-center h-10 intro-y">
                  <h2 className="mr-5 text-lg font-medium truncate">
                    Dashboard
                  </h2>
                </div>
                <div className="grid grid-cols-12 gap-6 mt-5">
                  <a
                    className="col-span-12 transition duration-300 transform bg-white rounded-lg shadow-xl hover:scale-105 sm:col-span-6 xl:col-span-3 intro-y"
                    href="#"
                  >
                    <div className="p-5">
                      <div className="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-blue-400 h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                        <div className="flex h-6 px-2 text-sm font-semibold text-white bg-green-500 rounded-full justify-items-center">
                          <span className="flex items-center">30%</span>
                        </div>
                      </div>
                      <div className="flex-1 w-full ml-2">
                        <div>
                          <div className="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>

                          <div className="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="col-span-12 transition duration-300 transform bg-white rounded-lg shadow-xl hover:scale-105 sm:col-span-6 xl:col-span-3 intro-y"
                    href="#"
                  >
                    <div className="p-5">
                      <div className="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-yellow-400 h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <div className="flex h-6 px-2 text-sm font-semibold text-white bg-red-500 rounded-full justify-items-center">
                          <span className="flex items-center">30%</span>
                        </div>
                      </div>
                      <div className="flex-1 w-full ml-2">
                        <div>
                          <div className="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>

                          <div className="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="col-span-12 transition duration-300 transform bg-white rounded-lg shadow-xl hover:scale-105 sm:col-span-6 xl:col-span-3 intro-y"
                    href="#"
                  >
                    <div className="p-5">
                      <div className="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-pink-600 h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                          />
                        </svg>
                        <div className="flex h-6 px-2 text-sm font-semibold text-white bg-yellow-500 rounded-full justify-items-center">
                          <span className="flex items-center">30%</span>
                        </div>
                      </div>
                      <div className="flex-1 w-full ml-2">
                        <div>
                          <div className="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>

                          <div className="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="col-span-12 transition duration-300 transform bg-white rounded-lg shadow-xl hover:scale-105 sm:col-span-6 xl:col-span-3 intro-y"
                    href="#"
                  >
                    <div className="p-5">
                      <div className="flex justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-green-400 h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                          />
                        </svg>
                        <div className="flex h-6 px-2 text-sm font-semibold text-white bg-blue-500 rounded-full justify-items-center">
                          <span className="flex items-center">30%</span>
                        </div>
                      </div>
                      <div className="flex-1 w-full ml-2">
                        <div>
                          <div className="mt-3 text-3xl font-bold leading-8">
                            4.510
                          </div>

                          <div className="mt-1 text-base text-gray-600">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
             
              {
                data && data.length > 0 ? (
                  <>
                  <div className="col-span-12 mt-5">
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-1">
                  <div className="p-4 bg-white rounded-lg shadow-lg">
                    <h1 className="text-base font-bold">Table</h1>
                    <div className="mt-4">
                      <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto">
                          <div className="inline-block min-w-full py-2 align-middle">
                            <div className="overflow-hidden bg-white border-b border-gray-200 shadow sm:rounded-lg">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                  <tr>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-gray-500 uppercase bg-gray-50">
                                      <div className="flex cursor-pointer">
                                        <span className="mr-2">
                                          PRODUCT NAME
                                        </span>
                                      </div>
                                    </th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-gray-500 uppercase bg-gray-50">
                                      <div className="flex cursor-pointer">
                                        <span className="mr-2">Price</span>
                                      </div>
                                    </th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-gray-500 uppercase bg-gray-50">
                                      <div className="flex cursor-pointer">
                                        <span className="mr-2">STATUS</span>
                                      </div>
                                    </th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-gray-500 uppercase bg-gray-50">
                                      <div className="flex cursor-pointer">
                                        <span className="mr-2">ACTION</span>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  {data?.map((item) => (
                                    <tr key={item.id}>
                                    <td className="px-6 py-4 text-sm leading-5 whitespace-no-wrap">
                                      <p>{item.name}</p>
                                      <p className="text-xs text-gray-400">
                                        PC & Laptop
                                      </p>
                                    </td>
                                    <td className="px-6 py-4 text-sm leading-5 whitespace-no-wrap">
                                      <p>${item.price}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm leading-5 whitespace-no-wrap">
                                      <div className="flex text-green-500">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-5 h-5 mr-1"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                        <p>Active</p>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm leading-5 whitespace-no-wrap">
                                      <div className="flex space-x-4">
                                        <a
                                          href="#"
                                          className="text-blue-500 hover:text-blue-600"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                          </svg>
                                          <p>Edit</p>
                                        </a>
                                        <a
                                          href="#"
                                          className="text-red-500 hover:text-red-600"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 ml-3 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                          </svg>
                                          <p>Delete</p>
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                  ))}
                             
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center">
                      <h1 className="text-xl ">You have no products</h1>
                      </div>
                  </>
                )
                }
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardUser;
