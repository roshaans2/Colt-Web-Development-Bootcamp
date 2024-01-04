import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './components/ShoppingList'

function App() {
  
  const data = [
    {id:1,item:"eggs",quantity:12,completed:false},
    {id:2,item:"milk",quantity:1,completed:true},
    {id:3,item:"chicken breasts",quantity:4,completed:false},
    {id:4,item:"carrot",quantity:6,completed:true}
  ]
  
  return (
    <>
      <ShoppingList items={data} />
    </>
  )
}

export default App
