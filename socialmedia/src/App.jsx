import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile></Profile>
    </>
  )
}

export default App
