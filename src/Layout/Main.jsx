import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/Home/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
