import { useState } from 'react'
import './App.css'
import BoxList from './box-maker-components/BoxList'
import TodoList from './Todo-components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoxList />
      <TodoList />
    </>
  )
}

export default App
