import React from "react";

export default function CustomerFooter() {
  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <a href="./index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <ul>
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello@colorlib.com</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
            <div className="footer__widget">
              <h6>Useful Links</h6>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">About Our Shop</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <div className="footer__widget__social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
