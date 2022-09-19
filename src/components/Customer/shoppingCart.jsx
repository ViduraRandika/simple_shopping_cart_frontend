import React, { useEffect, useState } from "react";
import CustomerService from "../../services/customerService";
import CustomerFooter from "./footer";
import CustomerNavBar from "./navBar";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
        const res = await CustomerService.getCartItems();
        console.log(res);
        setCartItems(res);
    }
    fetchData();
  }, []);
  return (
    <div>
      <CustomerNavBar />
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className="shoping__cart__item">
                          <img src="img/cart/cart-1.jpg" alt="" />
                          <h5>Vegetable’s Package</h5>
                        </td>
                        <td className="shoping__cart__price">Rs 55.00</td>
                        <td className="shoping__cart__quantity">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" defaultValue="1" />
                            </div>
                          </div>
                        </td>
                        <td className="shoping__cart__total">Rs 110.00</td>
                        <td className="shoping__cart__item__close">
                          <span className="icon_close"></span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Total <span>Rs 454.98</span>
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <CustomerFooter /> */}
    </div>
  );
}
