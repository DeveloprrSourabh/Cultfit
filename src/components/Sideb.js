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
  accum,
  totalItem,
  quantity,
  sidebar,
}) => {
<<<<<<< HEAD
  const [list, setList] = useState(Cardapi)
  const handleDelete =(i)=>{
    const deletVal = [...list]
    deletVal.splice(i,1)
    setList(deletVal)
  }
  // const  removeItem  = useContext(CartContext);
  const  removeItem  = useContext(CartContext);

=======
  const { removeItem, increment, decrement } = useContext(CartContext);
>>>>>>> c2ed7585931e3115c1f8b720c0bca18a511bb66b
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
        <div className="crtero">
          <div className="errovret">
            <Link to="/store">
<<<<<<< HEAD
              <img
                src="https://static.cure.fit/assets/images/back-arrow-black.svg"
                alt=""
                className="crtrtecdft"
              />
=======
              <Link to="/cultsport/cart">
                <img
                  src="https://static.cure.fit/assets/images/back-arrow-black.svg"
                  alt=""
                  className="crtrtecdft"
                />
              </Link>
>>>>>>> c2ed7585931e3115c1f8b720c0bca18a511bb66b
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
<<<<<<< HEAD
              <div className="bhvccrt">₹ {12999 * count}</div>
              <div className="hjycrtpm">
                <img
                  onClick={decNum}
=======
              <div className="bhvccrt">₹ {quantity * prize}</div>
              <div className="hjycrtpm">
                <img
                  onClick={() => decrement(id)}
>>>>>>> c2ed7585931e3115c1f8b720c0bca18a511bb66b
                  src="https://static.cure.fit/assets/images/minus.svg"
                  alt=""
                  className="minusimg"
                />

<<<<<<< HEAD
                <div className="countgdhy">{count}</div>
                <img
                  onClick={incNum}
=======
                <div className="countgdhy">{quantity}</div>
                <img
                  onClick={() => increment(id)}
>>>>>>> c2ed7585931e3115c1f8b720c0bca18a511bb66b
                  src="https://static.cure.fit/assets/images/plus.svg"
                  alt=""
                  className="minusimg"
                />
<<<<<<< HEAD
=======
              </div>
              <div className="kata">
                <img
                  onClick={() => removeItem(id)}
                  sidebar={sidebar}
                  src="https://static.cure.fit/assets/images/modal-close.svg"
                  className="imgktgt"
                />
>>>>>>> c2ed7585931e3115c1f8b720c0bca18a511bb66b
              </div>
              {
                list.map((cur,i)=>{
                  return (
                    <>
                    <div className="kata">
                <img
                  onClick={() => handleDelete(i)}
                  sidebar={sidebar}
                  src="https://static.cure.fit/assets/images/modal-close.svg"
                  className="imgktgt"
                />
              </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sideb;
