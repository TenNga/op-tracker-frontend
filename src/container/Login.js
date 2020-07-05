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
   width:20rem;
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

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const LoginInput = styled.input`
    text-align: center;
    margin: 2rem auto 0 auto;
    padding: 0 0.5rem;
    color: ${color.primary};
    width: 17rem;
    height: 2rem;
    border-radius: .2rem;
    border: 1px solid gray;
`;

const LoginSubmit = styled.input`
    text-align: center;
    margin: 2rem auto 0 auto;
    padding: 0 0.5rem;
    color: ${color.primary};
    font-weight:bolder;
    text-transform: uppercase;
    background-color: ${color.white};
    width: 17rem;
    height: 2rem;
    border-radius: .2rem;
    border: 2px solid ${color.primary};
`;
const Login = () => {
    return(
        <MainContainer>
            <WelcomeNote>one place to tracke all your oppotunity</WelcomeNote>
            <LoginContainer>
                <LoginHeader>Login</LoginHeader>
                <LoginForm>
                    <LoginInput id="user-name" type="text" placeholder="Username"/>
                    <LoginInput id="password" type="password" placeholder="password"/>
                    <LoginSubmit type="submit" value="Login" />
                </LoginForm>
            </LoginContainer>
        </MainContainer>
    )
}

export default Login;