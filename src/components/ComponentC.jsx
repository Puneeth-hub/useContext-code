import React from "react";
import { UseContext } from "../App";
const ComponentC=()=>{
    return(
        <div>
            <center>
                <UseContext.Consumer>
                {value => <p>{value}</p>}
                </UseContext.Consumer>
            </center>
        </div>
    )
}
export default ComponentC