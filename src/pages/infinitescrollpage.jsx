import { useState } from "react";
import InfiniteScroll from "../Components/infinitescroll/infiniteScroll"

const ScrollPage = ()=>{

    let states = useState("a");
    console.log("states",states);
    return (
        <InfiniteScroll/>
    )
}

export default ScrollPage;