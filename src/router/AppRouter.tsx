import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Items from "../pages/Items";
import Configuracion from "../pages/Configuracion";

const isAuthenticated = () => sessionStorage.getItem("session") === "active";

function PrivateRoute({ children }: { children: JSX.Element }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/items" element={
          <PrivateRoute><Items /></PrivateRoute>
        } />
        <Route path="/configuracion" element={
          <PrivateRoute><Configuracion /></PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}