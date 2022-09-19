import React, { useEffect, useState } from "react";
import CustomerNavBar from "./navBar";
import Product from "./product";
import UserService from "../../services/userService";
import CustomerFooter from "./footer";
import "../../assets/css/style.css";
import "font-awesome/css/font-awesome.min.css";
import { toast } from "react-toastify";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await UserService.getProducts("all");

      setProducts(res);
    }
    fetchData();
  }, []);

  const notify = (res) => {
    toast(res.data.msg, {
      theme: "colored",
      type: "success",
      autoClose: 2000,
    });
  }

  return (
    <div>
      <CustomerNavBar />
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Product List</h2>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            {products.map((item, index) => (
              <Product key={index} productDetails={item} notify={notify} />
            ))}
          </div>
        </div>
      </section>

      {/* <CustomerFooter /> */}
    </div>
  );
}
