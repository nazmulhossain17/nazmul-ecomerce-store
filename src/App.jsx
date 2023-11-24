import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";

function App() {
  return (
    <>
      <Toaster />
      <div className="max-w-[1440px] mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
