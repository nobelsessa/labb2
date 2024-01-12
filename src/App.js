import React from 'react';
import { PokeProvider } from './PokeContext';
import Komponent1 from './Komponent1';
import Komponent2 from './Komponent2';
import Komponent3 from './Komponent3';
import Komponent4 from './Komponent4';
import Komponent5 from './Komponent5';
import Komponent6 from './Komponent6';
import Komponent7 from './Komponent7';
import Komponent8 from './Komponent8';
import styled, { createGlobalStyle } from 'styled-components';
import PokeData from './PokeData';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    color: #fff; 
    margin: 0; 
    padding: 0; 
    font-family: 'Arial', sans-serif; 
  }
`;


const StyledHeader = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
  color: #ff0; 
`;


const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const App = () => {
  return (
    <PokeProvider>
      <div>
        <GlobalStyle />

        <StyledHeader>POKEMON API</StyledHeader>

        <StyledFlexContainer>
          <Komponent1 />
          <Komponent2 />
          <Komponent3 />
          <Komponent4 />
        </StyledFlexContainer>

        <StyledFlexContainer>
          <Komponent5 />
          <Komponent6 />
          <Komponent7 />
          <Komponent8 />
        </StyledFlexContainer>

        <div>
          <PokeData />
        </div>
      </div>
    </PokeProvider>
  );
};

export default App;


