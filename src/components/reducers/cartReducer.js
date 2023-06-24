import { ADD_ONE, ADD_TO_CART, MINUS_ONE, REMOVE_FROM_CART } from "../action";

function checkGoodInCart(list,good){
    for(let i = 0 ; i < list.length;i++){
        if(list[i][0].id===good.id){
            return true
        }
    }
    return false
}

function updateGoodInCart(list,good){
    for(let i = 0 ; i < list.length;i++){
        if(list[i][0].id===good.id){
            list[i][1]+=1
             
        }
    }
    return list
}

function plusOne(list,id){
    for(let i = 0 ; i < list.length;i++){
        if(list[i][0].id===id){
            list[i][1]+=1
            return list
        }
    }
    return list
}

function minusOne(list,id){
    for(let i = 0 ; i < list.length;i++){
        if(list[i][0].id===id){
            list[i][1]-=1
            if(list[i][1]===0){
                list.splice(i,1)
            }
            return list 
        }
    }
    return list
}
export default function cartReducer(state={carts:[]},action){
    switch(action.type){
        case ADD_TO_CART:
            if(!checkGoodInCart(state.carts,action.payload)){
                const tempGood = [action.payload,1]
                return {carts: [...state.carts,tempGood]}
            }
            else{
                const tempGood = updateGoodInCart(state.carts,action.payload)
                return {carts: tempGood}
            }
        case REMOVE_FROM_CART:
            const newCart = state.carts.filter(el=> el[0].id!==action.payload)
            return {carts:newCart}
        case ADD_ONE:
            return {carts: [...plusOne(state.carts,action.payload)]}
        case MINUS_ONE:
            return  {carts: [...minusOne(state.carts,action.payload)]}
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

export function addOneGood(good){
    return {type:ADD_ONE, payload:good.id}
}

export function minusOneGood(good){
    return {type:MINUS_ONE, payload:good.id}
}