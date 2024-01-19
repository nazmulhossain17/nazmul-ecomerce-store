import { useState } from "react";
import Sidebar from "../components/Home/shared/Sidebar/Sidebar";
import { useAppSelector } from "../redux/hook";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const headingStyle = {
    background: "linear-gradient(90deg, rgba(74, 222, 128, 1), rgb(169 5 130))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <>
      <div>
        <div>
          <nav className="bg-slate-700 p-6 flex items-center justify-between">
            <div>
              <Link
                to="/"
                style={headingStyle}
                className="md:flex space-x-12 hidden text-3xl font-monospace font-bold"
              >
                Nazmul Ecomerce
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-lime-50 text-xl">
                Welcome! {currentUser.user.name}
              </span>
              <i className="fas fa-user-circle text-white text-2xl"></i>
            </div>
          </nav>
          <div className="flex">
            <Sidebar />

            <div className="bg-gray-100 min-h-screen p-8 w-full">
              <div>
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
