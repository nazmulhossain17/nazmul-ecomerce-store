import { useEffect } from "react";
import { useNavigate } from "react";
import PropTypes from "prop-types";
import { useAppSelector } from "../redux/hook";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  useEffect(() => {
    // Redirect to login if currentUser is falsy
    if (!currentUser || currentUser.user === null) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  // Render children only if currentUser is truthy
  return currentUser ? <>{children}</> : null;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
