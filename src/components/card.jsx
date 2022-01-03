
import "./card.css"

import { useEffect,useState } from "react";

function Card(){
    

    const [form,setForm]=useState([])
   
    useEffect(()=>{

       getrecipe();

    }, )
    
    const getrecipe =()=>{
        fetch("http://localhost:3001/recipe")
        .then((data)=>data.json())
        .then((res) =>{
          
            setForm(res)
            console.log(form)
        })
    }

    return(
<>
    {form.map((e)=>(
       
        <div className="box2"><h1>title:{e.title}</h1>
           
        <h1>cooking time:{e.cooking_time}</h1>
     <img src={e.image} alt="img"></img>
        </div>
    ))}
   
</>
    )
}


export default Card