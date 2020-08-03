import React, { useState, useEffect }  from 'react';
import './App.css';

import Navbar from './container/Navbar';
import Login from './container/Login';
import ListContainer from './container/ListContainer';

import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Rubik', sans-serif;
`;

function App() {

  const [register, setRegister] = useState(false);
  const [jobs, setJobs] = useState("");
  const [user,setUser] = useState("");



  return (
    <AppContainer>
      <Navbar setRegister={setRegister} setJobs = {setJobs} setUser={setUser} />
      {!localStorage.getItem("user_id")?
      <Login clickRegister = {register} setRegister = {setRegister} setUser={setUser} />
      :
      <ListContainer jobs={jobs} setJobs={setJobs} />
    }

    </AppContainer>
  );
}

export default App;
