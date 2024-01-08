import { useState } from 'react'
import './App.css'
import EmojiClicker from './components/EmojiClicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <EmojiClicker/>
  )
}

export default App
