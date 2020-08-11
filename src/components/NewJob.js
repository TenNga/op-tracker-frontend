import React, {useState} from 'react';

import styled from 'styled-components';

import {color} from '../theme';
import { IoMdCloseCircleOutline, IoMdCreate } from "react-icons/io";
{/* <ion-icon name="trash-outline"></ion-icon> */}

const NewJobCard = styled.div`
    position: relative;
    margin: 1rem;
    width: 17rem;
    padding 0.5rem 0.5rem 2rem 0.5rem;
    box-shadow:  20px 20px 60px #d9d9d9, 
             -20px -20px 40px #ffffff;
    border-radius: 0.6rem;
    transition: all 0.3s ease-in-out;
    
    :hover{
        transform: scale(1.03);
    }
`;

const Title = styled.h3`
    border-bottom: 0.07rem solid gray;
    padding: 0.1rem;
`;
const Role = styled.h5`
    margin-top: 1rem;

    @media only screen and (max-width: 835px) {
        font-size: 0.7rem;
    }
`;
const Date = styled.h5`
    margin-top: 1rem;

    @media only screen and (max-width: 835px) {
        font-size: 0.7rem;
    }
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

    @media only screen and (max-width: 835px) {
        font-size: 0.8rem;
    }
`;
const Note = styled.p`
    margin-top: 1rem;

    @media only screen and (max-width: 600px) {
        display: none;
    }

    @media only screen and (max-width: 835px) {
        font-size: 0.8rem;
    }
`;

const MoreOrLess = styled.p`
    display: none;

    @media only screen and (max-width: 600px) {
        display: block;
        font-weight: bolder;
        margin-top: 0.2rem;
        text-decoration: underline;
}
`;

const Expand = styled.p`
    display: none;

    @media only screen and (max-width: 600px) {
        display: block;
    }
`;

const StatusSuccess = styled.h6`
    text-align: center;
    font-size: 1rem;
    color: ${color.status.green};
`;

const StatusReject = styled.h6`
    text-align: center;
    font-size: 1rem;
    color: ${color.status.red};
    margin-top: 0.5rem;
`;

const StatusHold = styled.h6`
    text-align: center;
    font-size: 1rem;
    color: ${color.status.blue};
    margin-top: 0.5rem;
`;

const Action = styled.div`
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

    @media only screen and (max-width: 600px) {
        padding: 0.1rem;
    }
`;

const NewJob = ({job,deleteJob,handleUpdate,bgc}) => {

    const [expand, setExpand] = useState(false);

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

    const handleExpand = () => setExpand(!expand);


    return(
        <NewJobCard style={{backgroundColor: bgc}}>
            <Title>{job.company}</Title>
            <Action><IoMdCreate onClick={()=>handleUpdate(job)} size={30}/><IoMdCloseCircleOutline onClick={handleClose} size={30} /></Action>

            <Role>Role: {job.role} </Role>
            <Date>Applied on: {job.date}</Date>
            <Link href={job.link} target="_blank">Link to application</Link>
            <Note>Note: {job.note}</Note>
            <MoreOrLess onClick={handleExpand}> {expand? "less" : "more..."} </MoreOrLess>
            {expand? <Expand>Note: {job.note}</Expand> : null}
            <Status>
                {job.status.toUpperCase() === "REJECTED"? <StatusReject>{job.status.toUpperCase()}</StatusReject> : 
                                job.status.toUpperCase() === "WAITING"? <StatusHold>{job.status.toUpperCase()}</StatusHold> : 
                                    <StatusSuccess>{job.status.toUpperCase()}</StatusSuccess>}
            </Status>
            
            
        </NewJobCard>
    )
}

export default NewJob;