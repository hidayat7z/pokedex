import React from "react";
import './pokedex.css';
import { Pokelist } from '../pokelist/Pokelist'
import { PokeSearchResult } from "../pokeSearchResult/PokeSearchResult";
import { Searchbox } from '../searchbox/Searchbox'


export const Pokedex = ({handlePokeSearch, pokemons, handleClick, selectedPokemon}) =>
{
    return(
        <div className="pokedex-container">

            <div className="pokelist-container">

                <Searchbox handlePokeSearch= {handlePokeSearch}/>

                <Pokelist 
                handlePokeSearch= {handlePokeSearch}
                pokemons={pokemons}
                handleClick= {handleClick}/>
            </div>

            <div className="pokesearchresult-container">
                {
                    selectedPokemon
                        ? <PokeSearchResult 
                            showResult={true}
                            id={selectedPokemon.id}
                            name={selectedPokemon.name}
                            sprite={JSON.parse(selectedPokemon.sprites).animated}
                            height={selectedPokemon.height}
                            weight={selectedPokemon.weight}
                            base_experience={selectedPokemon.base_experience} />
                        : <PokeSearchResult
                            showResult={false} />
                }    
            
            </div>

        </div>
    )
}

