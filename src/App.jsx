import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
function App() {
  return (
    <>
      <Toaster />
      <div className="">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
