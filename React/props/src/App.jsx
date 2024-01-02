import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './components/Greeter'
import Dice from './components/Dice'
import ListPicker from './components/ListPicker'
import DoubleDice from './components/DoubleDice'
import Heading from './components/Heading'
import ColorList from './components/ColorList'
import SlotMachine from './components/SlotMachine'


function App() {
  

  return (
    <>
     <Heading/>
     <ColorList colors={["red","pink","purple","teal"]}/>
     <SlotMachine value1={1} value2={1} value3={1}/>
     <Heading color='indianred' text="Welcome"/>
     <Greeter name="Deepak" from = "Varun"/> 
     <Greeter/>
     <Greeter name="pranav"/>
     {/* Passing non-string props */}
     <Dice numSides={20}/>
     <Dice numSides={6}/>
     <Dice numSides={10}/>
     <Dice/>
     {/* Passing array */}
     <ListPicker values={[1,2,3]}/>
     <ListPicker values={["a","b","c"]}/>
     <DoubleDice/>
    </>
  )
}

export default App
