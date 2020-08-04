import React, { useState }  from 'react';
import { BrowerRouter, Route, Link} from 'react-router-dom';
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
    <BrowerRouter>
      <AppContainer>
        <Navbar setRegister={setRegister} setJobs = {setJobs} setUser={setUser} />
        
        <Route path="/login" render={()=> <Login clickRegister = {register} setRegister = {setRegister} setUser={setUser} /> } />
        <Route path="/joblists" render={()=><ListContainer jobs={jobs} setJobs={setJobs} />} />

        {!localStorage.getItem("user_id")?
        <Login clickRegister = {register} setRegister = {setRegister} setUser={setUser} />
        :
        <ListContainer jobs={jobs} setJobs={setJobs} />
      }

      </AppContainer>
    </BrowerRouter>
  );
}

export default App;
