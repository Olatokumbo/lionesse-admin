import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Signin";

const App = () => {
  return (
    <Routes>
      {/* <Switch> */}
      <Route exact path="/" element={<SignIn />} />
      {/* </Switch> */}
    </Routes>
  );
};

export default App;
