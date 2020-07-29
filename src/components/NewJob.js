import React from 'react';

import styled from 'styled-components';

import {color} from '../theme';
import { IoMdCloseCircleOutline } from "react-icons/io";
{/* <ion-icon name="trash-outline"></ion-icon> */}

const NewJobCard = styled.div`
    position: relative;
    margin: 1rem;
    width: 17rem;
    padding 0.5rem 0.5rem 2rem 0.5rem;
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
const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    background-color: ${color.secondary};
    color: ${color.primary};
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.4rem;
    border-radius: 1rem;
    margin-top: 1rem;
    cursor: pointer;
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
    margin-top: 0.5rem;
`;

const StatusHold = styled.h6`
    text-align: center;
    font-size: 1rem;
    color: green;
    margin-top: 0.5rem;
`;

const Cross = styled.div`
    position: absolute;
    right: 0rem;
    top: 0rem;
    cursor: pointer;
`;

const Status = styled.div`
    position: absolute;
    bottom: 0;
    left: 1;
    padding: 0.5rem;
`;

const NewJob = ({job,deleteJob,bgc}) => {

    const handleClose = () => {
        fetch(`http://localhost:3000/jobs/${job.id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data=>{
            //if job is not able to delete alert, otherwise delete from frontend.
            if(data.success)
                deleteJob(job.id);
            else 
                alert(data.errors);
        }) 
    }

    return(
        <NewJobCard style={{backgroundColor: bgc}}>
            <Title>{job.company}</Title>
            <Cross onClick={handleClose}><IoMdCloseCircleOutline size={30} /></Cross>
            <Role>Role: {job.role} </Role>
            <Date>Applied on: {job.date}</Date>
            <Link href={job.link} target="_blank">Link to application</Link>
            <Note>Note: {job.note}</Note>
            <Status>
                {job.status.toUpperCase() === "REJECTED"? <StatusReject>{job.status.toUpperCase()}</StatusReject> : 
                                job.status.toUpperCase() === "WAITING"? <StatusHold>{job.status.toUpperCase()}</StatusHold> : 
                                    <StatusSuccess>{job.status.toUpperCase()}</StatusSuccess>}
            </Status>
            
        </NewJobCard>
    )
}

export default NewJob;