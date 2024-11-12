import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navegacion from '../componentes/Navegacion'
import Splash from '../componentes/Splash'
import Signup from '../componentes/Signup'
import Login from '../componentes/Login'
import Protected from '../componentes/Protected'



function App() {
  const [isAuth, setisAuth] = useState(false)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    let token = localStorage.getItem("token")

    if (!token){
      setisAuth(false)
      setloading(false)
      return
    } 

    setisAuth(true)
    setloading(false)

  }, [])

  if(loading){
    return <div>loading...</div>    
  }
  


  return (
  <BrowserRouter>
    <Navegacion></Navegacion>
    <Routes>
      <Route path='/' element={ <Splash></Splash>  } ></Route>
      <Route path='/signup' element={ <Signup></Signup>  } ></Route>
      <Route path='/login' element={ <Login></Login>  } ></Route>
      <Route path='/protected' element={ isAuth ? <Protected></Protected> : <Login></Login>  } ></Route>
    </Routes>  
  </BrowserRouter>
  )
}

export default App
