import { useState } from "react"
import "./accord.css"
import { IoMdAdd } from "react-icons/io";

const AccordionComp = ()=>{
    const [showaccord,setShowAccord] = useState(false)
    const handleAccord = ()=>{
        setShowAccord(!showaccord)
    }
    return (
        <>  
            <div className="accord-container">
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasi alias quo reprehenderit ducimus odit minima praesentium inventore in
                 blanditiis, rerum quaerat nemo ipsam nihil cumque magni nam, id consectetur!
                </span>
                 <IoMdAdd onClick={handleAccord} style={{cursor:"pointer"}}/>
            </div>
           {showaccord && <div className="render-accord-container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum nisi, corrupti veniam porro aliquam perferendis dolorem eaque excepturi
                 impedit obcaecati itaque veritatis. 
                Possimus veritatis consectetur, labore saepe ipsa ipsam!
            </div>}
            <div className="accord-container">
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasi alias quo reprehenderit ducimus odit minima praesentium inventore in
                 blanditiis, rerum quaerat nemo ipsam nihil cumque magni nam, id consectetur!
                </span>
                 <IoMdAdd onClick={handleAccord} style={{cursor:"pointer"}}/>
            </div>
        </>
    )
}

export default AccordionComp