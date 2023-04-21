import React from "react";
import { UseContext } from "../App";
const ComponentB=()=>{
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
export default ComponentB