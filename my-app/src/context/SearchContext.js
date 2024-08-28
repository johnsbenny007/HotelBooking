import { createContext, useReducer } from "react";

const initialState={
    destination:undefined,
    dates:[],
    options:{
        adult:undefined,
        children:undefined,
        rooms:undefined,
    }
};

export const SearchContext=createContext(initialState);

const SearchReducer=(state,action)=>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return initialState;
        default:
            return state;
    }
};

export const SearchContextProvider=({children})=>{
    const [state,dispatch]=useReducer(SearchReducer,initialState);

    return (
        <SearchContext.Provider
            value={
                {
                    destination:state.destination,
                    dates:state.dates,
                    options:state.options,
                    dispatch,
                }
            }
        >{children}
        </SearchContext.Provider>
    )
}