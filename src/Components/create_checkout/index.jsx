import axios from "axios"
import CardPaymentComponent from "./cardpay"
import DirectAccountPaymentComponent from "./directpay"
import GooglePayComponent from "./gpay"

const Checkout = ()=>{

    return (
       <div style={{backgroundColor:"red"}}>
        <GooglePayComponent/>
      {/* <CardPaymentComponent/> */}
        {/* <DirectAccountPaymentComponent/>   */}
        </div>
    )
}

export default Checkout