import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import './App.module.css';

function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <>
      <Navbar />
      
      <Outlet context={[cartList, setCartList]}/>
    </>
  )
}

export default App
