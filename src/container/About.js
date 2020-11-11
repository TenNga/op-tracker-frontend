import React from 'react';
import styled from 'styled-components';
import { Link  } from 'react-router-dom';

import { color } from '../theme';

const AboutContainer = styled.div`
    width: 100%;
    heigth: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;

    @media only screen and (max-width: 600px) {
        display: block;
        padding-bottom: 2rem;
      }
`;

const Img = styled.img`
    object-fit: cover;
    width:100%;
    height: 100%;
    vertical-align: middle;
`;

const AboutDescription = styled.div`
    margin: 10rem 2rem;
`;

const Heading = styled.h1`
    font-size: 1.2rem;
`;

const Text = styled.p`
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-size: 1rem;
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
    cursor: pointer;
`;

const About = () => {
    return(
        <AboutContainer>
            <Img src="about_img.png" alt="Men Multitask" />
            <AboutDescription>
                <Heading>Mission</Heading>
                <Text>Built a platform where every job seeker will enjoy the process of tracking there jobs with a beautiful user interface and user experience.</Text>
                <Heading>Problem</Heading>
                <Text>Let's admit it, most of us hate the process of job search just like me and what worst part in this is the process of keeping track. Yes, you may use Google Excel or Google sheet but for me personally I hate using table and rows because If I need to find something I need to scoll throught all the item plus it doesn't have any graphics.</Text>
                <Heading>Solution</Heading>
                <Text>Solution for someone who hate/dislike table and row: Opportunity Tracker, where user will be able to store as much of their job opportunity and update along the way with a beautiful card representation for each jobs. </Text>

                <Link to={"/"} style={{ textDecoration: 'none'}}><BackBtn>HOME</BackBtn></Link>
            </AboutDescription>
        </AboutContainer>
    )
}

export default About;