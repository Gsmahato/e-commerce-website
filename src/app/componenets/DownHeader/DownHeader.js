import React from "react";
import './downheader.css'
const DownHeader = () => {
  return (
    <>
      <nav className="navigation">
        <div className="container">
          <div className="responsive-nav">
            <ul className="main-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Hot Deals</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Smartphones</a>
              </li>
              <li>
                <a href="#">Cameras</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DownHeader;
