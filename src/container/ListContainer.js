import React, {useState, useEffect}  from 'react';

import styled from 'styled-components';
import {color} from '../theme';
import NewListModal from '../components/NewListModal';
import NewJob from '../components/NewJob';
import { render } from '@testing-library/react';

const MainContainer = styled.div`

`;

const TopSection = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem auto;
`;

const SearchContainer = styled.div` 
    display: flex;
    width: 30rem;
    height: 2rem;
    padding-left: 0.5rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 0.1rem solid gray;
`;

const SearchInput = styled.input`
    width: 100%;
    background-color: transparent;
    padding: 0.5rem;
    border-style: none;
`;

const SearchBtn = styled.h4`
    padding: 0.3rem;
    color: ${color.primary};
    background-color: ${color["sky-blue"]};
    margin: auto;
`;

const AddBtn = styled.button`
    width: 2rem;
    height: 2rem;
    margin-left: 2rem;
    padding: 0.1rem;
    border-radius: 50%;
    font-weight: bolder;
    font-size: 1.6rem;
    background-color: ${color.primary};
    color: ${color.white};
    border-style: none;
`;

const JobContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    margin: 1rem 5rem;

`;

const ListContainer = ({jobs, setJobs}) => {

    const [modal, setModal] = useState(false);

    const renderJobCard = () => {
        console.log(jobs);
        if(jobs)
            return jobs.map(job => <NewJob job={job} key={job.id} deleteJob={deleteJob} />)
    }

    const deleteJob = (jobId) => {
        const remainingJob = jobs.filter(job => job.id !== jobId);
        setJobs(remainingJob);
    }

    useEffect(()=> {
        if(localStorage.getItem("user_id")){
            fetch(`http://localhost:3000/users/${localStorage.getItem("user_id")}`)
            .then(resp => resp.json())
            .then(data=>setJobs(data.jobs))
        }
    }, []);


    return(
        <MainContainer>
            {modal? <NewListModal setModal={setModal} setJobs={setJobs} jobs={jobs}/> : null}
            <TopSection>
                <SearchContainer>
                    <SearchInput name="name" type="text" placeholder="Search" />
                    <SearchBtn>
                        Submit
                    </SearchBtn>
                </SearchContainer>
                <AddBtn onClick={()=>setModal(true)}>
                    +
                </AddBtn>
            </TopSection>
            <JobContainer>
            { renderJobCard() }
            </JobContainer>
        </MainContainer>
    )
}

export default ListContainer;