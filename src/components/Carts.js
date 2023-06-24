import { useDispatch, useSelector } from "react-redux"
import { addOneGood, minusOneGood, removeFromeCart } from "./reducers/cartReducer"

export default function Carts(){
    const tempCart = useSelector(state=>state.carts.carts)
    const dispatch = useDispatch()
    function handleRemove(value){
        dispatch(removeFromeCart(value))
    }
    function handlePlus(value){
        dispatch(addOneGood(value))
    }
    function handleMinus(value){
        dispatch(minusOneGood(value))
    }
    const total = tempCart.reduce(
        (accumulator, currentValue) => accumulator + currentValue[0].price * currentValue[1],
        0
      ).toFixed(2);
    return(
        <div className="cart">
            <h2>Your cart:</h2>
            {tempCart.map(good=>{
                return(
                    <div key={good[0].id} className="cart-each">
                      <div className="cart-title">{good[0].title}</div>
                      <div className="cart-price">
                         <button onClick={()=>handleMinus(good[0])}>-</button>
                         <div>{good[0].price} x {good[1]}</div>
                         <button onClick={()=>handlePlus(good[0])}>+</button>
                      </div>
                     
                      <button onClick={()=>handleRemove(good[0])}>Remove</button>
                    </div>
                )
            })}
            <div className="cart-amount">total Amoutn: ${total}</div>
        </div>
    )
}