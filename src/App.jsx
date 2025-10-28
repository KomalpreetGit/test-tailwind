import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './navbar'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Content/>
    </>
  )
}

export default App
