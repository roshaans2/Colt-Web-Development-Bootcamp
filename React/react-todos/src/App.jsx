import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  
  return (
    <>
    <h1>Todos</h1>
      <TodoList/>
    </>
  )
}

export default App
