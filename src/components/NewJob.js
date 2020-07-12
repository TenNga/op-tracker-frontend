import React from 'react';

import styled from 'styled-components';

const NewJobCard = styled.div`
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

const NewJob = ({job}) => {
    return(
        <NewJobCard>
            <Title>{job.company}</Title>
            <Role>{job.role} </Role>
            <Date>Date</Date>
            <Link href="">Link to application.</Link>
            <Note>Descriptiondlsdfs sdf jlsdjf lmvl smvl ldflsdfs </Note>
        </NewJobCard>
    )
}

export default NewJob;