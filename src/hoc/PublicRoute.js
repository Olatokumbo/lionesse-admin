import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

export const PublicRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to="/home" /> : children;
};
