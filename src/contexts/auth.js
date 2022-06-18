import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setIsAuth(true) : setIsAuth(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
