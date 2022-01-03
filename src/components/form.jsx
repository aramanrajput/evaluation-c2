import { useEffect,useState } from "react";
import "./form.css"
function Form(){
    const [form,setForm]=useState({
        title:"",
        ingredients:"",
        cooking_time:"",
        image:"",
        instructions:""
    })

    const handlechange = (e)=> {

        const{name,value} =e.target
        console.log(e.target.name)

        setForm({
            ...form,
            [name]:value
        })


        
    }



useEffect(()=>{
    getrecipe()
},[])

    const getrecipe =()=>{
        fetch("http://localhost:3001/recipe")
        .then((data)=>data.json())
        .then((res) =>{
            setForm(res)
        })
    }


    const addrecipe = ()=>{

            const payload = {
                title:form.title,
        ingredients:form.ingredients,
        cooking_time:form.cooking_time,
        image:form.image,
        instructions:form.instructions
            }

            fetch("http://localhost:3001/recipe",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "content-type":"application/json"
                }
            })

        
        }

        
    return(
        <div className="box">
            <h2>Add Recipe</h2>
    <input onChange={handlechange} type="text" name='title' placeholder="add name" />
            <input onChange={handlechange} type="text"  placeholder="add ingriedients" name='ingredients' />
            <input onChange={handlechange} type="text"  placeholder="add cooking time" name='cooking_time' />
            <input onChange={handlechange} type="text"  placeholder="image" name='image' />
            <input onChange={handlechange} type="text"  placeholder="add instructions" name='instructions' />
            <button onClick={addrecipe}>add recipe</button>
        </div>
        
        
   
    )
}



export default Form