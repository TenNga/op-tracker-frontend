import React from 'react';
import './App.css';

import Navbar from './container/Navbar';
import Login from './container/Login';

import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Rubik', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Login />
    </AppContainer>
  );
}

export default App;
