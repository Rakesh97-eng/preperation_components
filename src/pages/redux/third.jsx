import Fourth from "./fourth"

const Third = ({cartvalue})=>{
    console.log("thirdRednder")
    return (
        <>
            Third component 
            <div>
                <Fourth cartvalue={cartvalue} />
            </div>
        </>
    )
}
export default Third