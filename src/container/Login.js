import React from 'react';
import styled from 'styled-components';

import { text, color } from '../theme';

import { useForm } from "react-hook-form";

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

const Login = ({clickRegister, setLogin}) => {

    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log("Register Status", clickRegister)
        if(!clickRegister){
            fetch("http://localhost:3000/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json",
                },
                body: JSON.stringify(data)
            }).then(resp => resp.json())
            .then(data => {
                data.errors? alert(data.errors) : console.log(data);
            })
        } else {
            console.log(data)
        }
    };

    return(
        <MainContainer>
            <WelcomeNote>one place to tracke all your oppotunity</WelcomeNote>
            <LoginContainer>

                <LoginHeader>{clickRegister? "register" : "Login" }</LoginHeader>

                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                    <LoginInput name="username" type="text" placeholder="Username" ref={register}/>
                    <LoginInput name="password" type="password" placeholder="password" ref={register}/>
                    {clickRegister?
                    <>
                    <LoginInput name="confirmPassword" type="password" placeholder="Confirm password" ref={register}/> 
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