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
    font-size: ${text.heading.xsmall};
    color: ${color.white};
    text-transform: uppercase;
`;

const Menu = styled.ul`
    display: flex;
`;

const Text = styled.li`
    list-style: none;
    color: ${color.white};
    font-size: ${text.heading.xxxsmall};
    margin-right: 6rem;
`;

const Navbar = () => {
    return(
        <NavBarContainer>
            <NavHeader>Oppotunity Tracker</NavHeader>
            <Menu>
                    <Text>About Us</Text>
                    <Text>Login</Text>
            </Menu>
        </NavBarContainer>
    )
}

export default Navbar;