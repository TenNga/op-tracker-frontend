import React, {useState} from 'react';
import {color} from "../theme";

import styled from 'styled-components';
import { useForm } from "react-hook-form";

const ModalContainer = styled.div`
    text-align: center;
    width: 100vw;
    height: 100vh;
    padding: 10rem 20rem;
    position: fixed;
    top: 0;
    left: 0;
    color: ${color.white};
    background-color: rgb(56, 128, 135,0.8);
    z-index: 4;

    @media only screen and (max-width: 600px) {
        padding: 4rem 0 0 0;
    }
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

    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`;

const StatusOption = styled.select`
    margin: 1rem auto;
    border-style: none;
    width: 50%;
    height: 2rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: ${color.white};

    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`;

const DateInput = styled.input`
    margin: 1rem auto;
    width: 50%;
    border-style: none;
    height: 2rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: ${color.white};

    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`;

const ListTextarea = styled.textarea`
    background-color: ${color.white};
    width: 50%;
    height: 8rem;
    margin: 1rem auto;
    border-radius: 0.5rem;
    padding: 0.5rem;

    @media only screen and (max-width: 600px) {
        width: 80%;
    }
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

const ErrorMsg = styled.p`
    text-align: center;
    color: red;
`;


const NewListModal = ({setModal,setJobs,jobs, updateData,setUpdateData}) => {

    const { register, handleSubmit, errors} = useForm(updateData?{
        defaultValues: updateData
    }: "");
    const [loading,setLoading] = useState(false)

    //When click Cancel, clear form and close Modal
    const handleCancel = () => {
        setUpdateData("");
        setModal(false);
    }

    const errorMsg =(err) =>{
        return err && err.type === "required" && <ErrorMsg>Must not be empty!</ErrorMsg>
    }

    const onSubmit = data => {
        if(updateData){
            setLoading(true);
            fetch(`https://powerful-river-66214.herokuapp.com/jobs/${updateData.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                  "Accepts": "application/json"
                },
                body: JSON.stringify(data)
              }).then(resp => resp.json())
              .then(updatedData => {
                  const jobsWithoutUpdate =  jobs.map(job => {
                    if(job.id !== updatedData.id)
                        return job;
                    else
                        return updatedData;
                    });
                  setJobs(jobsWithoutUpdate);
                  setModal(false);
                  setUpdateData("");
                  setLoading(false);
              });
        }
        else {
            setLoading(true);
            fetch("https://powerful-river-66214.herokuapp.com/jobs", {
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
                    setLoading(false);
                })
        }
    }

    return(
        <ModalContainer>
            <h1>New Opportunity</h1>
            <NewListForm onSubmit={handleSubmit(onSubmit)}>
                <ListInput name="company" type="text" placeholder="Company Name" ref={register({required: true})}/>
                {errorMsg(errors.company)}
                <ListInput name="role" type="text" placeholder="Role" ref={register({required: true})}/>
                {errorMsg(errors.role)}
                <ListInput name="link" type="text" placeholder="Link to the job description" ref={register({required: true})}/>
                {errorMsg(errors.link)}
                <DateInput name="date" type="date" placeholder="Date Applied" ref={register({required: true})}/>
                {errorMsg(errors.date)}
                <StatusOption name="status" ref={register}>
                    <option value="interviewing">Interviewing</option>
                    <option value="waiting">Waiting</option>
                    <option value="rejected">Rejected</option>
                </StatusOption>
                <ListTextarea name="note" type="text" placeholder="Description" ref={register()}/>
                <BtnContainer>
                    <CancelBtn onClick={handleCancel}>Cancel</CancelBtn>
                    <SaveBtn type="submit" value={loading? "Loading" :updateData? "Update" :"save"} />
                </BtnContainer>
            </NewListForm>
        </ModalContainer>
    )
}

export default NewListModal;