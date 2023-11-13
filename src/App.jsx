import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import router from "./Routes/Routes";

function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
