import Third from "./third"

const Second = ({cartvalue})=>{
    console.log("second render");
    return (
        <>
            Second component 
            <div>
                <Third cartvalue={cartvalue} />
            </div>
        </>
    )
}
export default Second