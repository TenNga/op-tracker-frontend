import React from 'react';
import styled from 'styled-components';

import { text, color } from '../theme';

const MainContainer = styled.div`
    display: flex;
`;

const WelcomeNote = styled.h1`
    width: 50%;
    font-size: ${text.heading.xxlarge};
    margin: 10rem 4rem;
    color: ${color.primary};
    text-transform: capitalize;
`;
const LoginContainer = styled.div`
   
`;

const LoginHeader = styled.h1`
    text-align: center;
    text-transform: uppercase;
    color: ${color.primary};
    border: 1px solid ${color.primary};
    border-radius: 7px 7px 0px 0px;
    margin-top: 9rem;
    padding: 1rem;
`;
const Login = () => {
    return(
        <MainContainer>
            <WelcomeNote>one place to tracke all your oppotunity</WelcomeNote>
            <LoginContainer>
                <LoginHeader>Login</LoginHeader>
                <form>
                    <input id="user-name" type="text" />
                    <input id="password" type="password" />
                    <input type="submit" value="Login" />
                </form>
            </LoginContainer>
        </MainContainer>
    )
}

export default Login;