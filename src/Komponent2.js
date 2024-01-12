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

const Komponent2 = () => {
  const [showDitto, setShowDitto] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPokemonData(data);
      setShowDitto(true);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  const handleCloseClick = () => {
    setShowDitto(false);
  };

  return (
    <StyledContainer>
      <StyledImage
        src={process.env.PUBLIC_URL + 'ditto.png'}
        alt="Ditto"
      />
      {!showDitto && <StyledButton onClick={fetchData}> Ditto</StyledButton>}
      {showDitto && (
        <div>
          <StyledCloseButton onClick={handleCloseClick}>Stäng</StyledCloseButton>
          <h2>Information om Ditto:</h2>
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

export default Komponent2;
