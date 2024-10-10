import { useRef } from "react";
import CustomInput from "./custominput";

const ImperativeInput = ()=>{

    const inputref = useRef();

    const handleFocus = ()=>{
        inputref.current.myfocus();
        console.log("inputref.cu",inputref.current.value,inputref.current.id,inputref.current);
    }

    return (
        <>
            <button onClick={handleFocus}> Focus Child</button>
            <CustomInput ref={inputref}/>

        </>
    )
}
export default ImperativeInput;