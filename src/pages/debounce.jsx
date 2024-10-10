import { useEffect, useState } from "react"

const Debounce = ()=>{
    const[ipvalue,setIpvalue] = useState("")

    const debouncefunc = (event)=>{
     
        setIpvalue(event.target.value)
     
    }

    useEffect(()=>{
        let timeout ; 
        timeout = setTimeout(()=>{
            console.log("eeeeeeee");
        },[1000])

        return ()=>{
            clearTimeout(timeout)
        }
    },[ipvalue])
    return(
        <>
            <input value={ipvalue} onChange={(e)=>debouncefunc(e)}/>
        </>
    )
}

export default Debounce