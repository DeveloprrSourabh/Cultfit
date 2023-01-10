export const reducer = (secState, action) => {

  // Increment
  if (action.type === "INCREMENTS") {
    let updateCart = secState.items.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
      console.log("updateCart");

    return { ...secState, item: updateCart };
  }

  // Decrement
  if (action.type === "DECREMENTS") {
    let updateCart = secState.item.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...secState, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      
    return { ...secState, item: updateCart };
  }
 
  return secState;
};

export default reducer;