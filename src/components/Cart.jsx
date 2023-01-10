import React, { createContext, useContext, useReducer, useState } from "react";
import "./styles/Cart.css";
import Cardapi from "./Cardapi";
import Storenav from "./Storenav";
import BrandContext from "./BrandContext";
import Sidehar from "./Sidehar";
import secreducer from "./secreducer";
import Whole from "./Whole";


const ContextBrand = createContext(Cardapi);
const secinitialState = {
  item: Cardapi,
  totalAmount: 0,
  totalItem: 0,
};

 

const Cart = () => {
 // Increment The Item
 const inc = (id) =>{
  return dispatch({
    type:"INCREMENTS",
    payload:id,
  })
  };
const [secState, dispatch] = useReducer(secreducer, secinitialState)
  return (
    <>
    <ContextBrand.Provider value={{...secState,inc}}>
    <Whole />
    </ContextBrand.Provider>
    </>
  );
};
export default Cart;
