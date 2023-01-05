import React, { useState } from "react";
import "./styles/side.css";
import { Link } from "react-router-dom";
import Productcart from "./Productcart";

const Sideb = ({ sidebar }) => {
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

        <Productcart />
       
      </div>
    </>
  );
};

export default Sideb;
