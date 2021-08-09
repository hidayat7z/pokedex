import React from "react";
import './searchbox.css'

export const Searchbox = ({handlePokeSearch}) =>{
    return(
            <input 
                className="search" 
                type="search" 
                placeholder="Search"
                onChange= {e=>
                           {
                             handlePokeSearch(e.target.value);
                           }}

                />
          )   
}