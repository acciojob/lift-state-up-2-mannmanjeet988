import React,{useState}  from "react"
import Style from "./style.css"
import Child from "./Child"


const Parent = () =>{

    const[text,SetText] = useState("")

return (
    <div class="parent">
        <h1>Parent Component</h1>  
        <p>{text}</p> 

        <Child  SetText={SetText} />
    </div>
)

}

export default Parent;