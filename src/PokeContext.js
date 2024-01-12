import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  pokemonData: [],
};

const PokeContext = createContext();

const pokeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMON_DATA':
      return { ...state, pokemonData: action.payload };
    default:
      return state;
  }
};

const PokeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokeReducer, initialState);

  const setPokemonData = data => {
    dispatch({ type: 'SET_POKEMON_DATA', payload: data });
  };

  return (
    <PokeContext.Provider value={{ ...state, setPokemonData }}>
      {children}
    </PokeContext.Provider>
  );
};

const usePokeContext = () => {
  const context = useContext(PokeContext);
  if (!context) {
    throw new Error('usePokeContext must be used within a PokeProvider');
  }
  return context;
};

export { PokeProvider, usePokeContext };
