import React from 'react';
import {color} from "../theme";

import styled from 'styled-components';
import { useForm } from "react-hook-form";

const ModalContainer = styled.div`
    text-align: center;
    width: 100vw;
    height: 100vh;
    padding: 10rem 20rem;
    position: absolute;
    top: 0;
    left: 0;
    color: ${color.white};
    background-color: rgb(56, 128, 135,0.8);
`;

const NewListForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0rem auto;
`;

const ListInput = styled.input`
    margin: 1rem auto;
    border-style: none;
    width: 50%;
    height: 2rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: ${color.white};
`;

const DateInput = styled.input`
    margin: 1rem auto;
    width: 50%;
    border-style: none;
    height: 2rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: ${color.white};
`;

const ListTextarea = styled.textarea`
    background-color: ${color.white};
    width: 50%;
    margin: 1rem auto;
    border-radius: 0.5rem;
    padding: 0.5rem;
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SaveBtn = styled.input`
    margin: 1rem 1rem;
    width: 6rem;
    height: 2rem;
    border-style: none;
    border-radius: 0.4rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: ${color.primary};
    color: white;
    text-align: center;
`;

const CancelBtn = styled.button`
    margin: 1rem 0rem;
    width: 6rem;
    height: 2rem;
    border-style: none;
    border-radius: 0.4rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: ${color.secondary};
    color: ${color.primary};
    text-align: center;
`;


const NewListModal = ({setModal,setJobs,jobs}) => {

    const { register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        fetch("http://localhost:3000/jobs", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
                },
                body: JSON.stringify({...data,user_id: localStorage.getItem("user_id")})
                })
            .then(resp=>resp.json()) //only if you want to get the data back
            .then(data => {
                if(data.errors) 
                    alert(data.errors);
                else{
                    setJobs([...jobs,data]);
                    setModal(false);
                };
            })
    }

    return(
        <ModalContainer>
            <h1>New Opportunity</h1>
            <NewListForm onSubmit={handleSubmit(onSubmit)}>
                <ListInput name="company" type="text" placeholder="Company Name" ref={register({required: true})}/>
                <ListInput name="role" type="text" placeholder="Role" ref={register({required: true})}/>
                <ListInput name="link" type="text" placeholder="Link to the job description" ref={register({required: true})}/>
                <DateInput name="date" type="date" placeholder="Date Applied" ref={register({required: true})}/>
                <ListInput name="status" type="text" placeholder="Status" ref={register({required: true})}/>
                <ListTextarea name="note" type="text" placeholder="Description" ref={register()}/>
                <BtnContainer>
                    <CancelBtn onClick={()=>setModal(false)}>Cancel</CancelBtn>
                    <SaveBtn type="submit" value="save" />
                </BtnContainer>
            </NewListForm>
        </ModalContainer>
    )
}

export default NewListModal;