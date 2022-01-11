import React from "react";
import Twitter from "../twitter.png";
import Devto from "../devto.png";


const Social = () => {

    return (
        <div id="container6 d-flex flex-row">

        <a href="https://twitter.com/Michal_FrontEnd"><img className="twitter" src={Twitter} alt="" /></a>
        <a href="https://dev.to/michalgornicki"><img className="twitter" src={Devto} alt="" /></a>

        </div>
    )
}

export default Social;