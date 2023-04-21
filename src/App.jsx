import React from 'react'  
import ComponentC from './components/ComponentC'
import ComponentB from './components/ComponentB'


export const UseContext = React.createContext()
const App=()=>{
    return(
        <div>
            <center>
                <UseContext.Provider value={"Puneeth is Good boy"}>
                <ComponentC/>
                <ComponentB/>
                </UseContext.Provider>
            </center>
        </div>
    )
}
export default App