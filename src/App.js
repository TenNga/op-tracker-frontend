import React, { useState }  from 'react';
import './App.css';

import Navbar from './container/Navbar';
import Login from './container/Login';
import ListContainer from './container/ListContainer';

import styled from 'styled-components';
import BottomNavbar from './container/BottomNavbar';

const AppContainer = styled.div`
  font-family: 'Rubik', sans-serif;
`;

const BottomNav = styled.div`

`;

function App() {

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [jobs, setJobs] = useState("");
  const [user,setUser] = useState("");


  return (
    <AppContainer>
      <Navbar login={login} setRegister={setRegister} />
      {!localStorage.getItem("user_id")?
      <Login clickRegister = {register} setRegister = {setRegister} setUser={setUser} />
      :
      <ListContainer jobs={jobs} setJobs={setJobs} />
    }
    <BottomNav>
      <BottomNavbar />
    </BottomNav>

    </AppContainer>
  );
}

export default App;
