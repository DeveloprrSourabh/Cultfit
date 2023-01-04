import React from "react";
import "./styles/head.css";
const Carbtn = ({ openSidebar }) => {

    
  return (
    <>
      <div onClick={openSidebar} id="flx" className="nav-link jp nn" to="#">
        <img
          
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
          alt=""
          className="lp"
        />

        <div className="cartItem">4</div>
      </div>
    </>
  );
};

export default Carbtn;
