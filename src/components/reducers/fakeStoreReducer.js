import { SET_FAKESTORE } from "../action";

export function fakeStoreReducer(state = {list:[]},action){
    switch(action.type){
        case SET_FAKESTORE:
            return {list: action.payload}
        default:
            return state
    }
    
}

export function fetchFakeStore(){
    return async (dispatch)=>{
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        dispatch(setFakeStore(data))
    }
}
export function setFakeStore(list){
    return{type:SET_FAKESTORE, payload:list}
}