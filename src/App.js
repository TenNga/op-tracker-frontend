import React, { useState }  from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Navbar from './container/Navbar';
import Login from './container/Login';
import ListContainer from './container/ListContainer';
import About from './container/About';

import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Rubik', sans-serif;
`;

function App() {

  const [register, setRegister] = useState(false);
  const [jobs, setJobs] = useState("");
  const [user,setUser] = useState("");



  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar setRegister={setRegister} setJobs = {setJobs} setUser={setUser} />

        <Route path="/mission" render={()=> <About />} />
        <Route exact path="/" render={()=>
          !localStorage.getItem("user_id")?
            <Login clickRegister = {register} setRegister = {setRegister} setUser={setUser} />
            :
            <ListContainer jobs={jobs} setJobs={setJobs} />
        } />

      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
