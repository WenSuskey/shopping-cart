import { ADD_TO_CART, REMOVE_FROM_CART } from "../action";

export default function cartReducer(state={carts:[]},action){
    switch(action.type){
        case ADD_TO_CART:
            return {carts: [...state.carts,action.payload]}
        case REMOVE_FROM_CART:
            const newCart = state.carts.filter(el=> el.id!==action.payload)
            return {carts:newCart}
        default:
            return state
    }
}
export function addToCart(good){
    return {type: ADD_TO_CART,payload:good}
}
export function removeFromeCart(good){
    return {type:REMOVE_FROM_CART, payload:good.id}
}