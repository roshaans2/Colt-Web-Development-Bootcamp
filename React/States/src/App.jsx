import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Toggler from './components/Toggler'

function App() {
  return (
    <div>
      <Counter/>
      <Toggler/>
    </div>
  )
}

export default App
