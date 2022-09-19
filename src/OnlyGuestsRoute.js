import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthService from "./services/authService";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await AuthService.isGuest();

      setIsAuth(res);
    };

    fetchData();
  }, []);

  return isAuth;
};

const OnlyGuestsRoute = ({ location }) => {
  const isAuth = useAuth();

  if (isAuth === null)
    // waiting..
    return null;

  if (isAuth.guest) {
    return <Outlet />;
  } else if (isAuth.admin) {
    return <Navigate to="/admin/add-product" />;
  } else {
    return <Navigate to="/product-list" />;
  }
};

export default OnlyGuestsRoute;
