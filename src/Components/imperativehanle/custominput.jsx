import { forwardRef, useImperativeHandle, useRef } from "react";
import { useDebounce } from "../../hooks/useDebounce";

const CustomInput = (props,ref)=>{
    let newref = useRef();
    useImperativeHandle(ref,()=>{
        return {myfocus(){
            newref.current.focus()
        }}
    },[])

    const handlechange = useDebounce((e)=>{
        console.log(e.target.value);
    })

    return (
        <input ref={newref} onChange={(e)=>handlechange(e)} id="dd" placeholder="hii"/>
    )
}

export default forwardRef(CustomInput);