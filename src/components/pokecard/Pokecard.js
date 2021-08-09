import React from "react";
import './pokecard.css';

export const Pokecard = ({id, name, y, handleClick}) =>
{
    return(

        <div className="pokecard" onClick= {()=> handleClick(name)}>

           {
                id <=200 ? 
                        <img className="pokemon-sprite" alt="pokemon" src={y} /> 
                         : null
           }
           <div className="pname"><p className="pname">{name}</p></div>
            
        </div>
    )
}

