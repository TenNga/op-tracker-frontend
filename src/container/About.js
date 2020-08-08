import React from 'react';
import styled from 'styled-components';
import { Link  } from 'react-router-dom';

import { color } from '../theme';

const AboutContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const Img = styled.img`
    object-fit: cover;
    width:100%;
`;

const AboutDescription = styled.div`
    margin: 2rem;
`;

const Text = styled.p`
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const BackBtn = styled.button`
    margin-top: 4rem;
    width: 5rem;
    padding: 0.5rem;
    border-style: none;
    background-color: ${color.lake};
    color: ${color.white};
    font-weight: bold;
    border-radius: 1rem;
`;

const About = () => {
    return(
        <AboutContainer>
            <Img src="about_img.png" alt="Men Multitask" />
            <AboutDescription>
                <h1>Mission</h1>
                <Text>Built a plateform where everyone job seeker will enjoy the process of tracking there jobs with a beautiful user interface and user experience.</Text>
                <h1>Problem</h1>
                <Text>Lets admit it, everyone hate the process of job search just like me and what worst in this process of keeping track of all the job you applied. Yes, you may use Google Excel or Google sheet but for me personally I hate using table and rows where If I need to find something I need to scoll throught all the item.</Text>
                <h1>Solution</h1>
                <Text>Solution for someone who hate/dislike table and row: Oppotunity Tracker, where user will be able to store as much of their job oppotunity and update along the way. </Text>

                <Link to={"/"} style={{ textDecoration: 'none' }}><BackBtn>HOME</BackBtn></Link>
            </AboutDescription>
        </AboutContainer>
    )
}

export default About;