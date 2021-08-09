import React from "react"
import {Pokecard} from "../pokecard/Pokecard"
import './pokelist.css'

export const Pokelist = ({handlePokeSearch, pokemons, handleClick}) =>
{
    return(
        <div className="pokelist">

            

            {
                pokemons.map( x=>
                    {
                        let sprite= null;
                        try{
                            sprite= JSON.parse(x.sprites);
                            sprite= sprite.normal;
                        }
                        catch(error)
                        {
                         
                        }

                        return x.name ? <Pokecard 
                                            key= {x.id}
                                            id= {x.id}
                                            name={x.name}
                                            y={sprite}
                                            handleClick= {handleClick}/>
                                      : null;
                    }
                )
            }

        </div>
          )
}