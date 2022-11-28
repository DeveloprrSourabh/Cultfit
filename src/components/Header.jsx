import React from "react";
import style from "./styles/head.css";

const Header = () => {
  return (
    <div>
      {/* HEADER__START */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              alt=""
              className="img1"
            />
          </a>
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
              <a className="nav-link  mn" aria-current="page" href="#">
                FITNESS
              </a>
              <a className="nav-link mn" href="#">
                CARE
              </a>
              <a className="nav-link mn" href="#">
                MIND
              </a>
              <a className="nav-link mn" href="#">
                STORE
              </a>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link lo" href="#">
                Bang..
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
                  alt=""
                  className="lim"
                />
              </a>
              <a style={{color:'white'}} className="nav-link nn1" href="#">
                GET APP
              </a>
              <a className="nav-link jp nn" href="#">
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png" alt="" className="lp" />
              </a>
              <a className="nav-link jp1 nn" href="#">
                <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg" alt="" className="lp1" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
