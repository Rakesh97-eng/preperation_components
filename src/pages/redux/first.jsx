import { useState } from "react"
import { useDispatch } from "react-redux";
import { addcartValue } from "../../redux/slice";
import Second from "./second";

const First = ()=>{
    const [cartvalue,setCartValue] = useState(0);
    const dispatch = useDispatch();
    return (
        <>
            First component 
            <div style={{background:"red"}}>
                <button onClick={()=>dispatch(addcartValue(1))}>Add cart</button>
            </div>
            <div>
                <Second cartvalue={cartvalue} />
            </div>
        </>
    )
}
export default First