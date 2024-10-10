import { useEffect } from "react";
import { useState } from "react";
import { Suggestions } from "../suggestion";

const SuggestionPage = ()=>{
    const [query,setQuery] = useState("");
    const [listData,setListData] = useState([]);
    const[showmenu,setShowmenu] = useState(false)



    useEffect(()=>{ 
        if(query.length>0){
            setListData(Suggestions.filter(suggest=>suggest.includes(query)))
        }
    },[query])

    return (
        <>
        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"brown",color:"white"}}>
            <div className="normalmenu">Home</div>
            <div className="normalmenu">About</div>
            <div className="normalmenu">Contact</div>
            <div className="normalmenu">Back</div>
             <div className="showmenu" onClick={()=>setShowmenu(!showmenu)}>Menu</div>
        </div>
       {showmenu && <div style={{backgroundColor:"brown",color:"white"}}>
           <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>Back</div>
        </div>}
            <div>
                <input value={query} onChange={(e)=>setQuery(e.target.value)}/>
                {listData.length>0 ?listData.map((val)=>{
                    return <ul><li>{val}</li></ul>
                }):"No suggestion Found"}
            </div>
        </>
    )
}

export default SuggestionPage;