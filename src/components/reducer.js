export const reducer = (state,action) =>{
if(action.type === "REMOVE_ITEM"){
    return{
        ...state,
        item: state.item.filter((curElem) =>{
return curElem.id !== action.payload;
        }),
    };
}
if (action.type === "INCRE") {
    let upCart = state.item.map((curElem)=>{
        if (curElem.id === action.payload) {
            return{...state, quantity:curElem.quantity + 1};
        }
        return curElem;
    })
}
if (action.type==="GET_TOTAL") {
    let {totalItem} = state.item.reduce((accum,currVal) => { 
        let {quantity} = currVal;
        accum.totalItem += quantity;
        return accum;
    },{
totalItem:0,
    });
    return {...state, totalItem}
}
    return state;
};