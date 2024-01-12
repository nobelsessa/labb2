import React, { useState, useEffect } from 'react';
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

const Komponent6 = () => {
  const [showMove, setShowMove] = useState(false);
  const [moveData, setMoveData] = useState(null);
  const apiUrl = 'https://pokeapi.co/api/v2/move/17/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMoveData(data);
      } catch (error) {
        console.error('Error fetching Move data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  const handleButtonClick = () => {
    setShowMove(true);
  };

  const handleCloseClick = () => {
    setShowMove(false);
  };

  return (
    <StyledContainer>
      <StyledImage
        src={process.env.PUBLIC_URL + 'wing.png'} 
        alt="Move"
      />
      {!showMove && <StyledButton onClick={handleButtonClick}>Visa Move</StyledButton>}
      {showMove && (
        <div>
          <h2>Information om Move från PokeAPI:</h2>
          {moveData && (
            <div>
              <p>Name: {moveData.name}</p>
              <p>Power: {moveData.power}</p>
              <p>Accuracy: {moveData.accuracy}</p>
              <StyledCloseButton onClick={handleCloseClick}>Stäng</StyledCloseButton>
            </div>
          )}
        </div>
      )}
    </StyledContainer>
  );
};

export default Komponent6;
