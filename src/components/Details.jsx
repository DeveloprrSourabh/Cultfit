import React, { createContext, useReducer, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Cardapi from "./Cardapi";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";
import { CartContext } from "./Store";
import Storenav from "./Storenav";
import "./styles/Details.css";



const initialState = {
    item:Cardapi,
    totalAmount:0,
    totalitem:0,
}
const Details = () => {
  const proid = useParams();
  const proDetail = Cardapi.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  const [state, dispatch] = useReducer(reducer, initialState);  

  const  removeItem = (id) =>{
  return dispatch({
    type:"REMOVE_ITEM",
    payload:id,
  })
  }
  return (
    <>
       <div className="nbrstr">
            <div className="strenbrig">
              <Link to="" className="homegetr">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
                  alt=""
                  className="str1stre"
                />
              </Link>
            </div>
            <div className="fiulpo">
              <ul className="hedstre">
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Best Sellers</h3>
                  {/* HOV---START */}
                  <ul className="koipl">
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Sportswear for Men</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Sportswear for Women</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Outdoor Cycles</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Cardio Equipments</h3>
                      </a>
                    </li>
                  </ul>
                  {/* HOV---END */}
                </li>
                <li className="mstrehd frtgb">
                  <h3 className="lith3rrrr">Just Launched</h3>
                  {/* HOV---START */}
                  <ul className="koipl">
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">New Arrivals</h3>
                      </a>
                    </li>
                  </ul>
                  {/* HOV---END */}
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Men</h3>
                  {/* HOV---START */}
                  <ul className="koipl">
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">All</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Footwear</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">T-Shirts</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Joggers and Track Pants</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Jackets & Sweatshirts</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Shorts</h3>
                      </a>
                    </li>
                  </ul>
                  {/* HOV---END */}
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Women</h3>
                  {/* HOV---START */}
                  <ul className="koipl">
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">All</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Footwear</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">T-Shirts</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Co-ords</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Sports Bra</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Tights</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Shorts</h3>
                      </a>
                    </li>

                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Joggers</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Jackets & Sweatshirts</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Boyshorts</h3>
                      </a>
                    </li>
                  </ul>
                  {/* HOV---END */}
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Cardio</h3>
                  {/* HOV---START */}
                  <ul className="koipl">
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">All</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Top deals</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Spinbikes</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Treadmills</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Power</h3>
                      </a>
                    </li>
                  </ul>
                  {/* HOV---END */}
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Cycles</h3>
                  {/* HOV---START */}
                  <ul className="koipl">
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">All</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Geared cycle</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Single speed cycle</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Electric cycle</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Kids cycle</h3>
                      </a>
                    </li>
                  </ul>
                  {/* HOV---END */}
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> accessories</h3>
                  {/* HOV---START */}
                  <ul className="koipl">
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">All</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Towel</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Gloves</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Mask</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Socks</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Yoga mat</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Jumping rope</h3>
                      </a>
                    </li>
                  </ul>
                  {/* HOV---END */}
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Supplement</h3>
                  {/* HOV---START */}
                  <ul className="koipl">
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">All</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Personal Care</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Protein</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Snacks</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Staples</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Vitamins</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Weight loss</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Immunity</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Muscle recovery</h3>
                      </a>
                    </li>
                  </ul>
                  {/* HOV---END */}
                </li>
                <li className="mstrehd">
                  <h3 className="lith3rrrr"> Equipment</h3>
                  {/* HOV---START */}
                  <ul className="koipl">
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">All</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Strength</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Others</h3>
                      </a>
                    </li>
                    <li className="ghyutiu">
                      <a href="" className="kioloipl">
                        <h3 className="frtgfrt">Cardio Equipments</h3>
                      </a>
                    </li>
                  </ul>
                  {/* HOV---END */}
                </li>
              </ul>
            </div>
            <div className="loginhthju">
              <div className="loginkr">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/cultsport/prod/Profile.svg"
                  alt=""
                  className="lginkr"
                />
              </div>
              <CartContext.Provider value={{...state,removeItem}}>
              <ContextCart />

              </CartContext.Provider>
            </div>
          </div>

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
                <NavLink to="/cart">
                  <div className="jklbt21">Add to Cart</div>
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
