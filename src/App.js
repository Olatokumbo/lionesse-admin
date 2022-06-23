import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./hoc";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Users from "./pages/Users";
import Clients from "./pages/Clients";
import Locations from "./pages/Locations";
import Products from "./pages/Products";
import CreateClient from "./pages/Clients/CreateClient";
import CreateUser from "./pages/Users/CreateUser";
import User from "./pages/Users/User";
import Client from "./pages/Clients/Client";
import CreateLocation from "./pages/Locations/CreateLocation";
import CreateProduct from "./pages/Products/CreateProduct";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute component={<Signin />} />} />
        <Route
          path="/home"
          element={<PrivateRoute component={<Dashboard />} />}
        />
        <Route path="/users" element={<PrivateRoute component={<Users />} />} />
        <Route
          path="/user/:userId"
          element={<PrivateRoute component={<User />} />}
        />
        <Route
          path="/create-user"
          element={<PrivateRoute component={<CreateUser />} />}
        />
        <Route
          path="/client/:clientId"
          element={<PrivateRoute component={<Client />} />}
        />
        <Route
          path="/clients"
          element={<PrivateRoute component={<Clients />} />}
        />
        <Route
          path="/create-client"
          element={<PrivateRoute component={<CreateClient />} />}
        />
        <Route
          path="/locations"
          element={<PrivateRoute component={<Locations />} />}
        />
        <Route
          path="/create-location"
          element={<PrivateRoute component={<CreateLocation />} />}
        />
        <Route
          path="/products"
          element={<PrivateRoute component={<Locations />} />}
        />
        <Route
          path="/create-product"
          element={<PrivateRoute component={<CreateProduct />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
