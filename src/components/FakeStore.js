import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFakeStore } from "./reducers/fakeStoreReducer"
import { addToCart } from "./reducers/cartReducer"

export default function FakeStore(){
    const storeList = useSelector(state=>state.fakeStore.list)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchFakeStore())
    },[dispatch])
    function handleAddToCart(value){
        dispatch(addToCart(value))
    }
    
    return(
        <div className="superStore">
            <h1>Super Store</h1>
            <div className="grid-con">
            {storeList.map(good=>{
                return(
                    <div className="eachgood" key={good.id}>
                        <img src={good.image} alt="Logo" />
                        <div>
                            <h5>{good.title}</h5>
                            <p>{good.description}</p>
                            <h3>$ {good.price}</h3>
                            <button className="store-button" onClick={()=> handleAddToCart(good)}>add to cart & buy it</button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}