
import { useEffect,useState } from "react";

function Card(){
    

    const [form,setForm]=useState([])
   
    useEffect(()=>{
        getrecipe()
    },)
    
    const getrecipe =()=>{
        fetch("http://localhost:3001/recipe")
        .then((data)=>data.json())
        .then((res) =>{
          
            setForm([res])
            console.log(form)
        })
    }

    return(
<>
    {form.map((e)=>(
       
        <div>{e.title}</div>
    ))}
   
</>
    )
}


export default Card