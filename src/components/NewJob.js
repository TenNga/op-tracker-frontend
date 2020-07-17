import React from 'react';

import styled from 'styled-components';

import {color} from '../theme';
import { IoMdCloseCircleOutline } from "react-icons/io";
{/* <ion-icon name="trash-outline"></ion-icon> */}

const NewJobCard = styled.div`
    position: relative;
    margin: 1rem;
    width: 17rem;
    padding 0.5rem;
    border: 0.1rem solid black;
    border-radius: 0.6rem;
`;

const Title = styled.h3`
    border-bottom: 0.07rem solid gray;
    padding: 0.1rem;
`;
const Role = styled.h5`
    margin-top: 1rem;
`;
const Date = styled.h5`
    margin-top: 1rem;
`;
const Link = styled.button`
    border-style: none;
    padding: 0.5rem;
    border-radius: 1rem;
    font-weight: bold;
    margin-top: 1rem;
`;
const Note = styled.p`
    margin-top: 1rem;
`;

const StatusSuccess = styled.h6`
    text-align: center;
    font-size: 1rem;
    color: blue;
`;

const StatusReject = styled.h6`
    text-align: center;
    font-size: 1rem;
    color: red;
`;

const StatusHold = styled.h6`
    text-align: center;
    font-size: 1rem;
    color: green;
`;

const Cross = styled.div`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    cursor: pointer;
`;

const NewJob = ({job}) => {

    const handleClose = () => {
        
    }
    return(
        <NewJobCard>
            <Title>{job.company}</Title>
            <Cross onClick={}><IoMdCloseCircleOutline /></Cross>
            <Role>{job.role} </Role>
            <Date>{job.date}</Date>
            <Link href={job.link}>Link to application.</Link>
            <Note>Descriptiondlsdfs sdf jlsdjf lmvl smvl ldflsdfs </Note>
            {job.status === "Rejected"? <StatusReject>{job.status}</StatusReject> : 
                job.status === "Waiting"? <StatusHold>{job.status}</StatusHold> : 
                    <StatusSuccess>{job.status}</StatusSuccess>}
        </NewJobCard>
    )
}

export default NewJob;