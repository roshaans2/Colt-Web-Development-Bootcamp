import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBoxGrid from './components/ColorBoxGrid'

function App() {
  
  return (
    <ColorBoxGrid colors={["red","green","blue","yellow","orange","pink","purple"]}/>
  )
}

export default App
