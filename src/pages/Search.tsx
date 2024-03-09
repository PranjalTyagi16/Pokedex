import React, { useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getinitialPokemonData } from "../app/reducers/getinitialPokemonData";
import { getPokemonData } from "../app/reducers/getPokemonData";
import PokemonCardGrid from "../components/PokemonCardGrid";
import { debounce } from "../utils/Debounce";
function Search(){
    const dispatch=useAppDispatch();
    const {allPokemon,randomPokemons}=useAppSelector(({pokemon})=>pokemon);
    //It looks like you are using the useAppSelector hook, which is likely from a Redux setup with TypeScript, and you are extracting the allPokemon property from the pokemon slice of the Redux store.
    //const { allPokemon }: This is another destructuring assignment, extracting the allPokemon property from the object returned by useAppSelector. The assumption here is that the pokemon property contains an object with an allPokemon property.
    useEffect(()=>{
        dispatch(getinitialPokemonData());
    },[dispatch]);

    useEffect(()=>{
    if(allPokemon){
      const clonedPokemons=[...allPokemon];
      const randomPokemonsId=clonedPokemons.sort(()=>Math.random()-Math.random()
      ).slice(0,20);
      dispatch(getPokemonData(randomPokemonsId));
    }
    },[allPokemon,dispatch]);

    const handleChange=debounce((value:string)=>getPokemon(value),300);


    const getPokemon=async(value:string)=>{
        if(value.length){
            const pokemons=allPokemon?.filter((pokemon)=>pokemon.name.includes(value.toLowerCase()));
            dispatch(getPokemonData(pokemons!));
        }
    else{
      const clonedPokemons=[...(allPokemon as [])];
      const randomPokemonsId=clonedPokemons.sort(()=>Math.random()-Math.random()
      ).slice(0,20);
      dispatch(getPokemonData(randomPokemonsId));
    }
    };


    return (
    <>
    <div className="search">
        <input type="text" className="pokemon-searchbar" placeholder="Search Pokemon"
        onChange={(e)=>handleChange(e.target.value)}
        />
        <PokemonCardGrid pokemons={randomPokemons!}/>
    </div>
    </>
    );
}
export default Wrapper(Search);