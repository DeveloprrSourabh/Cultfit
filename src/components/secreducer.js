export const reducer = (secState, action) => {

  // Increment
  if (action.type === "INCREMENTS") {
    let updatedCart = secState.items.map((curElems) => {
      if (curElems.id === action.payload) {
        return { ...secState, quantity: curElems.quantity + 1 };
      }
      return curElems;
    });
    console.log(updatedCart);
    return { ...secState, items:updatedCart  } ;
    
  }

  // Decrement
  if (action.type === "DECREMENTS") {
    let updateCart = secState.items.map((curElems) => {
      if (curElems.id === action.payload) {
        return { ...curElems, quantity: curElems.quantity -1 };
      }
      return curElems;
    });
    console.log(updateCart);
    return { ...secState,items:updateCart  } ;
    
  }
 
  return secState;
};

export default reducer;