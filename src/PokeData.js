import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePokeContext } from './PokeContext';

const StyledPokeData = styled.div`
  color: #000; 
`;

const PokemonList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PokemonItem = styled.li`
  padding: 8px;
  background-color: #f0f0f0;
  margin-bottom: 8px;
  border-radius: 4px;
`;

const StyledHeading = styled.h2`
color: #ff0; 
`;

const PokeData = () => {
  const { pokemonData, setPokemonData } = usePokeContext();
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setPokemonData(data.results);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, [setPokemonData]);

  return (
    <StyledPokeData>
      <StyledHeading>Pokemon karaktärer:</StyledHeading>
      <PokemonList>
        {pokemonData.map((pokemon, index) => (
          <PokemonItem key={index}>{pokemon.name}</PokemonItem>
        ))}
      </PokemonList>
    </StyledPokeData>
  );
};

export default PokeData;
