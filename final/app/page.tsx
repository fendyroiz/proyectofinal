"use client"
import { useState } from "react"

const Page = () => {
  
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [contador, setContador] = useState(0);


  function contar(){
    setContador(contador + 1);
  }

  function limpiar(){
    setContador(0);

    setEdad(0);//Falta quitar que en la consola al momento de limpiar no 
    //marque menor de edad por el cero
    setNombre('');
  }

  const manejadorFormulario = (e: any)=>{
    e.preventDefault();
    
  
    if(edad >= 18){//PRESTAR MAS ATENCION EN LOS SIGNOS, QUE COMETO ERROS POR ESO
      console.log("Es mayor de edad");

    }else {
      console.log("Es menor de edad");
      
    }
    
  }

  return (
    <div style ={{backgroundColor: "#FCE4EC"}}>
      
      <h1>Proyecto final</h1>
      <h2>Estructura de datos</h2>
      <h3>{nombre}</h3>
       <button 
       onClick={contar}
       >
        Contar
       </button>
      <p>{contador} numeros de clicks </p>
      
      <button 
       onClick={limpiar}
       >
        Limpiar
       </button>
       <p> la lista se encuentra limpia </p>
      
       <form
        onSubmit={manejadorFormulario}
       >

        <input type="text" placeholder= "Nombre"
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}

        />

          
    
        <input type="text" placeholder= "Edad"
        value={edad}
        onChange={(e)=>setEdad(parseInt(e.target.value))}
        

          />

        <input type="submit" />
        
      <button 
       onClick={limpiar}
       >
        Limpiar
       </button>
       <p> limpiamos los campos </p>
      

       </form>
        <h3>{nombre}</h3>




    </div>
  )
}

export default Page
