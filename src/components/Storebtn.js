import React from "react";
import "./styles/btn.css";
const Storebtn = ({ openSidebar }) => {

    
  return (
    <>
      <div onClick={openSidebar} id="flxew" className="nav-link jpe nne" to="#">
        <img
          
          src="https://static.cure.fit/assets/images/cart-icon-new.svg"
          alt=""
          className="lpwe"
        />

      </div>
    </>
  );
};

export default Storebtn;
