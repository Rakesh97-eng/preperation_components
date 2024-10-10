import { useSelector } from "react-redux"

const Fifth = ()=>{
    const data = useSelector((a)=>a)
    console.log("data",data);
    return (
        <>
            Fifth component 
            <p>Here i need the cart value :{data.cartvalue}</p>
        </>
    )
}
export default Fifth