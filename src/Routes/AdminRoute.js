import { useAppSelector } from "../redux/hook";

const AdminRoute = ({ children }) => {
  const { currentUser, isLoading } = useAppSelector(
    (state) => state.user.currentUser
  );

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (currentUser) {
    return children;
  }
};
