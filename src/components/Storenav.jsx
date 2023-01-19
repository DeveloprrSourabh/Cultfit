import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/store.css";
import Carbtn from "./Carbtn";
import "./styles/head.css";
import "./styles/side.css";
import Storebtn from "./Storebtn";
import Backdrop from "./Backdrop";
import Sideb from "./Sideb";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

const Storenav = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // add data
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  return (
    <div className="nbrstr">
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
          <div className="loginkr kyu">
            <img
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              src="https://static.cure.fit/assets/images/cart-icon-new.svg"
              alt=""
              className="lginkr"
            />
            <span className="circle">{getdata.length}</span>
          </div>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {getdata.length ? (
              <div className="fd">
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
                {getdata.map((e) => {
                  return (
                    <>
                      <div className="prdtcrt">
                        <div className="piccrt">
                          <Link to={`/cart/${e.id}`} onClick={handleClose}>
                            <img src={e.imgsrc} alt="" className="iiiopicrt" />
                          </Link>
                        </div>
                        <div className="vcationcrt">
                          <div className="fcrttion">{e.about}</div>
                          <div className="hcrt">
                            <div className="hjyitcrt2">{e.desc}</div>
                          </div>
                          <div className="brtcrt">
                            <div className="sizecrt">Size:ALL</div>
                            <div className="bhvccrt">
                              ₹ {e.prize * e.quantity}
                            </div>
                            <div className="hjycrtpm">
                              <img
                                onClick={
                                  e.quantity <= 1
                                    ? () => dlt(e.id)
                                    : () => remove(e)
                                }
                                src="https://static.cure.fit/assets/images/minus.svg"
                                alt=""
                                className="minusimg"
                              />

                              <div className="countgdhy">{e.quantity}</div>
                              <img
                                onClick={() => send(e)}
                                src="https://static.cure.fit/assets/images/plus.svg"
                                alt=""
                                className="minusimg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="kata">
                          <img
                            onClick={() => dlt(e.id)}
                            src="https://static.cure.fit/assets/images/modal-close.svg"
                            className="imgktgt"
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              <div className="card_details">
                <div className="refgi">
                  <div className="abkr">
                    <div className="cartimgempty">
                      <img
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/temp/cart/empty-cart-dark-theme.svg"
                        alt=""
                        className="emty"
                      />
                    </div>
                    <div className="ycie">Your cart is empty</div>
                    <div className="lokkk">
                      Looks like you haven't made any purchases yet
                    </div>
                    <div className="btem">
                      <button onClick={handleClose} className="cartbtnrmy">
                        <div className="cartrmty">BACK</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Menu>
        </div>
      </div>
      {/* SCROLLBAR---START */}
    </div>
  );
};

export default Storenav;
