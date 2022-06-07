import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/Signin";
import { auth } from "./firebase/config";

const App = () => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) console.log("USER HAS LOGGED IN");
      else console.log("USER HAS NOT LOGGED IN");
    });
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
