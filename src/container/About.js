import React from 'react';

import styled from 'styled-components';

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

const About = () => {
    return(
        <AboutContainer>
            <Img src="about_img.png" alt="Men Multitask" />
            <AboutDescription>
                <h1>Mission</h1>
                <p>Lets admit it, everyone hate the process of job search just like me and what worst in this process of keeping track of all the job you applied. Yes, you may use Google Excel or Google sheet but for me personally I hate using table and rows where If I need to find something I need to scoll throught all the item.</p>
            </AboutDescription>
        </AboutContainer>
    )
}

export default About;