import React, {useState} from 'react';
import styled from 'styled-components';

import { text, color } from '../theme';

import { useForm } from "react-hook-form";

const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const WelcomeNote = styled.h1`
    width: 50%;
    font-size: ${text.heading.xxlarge};
    margin: 10rem 4rem;
    color: ${color.primary};
    text-transform: capitalize;
`;

const RegisterImg = styled.img`
    width: 50%;
    margin-top: 3rem;
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
    cursor: pointer;
`;

const ErrorMsg = styled.p`
    text-align: center;
    color: red;
`;

const Login = ({clickRegister, setRegister, setUser}) => {

    const { register, handleSubmit, watch, errors} = useForm();

    const [loading,setLoading] = useState(false);

    const onSubmit = data => {
        //console.log("Register Status", clickRegister)
        if(!clickRegister){
            setLoading(true);
            fetch("https://powerful-river-66214.herokuapp.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json",
                },
                body: JSON.stringify({
                    username: data.username.toUpperCase(),
                    password: data.password
                })
            }).then(resp => resp.json())
            .then(data => {
                if(data.errors) {
                    setLoading(false);
                    alert(data.errors);
                }
                else{
                    setLoading(false);
                    localStorage.setItem("user_id", data.id);
                    setUser(data);
                };
            })
        } else {
            fetch("https://powerful-river-66214.herokuapp.com/users", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
                },
                body: JSON.stringify({
                user_name: data.username.toUpperCase(),
                password: data.password,
                role: data.role
                })
                })
            .then(resp=>resp.json()) //only if you want to get the data back
            .then(data => {
                if(data.errors) {
                    setLoading(false);
                    alert(data.errors);
                }
                else{
                    setRegister(false);
                    setUser(data);
                    localStorage.setItem("user_id", data.id);
                };
            })
        }
    };

    return(
        <MainContainer>
            {
                clickRegister? <RegisterImg src="register.png" alt="computer desk" /> :
                <WelcomeNote>one place to track all your opportunities</WelcomeNote>
            }
            <LoginContainer>
                <LoginHeader>{clickRegister? "register" : "Login" }</LoginHeader>

                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                    
                    <LoginInput name="username" type="text" placeholder="Username" ref={register({required: true})}/>
                    {errors.username && <ErrorMsg>Required Field!</ErrorMsg>}

                    <LoginInput name="password" type="password" placeholder="password" ref={register({required: true, minLength: 6})}/>
                    {errors.password && errors.password.type === "required" && <ErrorMsg>Password must not be empty!</ErrorMsg>}
                    {errors.password && errors.password.type === "minLength" && <ErrorMsg>Minimum length 6!</ErrorMsg>}
                    {clickRegister?
                    <>
                    <LoginInput name="confirmPassword" type="password" placeholder="Confirm password" ref={register({
                        validate: (value) => {
                            return value === watch('password'); // value is from password2 and watch will return value from password1
                          }
                    })}/> 
                    {errors.confirmPassword && <ErrorMsg>Password need to be same!</ErrorMsg>}

                    <LoginInput name="role" type="text" placeholder="Role" ref={register({required: true})}/> 
                    {errors.username && <ErrorMsg>Required Field!</ErrorMsg>}

                    <LoginSubmit type="submit" value="Sign Up" />
                    <Text>Already have an accout? <LinkSpan onClick={()=> setRegister(false)}>SignIn</LinkSpan></Text>
                    </>:
                    loading? <LoginSubmit value="Loading" />:<LoginSubmit type="submit" value="Login" />}
                </LoginForm>

            </LoginContainer>
        </MainContainer>
    )
}

export default Login;