import React,{useState} from "react"
import Style from "./style.css"

const Child = ({SetText}) =>{

    return (
        <div class="child">
             <h1>Child Component</h1>  
             <input  onChange={(e)=>SetText(e.target.value)}/>
        </div>
    )
    
    }
    
    export default Child;