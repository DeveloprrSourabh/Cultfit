import React, { useState } from "react";
import "./styles/side.css";
import { Link } from "react-router-dom";
import Cardapi from "./Cardapi";

const Sideb = (id,heading,imgsrc,about,color,prize,preprize,off,size,qunty,{ sidebar }) => {
  const [count, setCount] = useState(0);

  const incNum = () =>{
    if (count < 9) {
      setCount(count + 1)
      }else{
        alert("You can Exceed The Limit!")
      }
  }

  const decNum = () =>{
    if (count > 0) {
    setCount(count - 1)
    }else{
      setCount(0)
    }

  }
  const [item, setItem] = useState(Cardapi);

  return (
    <>
      <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
        <div className="crtero">
          <div className="errovret">
            <Link to="/store">
              <img
                src="https://static.cure.fit/assets/images/back-arrow-black.svg"
                alt=""
                className="crtrtecdft"
              />
            </Link>
          </div>
          <div className="yourcart">Your Cart</div>
        </div>

        <div className="prdtcrt">
          <div className="piccrt">
            <img
              src={item.imgsrc}
              alt=""
              className="iiiopicrt"
            />
          </div>
          <div className="vcationcrt">
            <div className="fcrttion">Urban Terrain</div>
            <div className="hcrt">
              {" "}
              <div className="hjyitcrt2">UT1001, Blue, Steel MTB 27.5...</div>
            </div>
            <div className="brtcrt">
              <div className="sizecrt">Size:ALL</div>
              <div className="bhvccrt">₹ {12999*count}</div>
              <div className="hjycrtpm">
                <img onClick={decNum}
                  src="https://static.cure.fit/assets/images/minus.svg"
                  alt=""
                  className="minusimg"
                />

                <div className="countgdhy">{count}</div>
                <img onClick={incNum}
                  src="https://static.cure.fit/assets/images/plus.svg"
                  alt=""
                  className="minusimg"
                />
              </div>
            </div>
          </div>
          <div className="kata">
            <img
              src="https://static.cure.fit/assets/images/modal-close.svg"
              className="imgktgt"
            />
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Sideb;
