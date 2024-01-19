import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
} from "../../../../redux/user/userSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);
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
            <Link
              to="/dashboard"
              className="flex items-center justify-between p-2 hover:bg-gray-700"
            >
              <span className="text-left">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/create-product"
              className="flex items-center justify-between p-2 hover:bg-gray-700"
            >
              <span className="text-left">Create Product</span>
            </Link>
          </li>
          {currentUser.user.isAdmin && (
            <li>
              <Link
                to="/dashboard/all-users"
                className="flex items-center justify-between p-2 hover:bg-gray-700"
              >
                <span className="text-left">All Users</span>
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/dashboard/update"
              className="flex items-center justify-between p-2 hover:bg-gray-700"
            >
              <span className="text-left">Settings</span>
            </Link>
          </li>
          <li>
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
