import React from 'react';
import { Link  } from 'react-router-dom';

import styled from 'styled-components';
import { text, color } from '../theme';

const NavBarContainer = styled.div`
    padding: 1rem;
    width: 100vw;
    background-color: ${color.primary};
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
      }

`;

const NavHeader = styled.h1`
    margin-left: 6rem;
    font-size: ${text.heading.xsmall};
    color: ${color.white};
    text-transform: uppercase;

    @media only screen and (max-width: 600px) {
        margin-left: 0.5rem;
        font-size: ${text.heading.xxsmall};
    }
`;

const Menu = styled.ul`
    display: flex;

    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
`;

const Text = styled.li`
    list-style: none;
    color: ${color.white};
    font-size: ${text.heading.xxxsmall};
    margin-right: 6rem;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
        margin-right: 0.5rem;
        margin-top: 1rem;
        padding: 0.2rem;
        background-color: ${color["sky-blue"]};
        border-radius: 0.5rem;
        color: ${color.lake};
        font-size: 1rem;
      }
`;

const Navbar = ({setRegister, setUser, setJobs}) => {
    
    const handleLogOut = () => {
        setUser("");
        setJobs("");
        localStorage.removeItem("user_id")
    }

    return(
        <NavBarContainer>
            <NavHeader>Oppotunity Tracker</NavHeader>
            <Menu>
                    <Link to={"/mission"} style={{ textDecoration: 'none' }}><Text>Mission</Text></Link>
                    {localStorage.getItem("user_id")? 
                    <Text onClick={handleLogOut}>Logout</Text>:
                    <Text onClick={()=> setRegister(true)}>Register</Text> }
            </Menu>
        </NavBarContainer>
    )
}

export default Navbar;