import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import Drawer from "../components/Drawer";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? <Drawer>{children}</Drawer> : <Navigate to="/" />;
};
