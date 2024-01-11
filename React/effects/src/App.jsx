import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import QuoteFetcher from './components/QuoteFetcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Counter/>
    <QuoteFetcher/>
  )
}

export default App
