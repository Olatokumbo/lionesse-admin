import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./hoc";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Users from "./pages/Users";
import Clients from "./pages/Clients";
import Locations from "./pages/Locations";
import CreateClient from "./pages/Clients/CreateClient";
import CreateUser from "./pages/Users/CreateUser";
import User from "./pages/Users/User";
import Client from "./pages/Clients/Client";
import CreateLocation from "./pages/Locations/CreateLocation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/clients"
          element={
            <PrivateRoute>
              <Clients />
            </PrivateRoute>
          }
        />
        <Route
          path="/locations"
          element={
            <PrivateRoute>
              <Locations />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-location"
          element={
            <PrivateRoute>
              <CreateLocation />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-user"
          element={
            <PrivateRoute>
              <CreateUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-client"
          element={
            <PrivateRoute>
              <CreateClient />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:userId"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route
          path="/client/:clientId"
          element={
            <PrivateRoute>
              <Client />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
