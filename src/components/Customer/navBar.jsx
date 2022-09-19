import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function CustomerNavBar() {
  return (
    <div>
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-shopping-bag"></i> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>Rs 150.00</span>
          </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product-list">Products</Link>
            </li>
            <li>
              <a href="#">My Orders</a>
              <ul className="header__menu__dropdown">
                <li>
                  <a href="./shop-details.html">Shop Details</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="humberger__menu__widget">
          <div className="header__top__right__auth">
            <a href="#">
              <i className="fa fa-user"></i> Login
            </a>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>

      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="./index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/product-list">Products</Link>
                  </li>
                  <li>
                    <Link to="/my-orders">My Orders</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <Link to="/shopping-cart">
                      <i className="fa fa-shopping-bag"></i> <span>3</span>
                    </Link>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>Rs 150.00</span>
                </div>
                <div className="header__top__right__auth">
                  <a href="#" className="ml-3">
                    <i className="fa fa-user"></i> Login
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </div>
  );
}
