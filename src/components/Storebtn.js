import React, { useContext } from "react";
import { CartContext } from "./Store";
import "./styles/btn.css";
const Storebtn = ({ openSidebar }) => {

  const { item } = useContext(CartContext);

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
