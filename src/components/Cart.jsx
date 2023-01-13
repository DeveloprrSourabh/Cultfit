import React, { createContext, useContext, useReducer, useState } from "react";
import "./styles/Cart.css";
import Cardapi from "./Cardapi";

import secreducer from "./secreducer";
import Whole from "./Whole";

const ContextBrand = createContext(Cardapi);

const secinitialState = {
  items: Cardapi,
  totalAmounts: 0,
  totalItems: 0,
};

const Cart = () => {
  const [secState, dispatchs] = useReducer(secreducer, secinitialState);

  // Increment The Item
  const increments = (id) => {
    return dispatchs({
      type: "INCREMENTS",
      payload: id,
    });
  };

  // Decrement The Item
  const decrements = (id) => {
    return dispatchs({
      type: "DECREMENTS",
      payload: id,
    });
  };
  return (
    <>
      <ContextBrand.Provider value={{ ...secState, increments, decrements }}>
        <Whole />
      </ContextBrand.Provider>
    </>
  );
};
export { ContextBrand };

export default Cart;
