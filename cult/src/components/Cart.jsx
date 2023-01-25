import React, { createContext, useContext, useReducer, useState } from "react";
import "./styles/Cart.css";
import Cardapi from "./Cardapi";

import secreducer from "./secreducer";
import Whole from "./Whole";

const ContextBrand = createContext(Cardapi);

const initialState = {
  items:Cardapi,
  totalAmounts: 0,
  totalItems: 0,
};

 

const Cart = () => {

const [secState, dispatch] = useReducer(secreducer, initialState);

 // Increment The Item
 const increments = (id) =>{
  return dispatch({
    type:"INCREMENTS",
    payload:id,
  })
  };

  // Decrement The Item
const decrements = (id) =>{
  return dispatch({
    type:"DECREMENTS",
    payload:id,
  })
  };
  return (
    <>
    <ContextBrand.Provider value={{...secState, increments,decrements}}>
    <Whole />
    </ContextBrand.Provider>
    </>
  );
};
export { ContextBrand };

export default Cart;
