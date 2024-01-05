import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './components/Clicker'
import Form from './components/Form'
import Exercise from './components/Exercise'

function App() {
  return (
    <>
      {/* <Clicker/>
      <Form/> */}
      <Exercise message="HI!!!!" buttonText="Please Click Me"/>
      <Exercise message="Please Stop Clicking Me!" buttonText="do not click"/>
    </>
  )
}

export default App
