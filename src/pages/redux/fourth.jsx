import Fifth from "./fifth"

const Fourth = ({cartvalue})=>{
    console.log("fourthrender")
    return (
        <>
            Fourth component 
            <div style={{background:"yellow"}}>
                <Fifth cartvalue={cartvalue} />
            </div>
        </>
    )
}
export default Fourth