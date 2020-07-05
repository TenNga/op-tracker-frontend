import React, { useState }  from 'react';
import './App.css';

import Navbar from './container/Navbar';
import Login from './container/Login';
import Register from './container/Register';

import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Rubik', sans-serif;
`;

function App() {

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <AppContainer>
      <Navbar login={login} setRegister={setRegister} />
      {!login?
      <Login clickRegister = {register} setLogin = {setLogin} />
      :
      <Register />
    }

    </AppContainer>
  );
}

export default App;
