import React from 'react'
import "./RandomPokemon.css"

const RandomPokemon = () => {
    const number = Math.floor((Math.random()*151)) + 1
    const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`
    return(
        <div>
            <h1>{number}</h1>
            <img src={imgLink}/>
        </div>
    )
}

export default RandomPokemon