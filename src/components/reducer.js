export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }
  // Increment
  if (action.type === "INCREMENT") {
    let updateCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    return { ...state, item: updateCart };
  }

  // Decrement
  if (action.type === "DECREMENT") {
    let updateCart = state.item
      .map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      .filter((curElem) => {
        return curElem.quantity !== 0;
      });
    return { ...state, item: updateCart };
  }
  if (action.type === "GET_TOTAL") {
    let {totalItem} = state.item.reduce((accum,curVal) => {
        let {quantity} = curVal;
        accum.totalItem += quantity;
        return accum; 
    }, {
        totalItem: 0,
    });
    return {...state,totalItem}
  }
  return state;
};
