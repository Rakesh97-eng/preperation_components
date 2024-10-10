import { MenuList } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ToastComp from "../Components/toastcomp";
import SuggestionPage from "./suggestionPage";

const ToastPage = ()=>{

    const [showToast,setShowToast] = useState(false)
    const [type,setType] = useState("")
    const [value,setValue] = useState("")
    const[menuList,setMenuList] = useState([]);

    let typeObj = {
        sucess:{type:"sucess"},
        error:{type:"error"},
        info:{type:"info"},
    }
    const handleRemove = (idToRemove) => {
        setMenuList((prevList) => prevList.filter((toast) => toast.id !== idToRemove)).map((toast, index) => ({ ...toast, top: index * 70 }));
      };



  const handleClick = (type,value = "Success")=>{
    let listValue = menuList.length +1;
    setType(typeObj[type]?.type)
    setValue(value)
    setShowToast(true)
    setMenuList([...menuList,value])
  }


//   const {data} = useQuery('todos', async() => {
//     const res =   await axios('https://jsonplaceholder.typicode.com/users')
//     return res
//   },
//  )

   const addQuery = useMutation('posts', (newPost) => {
    return fetch('https://jsonplaceholder.typicode.com/posts',{
        
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    }).then(response => response.json());
  },
 )

    return (
        <>
           <SuggestionPage/>
            {
                menuList.map((list,index)=><ToastComp type={type} value={list} id={index} style={{ top: `${index * 70}px` }}  handleRemove={handleRemove}
                />)
            }
            <div>
                 <button onClick={()=>handleClick("sucess","Data added")}>Sucess</button>
                 <button onClick={()=>handleClick("error","file got broken")}>Error</button>
                 <button onClick={()=>handleClick("info","done")}>Info</button>
            </div>
            {/* <button onClick={() => userData.refetch()}>Get Users</button> */}
            {/* {userData.isFetching && (
            <div>Fetching user data...</div>
          )}
           {userData.data && userData.data.length > 0 && userData.data.map((user) => (
            <div>{user.name}</div>
          ))}
          {userData.isError && (
            <div>{`Error get data!!!`}</div>
          )} */}
            <button onClick={()=>addQuery.mutate({
                id:"1",post:"Ḥiii"
            })}>AppPost</button>
        </>
    )
}

export default ToastPage;