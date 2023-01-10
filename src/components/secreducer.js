export const secreducer = (secState, actio) =>{

  // Increment
  if (actio.type === "INCREMENTS") {
    let updateCart = secState.items.map((curElem) => {
      if (curElem.id === actio.pay) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    return { ...secState, items: updateCart };
  }

return secState;
}
export default secreducer;