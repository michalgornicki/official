import React from "react";
import Twitter from "../twitter.png";
import Devto from "../devto.png";


const Social = () => {

    return (

        
        <div id="container6" className="d-flex flex-row m-auto w-75">


        <div className="w-50"><a href="https://twitter.com/Michal_FrontEnd"><img className="twitter" src={Twitter} alt="" /></a></div>
        <div className="w-50"><a href="https://dev.to/michalgornicki"><img className="twitter" src={Devto} alt="" /></a></div>

        </div>
    )
}

export default Social;