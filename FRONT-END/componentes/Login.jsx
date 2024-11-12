import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login() {

  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const handlelogin = async (e) => {
    e.preventDefault()

    let username = e.target.username.value 
    let password = e.target.password.value 

    try {
      let results = await axios.post("http://localhost:3000/login", {username, password})

      let token  = results.data.token

      localStorage.setItem("token", token  )

      setMessage("loguado con exito")

      setTimeout(()=>{
        navigate("/protected")
      },2000)

    } catch (error) {
      setMessage(error.response.data.message)
    }


  }

  return (
    <div>
      <h1>login</h1>

      <form onSubmit={handlelogin} method="post">
        <label htmlFor="">user</label>
        <input type="text" name="username" id="a" />
        <div></div>
        <label htmlFor="">password</label>
        <input type="password" name="password" id="asdf" />
        <button>log in</button>
      </form>
      { message && <p> {message} </p> }
    </div>
  )
}

export default Login
