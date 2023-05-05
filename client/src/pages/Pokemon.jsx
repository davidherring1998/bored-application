import React from "react";
import { useEffect, useState } from "react";
import "../css/pages/pokemon.css";

function Pokemon() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const handleInputChange = (e) => setInput(e.target.value);

  const URL = `https://pokeapi.co/api/v2/pokemon/${input}`;

  const searchPokemon = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) =>
        setPokemon({
          name: input,
          species: data.species.name,
          img: data.sprites.front_default,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          type: data.types[0].base_stat,
        })
      )
      .then((data) => console.log(data.sprites.front_default))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bgImageOne">
      <div className="main-pokemon-container">
        <div className="pokemon-header">
          <h2 className="page-header">
            {pokemon.name ? pokemon.name.toUpperCase() : `Find Your Pokemon!`}
          </h2>
        </div>
        <div className="pokemon-img">
          {pokemon.img ? <img src={pokemon.img} alt="" /> : <div></div>}
        </div>
        <div className="input">
          <input
            className="pokemon-input"
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <br /> <br />
        </div>
        <div className="btn-div">
          <button className="input-btn" onClick={searchPokemon}>
            Find your Pokemon
          </button>
        </div>
      </div>
      {pokemon.name ? (
        <div className="result-container">
          <p>
            Species: <span>{pokemon.species.toUpperCase()}</span>
          </p>
          <p>
            HP: <span>{pokemon.hp}</span>
          </p>
          <p>
            Attack: <span>{pokemon.attack}</span>
          </p>
          <p>
            Defense: <span>{pokemon.defense}</span>
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Pokemon;
