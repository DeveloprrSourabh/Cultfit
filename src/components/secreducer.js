export const secreducer = (secState, action) =>{

  // Increment
  if (action.type === "INCREMENTS") {
    let updateCarts = secState.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    return { ...secState, item: updateCarts };
  }

if (action.type === "GET_TOTAL") {
  let {totalItem,totalAmount} = secState.item.reduce((accum,curVal) => {
      let {quantity,prize} = curVal;
      let updatedTotalAmount = prize*quantity;
      accum.totalAmount+=updatedTotalAmount;
      accum.totalItem += quantity;
      return accum; 
  }, {
      totalItem: 0,
      totalAmount:0,
  });
  return {...secState,totalItem,totalAmount};
}
return secState;
}
export default secreducer