import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navegacion() {
    const navigate = useNavigate()

    const handlelogout = () =>{
      localStorage.removeItem("token")
    }

  return (
    <div>
      <button onClick={ ()=> navigate("/login") } >login</button>
      <button onClick={()=> navigate("/signup")}  >sign up</button>
      <button onClick={()=> navigate("/protected")} >protected</button>      
      <button onClick={()=> navigate("/")} >index</button>      
      <button onClick={()=>handlelogout()} >logout</button>      
    </div>
  )
}

export default Navegacion
