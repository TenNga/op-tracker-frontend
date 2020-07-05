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
    padding: 0.5rem;
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

const Text = styled.p`
    color: ${color.primary};
    text-align: center;
    margin: 1rem;
`;

const LinkSpan = styled.span`
    font-weight: bold;
`;

const Login = ({register, setLogin}) => {

    return(
        <MainContainer>
            <WelcomeNote>one place to tracke all your oppotunity</WelcomeNote>
            <LoginContainer>
                <LoginHeader>{register? "register" : "Login" }</LoginHeader>
                <LoginForm>
                    <LoginInput id="user-name" type="text" placeholder="Username"/>
                    <LoginInput id="password" type="password" placeholder="password"/>
                    {register?
                    <>
                    <LoginInput id="confirmPassword" type="password" placeholder="Confirm password"/> 
                    <LoginSubmit type="submit" value="Sign Up" />
                    <Text>Already have an accout? <LinkSpan>SignIn</LinkSpan></Text>
                    </>:
                    <LoginSubmit type="submit" value="Login" />}

                    
                </LoginForm>
            </LoginContainer>
        </MainContainer>
    )
}

export default Login;