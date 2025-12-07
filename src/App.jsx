import { useState } from 'react'
import './App.css'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
function App() {
  const [isLoggin, setisLoggin] = useState(true);


  return (
    (isLoggin ? <Login Loggin={setisLoggin} /> : <SignUp Loggin={setisLoggin} />)
  )
}

export default App
