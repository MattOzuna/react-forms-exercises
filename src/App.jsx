import { useState } from 'react'
import './App.css'
import BoxList from './box-maker-components/BoxList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoxList />
    </>
  )
}

export default App
