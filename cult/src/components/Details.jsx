import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Cardapi from "./Cardapi";
import Storenav from "./Storenav";
import "./styles/Details.css";
import { ADD } from "../redux/actions/action";



const Details = () => {

  const dispatch = useDispatch();

  const send = (e) =>{
// console.log(e);

dispatch(ADD(e))
  }

  const proid = useParams();
  const proDetail = Cardapi.filter((x) => x.id == proid.id);
  const product = proDetail[0];

  return (
    <>
      <Storenav />
      <div className="dtpg">
        <div className="igstpg">
          <div className="ghftytfff">
            <div className="igmgdtg">
              <img src={product.img[0]} alt="" className="dtigmgnhj" />
            </div>
            <div className="igmgdtg">
              <img src={product.img[1]} alt="" className="dtigmgnhj" />
            </div>
            <div className="igmgdtg">
              <img src={product.img[2]} alt="" className="dtigmgnhj" />
            </div>
            <div className="igmgdtg">
              <img src={product.img[3]} alt="" className="dtigmgnhj" />
            </div>
            <div className="igmgdtg">
              <img src={product.img[4]} alt="" className="dtigmgnhj" />
            </div>
          </div>
        </div>
        <div className="treehed">
          <div className="alltree">
            <div className="hhjdghf">CULTSPORTONE</div>
          </div>
          <div className="trreehd">
            <div className="mothd">{product.about}</div>
            <div className="prizertr">
              <p className="fprtr">₹ {product.prize}</p>
              <p className="fprtr1">₹ {product.preprize}</p>
              <p className="fprtr2">{product.off} % Off</p>
            </div>
            <div className="paraf">
              <p className="trparaf">{product.desc}</p>
            </div>
            <div className="sunobtn">
              <div className="hgjuyhbtn">BEST SELLER</div>
            </div>
            <div className="titleconti">
              <div className="chsesze">Choose Size</div>
              <div className="szeguide">(Size Guide)</div>
            </div>
            <div className="mskf">
              <div tabindex="1" className="kk sdfrtgbh mmkk">
                S
              </div>
              <div tabindex="1" className="kk sdfrtgbh">
                M
              </div>
              <div tabindex="1" className="kk sdfrtgbh">
                L
              </div>
              <div tabindex="1" className="kk sdfrtgbh">
                XL
              </div>
              <div tabindex="1" className="kk sdfrtgbh">
                XXL
              </div>
            </div>
            <div className="jklbt">
              <div className="jkl2bt">
                <NavLink to="">
                  <div
                  onClick={()=>send(product)}
                  className="jklbt21">Add to Cart</div>
                </NavLink>
              </div>
              <div className="jkl2bt">
                <NavLink>
                  <div className="jklbt21">Buy Now</div>
                </NavLink>
              </div>
            </div>
            <div className="kuji"></div>
            <div className="dtltre">
              <div className="dtlddd">
                <div className="lkoikjui">PRODUCT DETAILS</div>
              </div>
              <div className="ulliokjs">
                <ul className="unoder">
                  <li className="filopf">Colour: Black</li>
                  <li className="filopf">Fabric: 100% Polyester</li>
                  <li className="filopf">Breathable fabric, Supersoft</li>
                  <li className="filopf">Light weight, Flydry</li>
                  <li className="filopf">Moisture Wicking</li>
                  <li className="filopf">
                    Medium to Light intensity activities
                  </li>
                </ul>
              </div>
            </div>
            <div className="kkktm"></div>
            <div className="khlpil">
              <div className="belop"></div>
              <div className="pflkhjgfdfs">
                <p className="sjjsjjss"></p>
                <div className="indhdhjdi">
                  <input
                    pattern="[0-9]"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="Enter your pincode"
                    type="text"
                    className="shghii"
                  />
                  <button className="hdhhgfhbtn">CHECK</button>
                </div>
              </div>
            </div>
            <ul className="ndkjkh">
              <li className="li2nd">
                {" "}
                <span className="span2nd"> Free delivery within 5-7 days</span>
              </li>
              <li className="li2nd">
                {" "}
                <span className="span2nd"> Easy 30 days return available</span>
              </li>
              <span className="span2nd"> 30 days exchange available</span>
              <li className="li2nd">
                <span className="span2ndalg">
                  To minimise contact between you and the delivery partner, Pay
                  on Delivery option is temporarily disabled.
                </span>
              </li>
            </ul>
            <div className="llkioklo"></div>
            <div className="fbrc">
              <div className="fbrc1">
                <p className="fbrc3">Fabric</p>
              </div>
              <ul className="fbrcul1">
                <li className="fbrcli1">100% Polyester</li>
              </ul>
            </div>
            <div className="llkioklo"></div>
            <div className="spcf">
              <div className="dpcf1">
                <div className="spcf2">Specification</div>
                <ul className="spcful">
                  <li className="lispcfli">Country of Origin: India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
