import React from 'react';
import {color} from '../../theme';

import styled from 'styled-components';
import { useForm } from "react-hook-form";

const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 10rem 20rem;
    position: absolute;
    top: 0;
    left: 0;
    background-color: gray;
`;

const NewListForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const ListInput = styled.input`
    margin: 1rem 5rem;
    border-style: none;
    height: 2rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
`;

const ListTextarea = styled.textarea`
    
    margin: 1rem 5rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
`;

const SaveBtn = styled.input`
    margin: 1rem 5rem;
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


const NewListModal = () => {

    const { register, handleSubmit, watch, errors} = useForm();

    return(
        <ModalContainer>
            <h1>New Opportunity List</h1>
            <NewListForm>
                <ListInput name="company" type="text" placeholder="Company Name" />
                <ListInput name="role" type="text" placeholder="Role" />
                <ListInput name="Link" type="text" placeholder="Link to the job description" />
                <ListInput name="date" type="date" placeholder="Date Applied" />
                <ListInput name="status" type="text" placeholder="Status" />
                <ListTextarea name="note" type="text" placeholder="Description" />
                <SaveBtn name="submit" value="save" />
            </NewListForm>
        </ModalContainer>
    )
}

export default NewListModal;