import logo from './logo.svg';
import './App.css';
import Greeter from './components/Greeter'
import LoginForm from './components/LoginForm';
import Expression from "./components/Expression"
import Die from "./components/Die"
import DiceRolls from './components/DiceRolls';
import RandomPokemon from './components/RandomPokemon';

function Greet(){
  return <h1>Hello</h1>
}

function Joke(){
  return <h1>This is a joke</h1>
}

function App() {
  return (
    <div>
      <Greet/> 
      <Joke/> 
      <Greeter/>
      <LoginForm/>
      <Expression/>
      <DiceRolls/>
      <DiceRolls/>
      <RandomPokemon/>
    </div>  
  );
}

export default App;
