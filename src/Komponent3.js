import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const StyledCloseButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const Komponent3 = () => {
  const [showPokemon, setShowPokemon] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/1/';

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPokemonData(data);
      setShowPokemon(true);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  const handleCloseClick = () => {
    setShowPokemon(false);
  };

  return (
    <StyledContainer>
      <StyledImage
        src={process.env.PUBLIC_URL + 'bulbas.png'} 
        alt="Pokemon 1"
      />
      {!showPokemon && <StyledButton onClick={fetchData}>Bulbasaur</StyledButton>}
      {showPokemon && (
        <div>
          <StyledCloseButton onClick={handleCloseClick}>Stäng</StyledCloseButton>
          <h2>Information om Pokemon 1 från PokeAPI:</h2>
          {pokemonData && (
            <div>
              <p>Name: {pokemonData.name}</p>
              <p>Height: {pokemonData.height}</p>
              <p>Weight: {pokemonData.weight}</p>
            </div>
          )}
        </div>
      )}
    </StyledContainer>
  );
};

export default Komponent3;
