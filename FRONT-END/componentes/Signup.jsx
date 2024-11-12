import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [message, setmessage] = useState("");
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;

    try {
      let response = await axios.post("http://localhost:3000/signup", {
        username,
        password,
      });  

      setTimeout(()=>{
        navigate("/login")
      }, 2000)

      setmessage(response.data.message);
    } catch (error) {
      setmessage(error.response.data.message)
    }
    

    
  };

  return (
    <div>
      <h1>sign up</h1>

      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="">user</label>
        <input type="text" name="username" id="username" />
        <div></div>
        <label htmlFor="">password</label>
        <input type="password" name="password" id="" />
        <button type="submit">sign up</button>
      </form>
      {message && <p> {message} </p>}
    </div>
  );
}

export default Signup;
