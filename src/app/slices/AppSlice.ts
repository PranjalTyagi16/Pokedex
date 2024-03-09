import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Types";
import { pokemonTabs } from "../../utils/Constants";

const initialState:AppTypeInitialState={
    toasts:[],
    userInfo:undefined,
    currentPokemonTab:pokemonTabs.description,
    
};
//toasts are nothing just custom messages that user wants to give in his project
//or we can say when we click on something it works just like prompt in javascript
export const AppSlice= createSlice({
    name:"app",
    initialState,
    reducers:{
        setToast:(state,action)=>{
       const toasts=[...state.toasts];
       toasts.push(action.payload);
       state.toasts=toasts;
        },
        clearToasts:(state)=>{
            state.toasts=[];
        },
        setUserStatus:(state,action)=>{
            state.userInfo=action.payload;
        },
        setPokemonTab:(state,action)=>{
            state.currentPokemonTab=action.payload;
        },
    },
});


export const {setToast,clearToasts,setUserStatus,setPokemonTab}=AppSlice.actions;