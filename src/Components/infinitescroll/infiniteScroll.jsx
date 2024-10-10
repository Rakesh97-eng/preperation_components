import { height } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react"

const InfiniteScroll = ()=>{
    const [items,setItems] = useState([]);
    const[page,setPage] = useState(1)
    const [loading, setLoading] = useState(false);

    const handleScroll = ()=>{
        const { scrollTop, clientHeight, scrollHeight } =document.documentElement;
        console.log("ssssss",scrollTop, clientHeight, scrollHeight);
        if(scrollTop+clientHeight>=scrollHeight){
            setPage(page+1)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=> window.removeEventListener('scroll',handleScroll) 
    },[])

    const fetchData = async()=>{
        if(loading) return ;
        setLoading(true)
        try{
            let res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
            // let res = await fetch(`https://roobai.com/api.php?page=${(page - 1) * 10}`);
            
            let data = await res.json()
            setItems([...items,...data.products])
            setLoading(false)

        }
        catch(Err){
            console.log("errrr",Err);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData()
    },[page])

    return (
        <>
            {
                items.map((d,i)=>{
                    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                    return <img src={d.images[0] } height="400" width="300"/>
                    // <div style={{margin:"5px",padding:"15px",borderRadius:"5px",backgroundColor:randomColor,width:"max-content"}}>
                    //     {d.title}
                    // </div>
                })
            }
            {loading&&"Loadinggg....."}
        </>
    )
}

export default InfiniteScroll