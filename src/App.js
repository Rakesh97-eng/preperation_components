import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useReducer, useState } from "react";
import "./App.css";
import Counter from "./Components/counter";
import Checkout from "./Components/create_checkout";
import Firstpage from "./Components/Firstpage";
import ImperativeInput from "./Components/imperativehanle";
import BasicModal from "./Components/modal";
import Post from "./Components/Post";
import AccordPage from "./pages/accordionpage";
import Checkbox from "./pages/checkbox";
import Debounce from "./pages/debounce";
import ScrollPage from "./pages/infinitescrollpage";
import First from "./pages/redux/first";
import ToastPage from "./pages/toastpage";

function App() {

  const reducer = (state,action)=>{
    console.log("state",state);
    return state + 1
  }


  const [count,setCount] = useReducer(reducer,0);
  const stripePromise = loadStripe(
    "pk_test_51PLggmB2aHHeshWOyavbPzMQDJbvWEYAGJT7f8nozzI5TCU4pdai4CZYSNIF1z2lPojbkGCAd4GGXsVmTvSzRLQM00rpnr2goY"
    
    );
    const [debounceValue,setDebounceValue] = useState()
    const [throttleValue,setThrottleValue] = useState()
    
    const Debounce = (cb)=>{
      let timeout;
      return (args)=>{
        console.log("argsss",args);
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
          cb(args)
        },1000)
      }
    }

    const handleClick = ()=>{
      setCount({type:"Action"})
    }



    function Throttle (cb){
      let timeout = false;
      return (args) => {
        console.log("fist",timeout);
        if (timeout){
          console.log("ciness");
          return 
        } // Exit if timeout is still active
        
        cb(args);  // Execute the callback if timeout is not active
        
        timeout = true;  // Set timeout to prevent further execution
        setTimeout(() => {
          console.log("Throttle reset", timeout);
          timeout = false;  // Reset the timeout after 1 second
        }, 1000);  // Delay duration
      };
    };
    

    const handleChange= Throttle((e)=>{
      const {value} = e?.target;
      console.log("valueee",value);
      setDebounceValue(value)
    })


  return (
    <div className="App">
      <button onClick={handleClick}>handleClick</button>
    {/* <First/> */}
      {/* <ToastPage/>  */}
      {/* <Firstpage/> */}
      {/* <Post/>
      <ToastPage/> 
      <Debounce/>
      <AccordPage/> */}
      <div>
        {/* <ScrollPage/> */}
        {/* <Checkbox/> */}
        {/* <Counter /> */}
        {/* <Elements stripe={stripePromise}>
          <Checkout />
        </Elements> */}
        {/* <ImperativeInput/> */}
        <BasicModal/>

        {/* <input onChange={(e)=>handleChange(e)}/>
        <p>Debounce Value : {debounceValue}</p> */}
      </div>
    </div>
  );
}

export default App;
