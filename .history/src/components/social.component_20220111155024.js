import React from "react";
import Twitter from "../twitter.png";
import Devto from "../devto.png";


const Social = () => {

    return (

        
        <div id="container6">

        <div className="header">Visit my microblog and blog</div>
        <div className="d-flex flex-column flex-lg-row m-auto w-75 pt-5">
        <div className="w-50 w-"><a href="https://twitter.com/Michal_FrontEnd"><img className="twitter" src={Twitter} alt="" /></a></div>
        <div className="w-50"><a href="https://dev.to/michalgornicki"><img className="twitter" src={Devto} alt="" /></a></div>
        </div>

        </div>
    )
}

export default Social;