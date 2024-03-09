import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatedPokemonType, genericPokemonType } from "../../utils/Types";
import axios from "axios";
import { pokemonsRoute } from "../../utils/Constants";
import { defaultImages, images } from "../../utils/getPokemonimages";
import { types } from "util";
import { pokemonTypes } from "../../utils/getPokemonTypes";

export const getPokemonData=createAsyncThunk("pokemon/randomPokemon",async(pokemons:genericPokemonType[])=>{
 try{
  const pokemonsData:generatedPokemonType[]=[];
  for await(const pokemon of pokemons){
    const {data}:{
        data:{
            id:number;
            types:{type:generatedPokemonType}[];
        };
    }=await axios.get(pokemon.url);
    const types=data.types.map(({type:{name}}:{type:{name:string}})=>({
        //@ts-expect-error
        [name]:pokemonTypes[name],
    })
    );
    //It looks like you're using destructuring and mapping over an array of objects (data.types). In the mapping function, you are extracting the name property from the nested type object. The TypeScript type annotation :{type:{name:string}} indicates the expected structure of each object in the array.
    // @ts-expect-error
  let image:string=images[data.id];
  if(!image){
    // @ts-expect-error
    image=defaultImages[data.id];
  }
  if(image){
    pokemonsData.push({
        name:pokemon.name,
        id:data.id,
        image,
        types,
    });
  }
  }
  return pokemonsData;
 }catch(err){
   console.log(err);
 }
});