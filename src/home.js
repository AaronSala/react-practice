import { useState } from "react";
const Home = ()=>{
    //let name = "Aaron";
   const [name, setName] = useState ('Aaron');
   const [age, setAge]= useState (25)

    const handleClick=()=>{
     setName('Sala');
     setAge (34)
    } 
    
    return(
        <div className="home">
         <h2>Home Page</h2>
        <p>{name } is {age} years old</p>
         <button onClick={()=>handleClick()}> click me</button><br/>
         
    </div>
);
    }
export default Home;