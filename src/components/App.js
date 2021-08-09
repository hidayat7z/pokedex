import './App.css';
import React, { Component } from "react";
import { pokemonData } from './../data/pokemonData'
import { Pokedex } from './pokedex/Pokedex';
import background from "./image.jpg";


class App extends Component
{

  constructor()
  {
    super();

    this.state = {
      searchField : '',
      pokemons: [],
      selectedPokemon: null,
    }
  }


  componentDidMount()
  {
    this.setState(
      {
        pokemons: pokemonData
      }
    );
  }

  handlePokeSearch = (searchValue) =>
  {
    //console.log(searchValue)
    this.setState({searchField: searchValue});
  }

  handleClick = (name) =>
  {
    const { pokemons } = this.state;
    //const pokemons= this.state.pokemons;

    let selectedPokemon= pokemons.find(x=> x.name === name);
    this.setState({selectedPokemon})
  }

  render()
  {
    const searchField=  this.state.searchField;
    const pokemons= this.state.pokemons;

    let searchedPokemons = pokemons.filter(x=>
                            {
                              return x.name
                                ? x.name.toLowerCase().includes(searchField.toLowerCase())
                                : false
                            })

    return(
      <div className="App" style={{ backgroundImage: `url(${background})` }}>   {/*background image*/}
    
        <h1>Pokedex</h1>
        <Pokedex 
              handlePokeSearch= {this.handlePokeSearch}
              pokemons={searchedPokemons}
              handleClick= {this.handleClick}
              selectedPokemon={this.state.selectedPokemon}/>  
              
      </div>
      //selectedPokemon={this.state.selectedPokemon}/>    this.state.selectedPokemon and not this.selectedPokemon
    )
  }
}

export default App;