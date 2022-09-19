import React from "react";
import { Link } from "react-router-dom";
import sampleImg from "../../assets/images/sampleProduct.jpg";
import CustomerService from "../../services/customerService";

export default function Product({ productDetails, notify }) {
  const addToCart = async (id) => {
    const res = await CustomerService.addProductToCart({ id: id, qty: 1 });
    notify(res);
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mix">
      <div className="featured__item">
        <div
          className="featured__item__pic"
          style={{ backgroundImage: `url(${sampleImg})` }}
        >
          <ul className="featured__item__pic__hover">
            <li>
              <a href="#" onClick={() => addToCart(productDetails.id)}>
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <Link to={`/product-details/${productDetails.id}`}>
              {productDetails.productName}
            </Link>
          </h6>
          <h5>Rs {productDetails.price}</h5>
        </div>
      </div>
    </div>
  );
}
