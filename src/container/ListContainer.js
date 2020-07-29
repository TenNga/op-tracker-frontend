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
    const [filterJobs, setFilterJobs] = useState([]);

    const handleUpdate = () => {
        setModal(true);
    }


    const renderJobCard = () => {
        //if no search result then display all the jobs
        if(filterJobs.length > 0)
            return filterJobs.map(job => <NewJob job={job} key={job.id} deleteJob={deleteJob} />)
        else if(jobs)
            return jobs.map(job => <NewJob job={job} key={job.id} deleteJob={deleteJob} handleUpdate={handleUpdate} bgc={color.mix[parseInt(Math.random()*5)]} />)
    }

    //given the id of the job, delete the job from state
    const deleteJob = (jobId) => {
        const remainingJob = jobs.filter(job => job.id !== jobId);
        setJobs(remainingJob);
    }

    //execute this function on every changes
    const handleOnChange= e => {
        console.log("value: ", e.target.value);
        const result = jobs.filter(job => job.company.toUpperCase().includes(e.target.value.toUpperCase()));
        setFilterJobs(result);
    }

    //componentDidMount, execute only once
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
                    <SearchInput name="name" type="text" placeholder="Search" 
                    onChange={handleOnChange} />
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