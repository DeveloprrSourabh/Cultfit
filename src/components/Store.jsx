import React, {
  createContext,
  useReducer,
  rducer,
  useContext,
  useState,
  useEffect,
} from "react";
import "./styles/store.css";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Ncard from "./Ncard";
import item from "./Sideb";
import { reducer } from "./reducer";
// import Product from "./Product";
import Cardapi from "./Cardapi";
import Carbtn from "./Carbtn";
import Storebtn from "./Storebtn";
import Backdrop from "./Backdrop";
import Sideb from "./Sideb";
import { Scrollbars } from "react-custom-scrollbars-2";
import ContextCart from "./ContextCart";

const CartContext = createContext(Cardapi);

const initialState = {
  item: Cardapi,
  totalAmount: 0,
  totalItem: 0,
};

const Store = ({ child }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
    console.log("Hello");
  });

  // Increment The Item
const increment = (id) =>{
return dispatch({
  type:"INCREMENT",
  payload:id,
})
};
// Decrement The Item
const decrement = (id) =>{
  return dispatch({
    type:"DECREMENT",
    payload:id,
  })
  };
  return (
    <div style={{ background: "white" }}>
      <div>
        <div className="strenbr">
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
              <CartContext.Provider value={{ ...state,decrement, removeItem,increment }}>
                <ContextCart />
                {child}
              </CartContext.Provider>
            </div>
          </div>
          {/* SCROLLBAR---START */}
          <Carousel>
            <div>
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/bfef564a-2101-46a4-add9-46da1bb34924.png" />
            </div>
            <div>
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/fd72a85d-d0f4-4c42-a6ca-388d49e09bb5.png" />
            </div>
            <div>
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/f909402b-7b71-46a8-97c3-3ce6c663872e.png" />
            </div>
            <div>
              <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/ed700d62-ef1e-441e-837f-5d2088777c47.png" />
            </div>
          </Carousel>
          {/* SCROLLBAR---END */}
        </div>
      </div>
      {Cardapi.map(Ncard)}
    </div>
  );
};
export { CartContext };
export default Store;
