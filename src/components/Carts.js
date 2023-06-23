import { useDispatch, useSelector } from "react-redux"
import { removeFromeCart } from "./reducers/cartReducer"

export default function Carts(){
    const tempCart = useSelector(state=>state.carts.carts)
    const dispatch = useDispatch()
    function handleRemove(value){
        dispatch(removeFromeCart(value))
    }
    const total = tempCart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
    return(
        <div>
        <h2>Your cart:</h2>
            {tempCart.map(good=>{
                return(
                    <div key={good.id}>
                    <div>{good.title}</div>
                    <div>{good.price}</div>
                    <button onClick={()=>handleRemove(good)}>Remove</button>
                    </div>
                )
            })}
            <div>total Amoutn:{total}</div>
        </div>
    )
}