import React, { useState }  from 'react';
import './App.css';

import Navbar from './container/Navbar';
import Login from './container/Login';
import ListContainer from './container/ListContainer';

import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Rubik', sans-serif;
`;

function App() {

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [user, setUser] = useState("");
  const [jobs, setJobs] = useState("");


  return (
    <AppContainer>
      <Navbar login={login} setRegister={setRegister} />
      {!user?
      <Login clickRegister = {register} setRegister = {setRegister} setUser = {setUser} />
      :
      <ListContainer user={user} jobs={jobs} setJobs={setJobs} />
    }

    </AppContainer>
  );
}

export default App;
