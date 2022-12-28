import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/product.css";

function Product(props) {
  // console.log(props);
  return (
    <>
          <div key={props.id} className="stylishname">
          <span className="ghnt">{props.heading}</span>
          <a className="thik">{props.subheading}</a>
        </div>
      <div className="card">
        <div className="flex">
          <NavLink to={`/cultsport/${props.id}`}>
            <div className="makecard">
              <div className="cimg1">
                <img src={props.imgsrc} alt="" className="makecardimg" />
              </div>
              <div className="makecarddiv2">CULTSPORTONE</div>
              <div className="makecarddiv3">{props.about}</div>
              <div className="makecarddiv4">
                <p className="makecardp1">
                  ₹{props.prize}
                </p>
                <p className="makecardp2">
                  ₹{props.preprize}
                </p>
                <p className="makecardp3">
                  {props.off}% off
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Product;
