import React, { useState, useEffect } from "react";
import CustomerFooter from "./footer";
import CustomerNavBar from "./navBar";
import sampleImg from "../../assets/images/sampleProduct.jpg";
import { useParams } from "react-router-dom";
import UserService from "../../services/userService";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const res = await UserService.getProducts(id);

      setProductDetails(res);
    }
    fetchData();
  }, [id]);
  return (
    <div>
      <CustomerNavBar />
      <section className="featured">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={sampleImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{productDetails.productName}</h3>
                <div className="product__details__price">
                  Rs {productDetails.price}
                </div>
                <p>{productDetails.description}</p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="number" defaultValue="1" />
                    </div>
                  </div>
                </div>
                <button  className="primary-btn">
                  ADD TO CARD
                </button>
                <ul>
                  <li>
                    <b style={{ width: "280px" }}>Warranty Period</b>
                    <span>{productDetails.warrantyPeriod} Months</span>
                  </li>
                  <li>
                    <b style={{ width: "280px" }}>
                      Extended warranty rate per month
                    </b>
                    <span>{productDetails.extendedWarrantyRate}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <CustomerFooter /> */}
    </div>
  );
}
