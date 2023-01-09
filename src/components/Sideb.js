import React, { createContext, useContext, useState } from "react";
import "./styles/side.css";
import { Link } from "react-router-dom";
import { CartContext } from "./Store";
import Cardapi from "./Cardapi";

const Sideb = ({
  id,
  heading,
  imgsrc,
  about,
  color,
  desc,
  prize,
  preprize,
  off,
  quantity,
  sidebar,
}) => {
  const { removeItem, increment } = useContext(CartContext);
  const [count, setCount] = useState(0);



  return (
    <>
      <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
        <div className="crtero">
          <div className="errovret">
            <Link to="/store">
              <Link to="/cultsport/cart">
                <img
                  src="https://static.cure.fit/assets/images/back-arrow-black.svg"
                  alt=""
                  className="crtrtecdft"
                />
              </Link>
            </Link>
          </div>
          <div className="yourcart">Your Cart</div>
        </div>
        <div className="prdtcrt">
          <div className="piccrt">
            <Link to="/cart">
              <img src={imgsrc} alt="" className="iiiopicrt" />
            </Link>
          </div>
          <div className="vcationcrt">
            <div className="fcrttion">{about}</div>
            <div className="hcrt">
              <div className="hjyitcrt2">UT1001, Blue, Steel MTB 27.5...</div>
            </div>
            <div className="brtcrt">
              <div className="sizecrt">Size:ALL</div>
              <div className="bhvccrt">₹ {quantity * prize}</div>
              <div className="hjycrtpm">
                <img
                  onClick={() => increment(id)}
                  src="https://static.cure.fit/assets/images/minus.svg"
                  alt=""
                  className="minusimg"
                />

                <div className="countgdhy">{quantity}</div>
                <img
                  onClick={() => increment(id)}
                  src="https://static.cure.fit/assets/images/plus.svg"
                  alt=""
                  className="minusimg"
                />
              </div>
              <div className="kata">
                <img
                  onClick={() => removeItem(id)}
                  sidebar={sidebar}
                  src="https://static.cure.fit/assets/images/modal-close.svg"
                  className="imgktgt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sideb;
