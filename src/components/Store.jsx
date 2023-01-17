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
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import item from "./Sideb";
import { reducer } from "./reducer";
// import Product from "./Product";
import Cardapi from "./Cardapi";
import Carbtn from "./Carbtn";
import Storebtn from "./Storebtn";
import Backdrop from "./Backdrop";
import Sideb from "./Sideb";
import ContextCart from "./ContextCart";
import Storenav from "./Storenav";

const CartContext = createContext(Cardapi);

const initialState = {
  item: Cardapi,
  totalAmount: 0,
  totalItem: 0,
};

const Store = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { item } = useContext(CartContext);
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // Increment The Item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  // Decrement The Item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // UseEffect To Update Data

  return (
    <div style={{ background: "white" }}>
      <div>
        <div className="strenbr">
          <div className="nbrstr">
          <Storenav />
              <CartContext.Provider
                value={{ ...state, decrement, removeItem, increment }}
              >
                <ContextCart />
              </CartContext.Provider>
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
