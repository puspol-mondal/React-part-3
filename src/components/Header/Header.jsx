import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <div className="Header shadow-sm ">
        <div className="container">
          <div className="row py-2 align-items-center">
            <div className="col-md-3">
              <div className="logo">
                <a href="#">
                  <img src="https://creativeitinstitute.com/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-9 ">
              <div className="menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
