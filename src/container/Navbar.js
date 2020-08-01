import React from 'react';
import styled from 'styled-components';
import { text, color } from '../theme';

const NavBarContainer = styled.div`
    padding: 1rem;
    width: 100vw;
    background-color: ${color.primary};
    display: flex;
    justify-content: space-between;

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
        display: none;
      }
`;

const Text = styled.li`
    list-style: none;
    color: ${color.white};
    font-size: ${text.heading.xxxsmall};
    margin-right: 6rem;
`;

const Navbar = ({setRegister, login}) => {
    return(
        <NavBarContainer>
            <NavHeader>Oppotunity Tracker</NavHeader>
            <Menu>
                    <Text>About Us</Text>
                    {localStorage.getItem("user_id")? 
                    <Text onClick={()=> localStorage.removeItem("user_id")}>Logout</Text>:
                    <Text onClick={()=> setRegister(true)}>Register</Text> }
            </Menu>
        </NavBarContainer>
    )
}

export default Navbar;