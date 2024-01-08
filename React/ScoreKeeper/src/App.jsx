import { useState } from 'react'

import './App.css'
import ScoreKeeper from './components/ScoreKeeper'


function App() {
  return (
    <ScoreKeeper numPlayers={3} target={5}/>
  )
}

export default App
