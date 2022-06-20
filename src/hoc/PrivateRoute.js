import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import Drawer from "../components/Drawer";
import Loading from "../pages/Loading";

export const PrivateRoute = ({ children }) => {
  const { isAuth, loading } = useAuth();
  // if (!loading && isAuth) {
  return isAuth ? <Drawer>{children}</Drawer> : <Navigate to="/" />;
  // }
  // return <Loading/>
};
