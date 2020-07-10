import React, { useState }  from 'react';
import './App.css';

import Navbar from './container/Navbar';
import Login from './container/Login';

import styled from 'styled-components';
import ListContainer from './container/ListContainer';

const AppContainer = styled.div`
  font-family: 'Rubik', sans-serif;
`;

function App() {

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <AppContainer>
      <Navbar login={login} setRegister={setRegister} />
      {/* {!login?
      <Login clickRegister = {register} setRegister = {setRegister} setLogin = {setLogin} />
      : */}
      <ListContainer />
    {/* } */}

    </AppContainer>
  );
}

export default App;
