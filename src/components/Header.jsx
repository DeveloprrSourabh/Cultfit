import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/head.css";

const Header = () => {
  return (
    <div style={{position: "fixed",
      width: "100%"}}>
      {/* HEADER__START */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              alt=""
              className="img1"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link  mn" aria-current="page" to="/fitness">
                FITNESS
              </Link>
              <Link className="nav-link mn" to="/care">
                CARE
              </Link>
              <Link className="nav-link mn" to="mind">
                MIND
              </Link>
              <Link className="nav-link mn" to="store">
                STORE
              </Link>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link lo" to="#">
                Banglore
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
                  alt=""
                  className="lim"
                />
              </Link>
              <Link style={{color:'white'}} className="nav-link nn1" to="/">
                GET APP
              </Link>
              <Link className="nav-link jp nn" to="#">
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png" alt="" className="lp" />
              </Link>
              <Link className="nav-link jp nn" to="#">
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg" alt="" className="lp" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
