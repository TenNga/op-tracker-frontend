import React, {useState, useEffect}  from 'react';

import styled from 'styled-components';
import {color} from '../theme';
import NewListModal from '../components/NewListModal';
import NewJob from '../components/NewJob';
import SearchBar from '../components/SearchBar';
import { getJobs } from '../lib/actions/jobs.actions';

const MainContainer = styled.div`
    margin-bottom: 4rem;
`;

const JobContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    margin: 1rem 5rem;
    
    @media only screen and (max-width: 600px) {
        margin: 0.2rem;
      }
`;

const Instruction = styled.h1`
      width: 100vw;
      text-align: center;
      color: ${color.primary};
`;

const Loading = styled.div`
      :before {
          content: "";
          box-sizing: border-box;
          position: absolute;
          top:50%;
          left: 50%;
          height: 100px;
          width: 100px;
          margin-top: -50px;
          marign-left: -50px;
          border-radius: 50%;
          border-top: 10px solid ${color.primary};
          border-right: 10px solid transparent;
          animation: spinner 0.7s ease infinite;
      }

      @keyframes spinner {
          to {
              transform: rotate(360deg);
          }
      }
`;

const ListContainer = ({jobs, setJobs}) => {

    const [modal, setModal] = useState(false);
    const [filterJobs, setFilterJobs] = useState(null);
    const [updateData, setUpdateData] = useState("");
    const [loading,setLoading] = useState(false)

    const handleUpdate = (job) => {
        setUpdateData(job)
        setModal(true);
    }


    const renderJobCard = () => {
        //if no search result then display all the jobs
        if(filterJobs)
            return filterJobs.map(job => <NewJob job={job} key={job.id} deleteJob={deleteJob} />)
        else if(jobs)
            return jobs.map(job => <NewJob 
                                        job={job} 
                                        key={job.$id} 
                                        deleteJob={deleteJob} 
                                        handleUpdate={handleUpdate} 
                                        bgc={color.mix[parseInt(Math.random()*5)]} 
                                    />)
    }

    //given the id of the job, delete the job from state
    const deleteJob = (jobId) => {
        const remainingJob = jobs.filter(job => job.id !== jobId);
        setJobs(remainingJob);
    }

    //execute this function on every changes
    const handleOnChange= e => {
        // console.log("value: ", e.target.value);
        const result = jobs.filter(job => job.company.toUpperCase().includes(e.target.value.toUpperCase()));
        setFilterJobs(result);
    }

    //componentDidMount, execute only once
    useEffect(()=> {
            setLoading(true);
        const fetchJobs = async () => {
            if(localStorage.getItem("user_id")){
                setLoading(true);
                const jobs = await getJobs();
                console.log(jobs);
                jobs && setJobs(jobs);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return(
        <MainContainer>
            {modal? <NewListModal 
                            setModal={setModal} 
                            setJobs={setJobs} 
                            jobs={jobs} 
                            updateData={updateData} 
                            setUpdateData = {setUpdateData}
                    /> : null}
            <SearchBar handleOnChange = {handleOnChange} setModal = {setModal}/>
            <JobContainer>
                {loading? <Loading></Loading> : jobs.length < 1? <Instruction>Click on + symbol to add your first jobs</Instruction>: null}
            { renderJobCard() }
            </JobContainer>
        </MainContainer>
    )
}

export default ListContainer;