import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthService from "./services/authService";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await AuthService.isAdmin();

      setIsAuth(res);
    };

    fetchData();
  }, []);

  return isAuth;
};

const AdminPrivateRoute = () => {
  const isAuth = useAuth();

  if (isAuth === null)
    // waiting..
    return null;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminPrivateRoute;
