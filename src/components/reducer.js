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
    return state;
};