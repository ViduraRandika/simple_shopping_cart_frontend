import React, { Component } from "react";

import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import CustomerPrivateRoute from './CustomerPrivateRoute';
import ProductList from "./components/Customer/productList";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import CustomerProtectedTemp from "./components/Customer/customerProtectedTemp";
import CustomerNotProtectedTemp from "./components/Customer/customerNotProtectedTemp.";
import AdminProtectedTemp from "./components/admin/adminProtectedTemp";
import AdminPrivateRoute from "./AdminPrivateRoute";
import OnlyGuestsRoute from "./OnlyGuestsRoute";
import AdminAddProduct from "./components/admin/addProduct";
import { ToastContainer } from "react-toastify";


class App extends Component{
  render() {
    return (
      <div>
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover={false}
          pauseOnFocusLoss={false}
        />
        <BrowserRouter>
          <Routes>
            {/* PUBLIC ROUTES */}

            <Route exact path="/" element={<Home />} />
            <Route path="/not" element={<CustomerNotProtectedTemp />} />

            {/* CUSTOMER ROUTES */}

            <Route element={<CustomerPrivateRoute />}>
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/protected" element={<CustomerProtectedTemp />} />
            </Route>

            {/* ADMIN ROUTES */}

            <Route element={<AdminPrivateRoute />}>
              <Route path="/admin/add-product" element={<AdminAddProduct />} />
            </Route>

            {/* GUEST ROUTES */}

            <Route element={<OnlyGuestsRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;