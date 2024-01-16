import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/hook";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
} from "../../../../redux/user/userSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("http://localhost:3000/api/auth/logout", {
        method: "GET",
        credentials: "include", // Include credentials (cookies) in the request
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      // Clear the access token on the client side (assuming you're using cookies)
      // document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center justify-between p-2 hover:bg-gray-700"
            >
              <span className="text-left">Agenda</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between p-2 hover:bg-gray-700"
            >
              <Link to="/dashboard/create-product" className="text-left">
                Create Product
              </Link>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between p-2 hover:bg-gray-700"
            >
              <span className="text-left">Informes</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between p-2 hover:bg-gray-700"
            >
              <span className="text-left">Documentación</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-2 hover:bg-gray-700"
            >
              <span className="text-left">Settings</span>
            </a>
            <h1
              onClick={handleLogOut}
              className="flex items-center cursor-pointer justify-between p-2 hover:bg-gray-700 hover:text-red-700"
            >
              <span className="text-left">Log out</span>
            </h1>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
