import React, {useState} from 'react';
import styled from 'styled-components';

import {color, text } from '../theme';

const WelcomeVideoMainContainer = styled.div`
      display: block;
      margin-top: 5rem;

      @media only screen and (max-width: 735px) {
        display: none;
      }
`;

const TabBtnContainer = styled.div`
      display: flex;
      justify-content: flex-end;
      
      border-radius: 8px 8px 0 0;
`;

const TabBtn = styled.button`
      display: block;
      margin-left: 15px;
      padding: 5px;
      background-color: ${color.primary};
      color: ${color.white};
      border: none;
      border-radius: 8px 8px 0 0;
      font-size: ${text.heading.xxsmall};

      &:hover {  
          background-color: ${color["sky-blue"]};
          color: ${color.primary};
        }
`;

const WelcomeNote = styled.h1`
    width: 60vw;
    font-size: ${text.heading.xxlarge};
    justify-content: center;
    justify-items: center;
    padding: 5vw 0;
    color: ${color.primary};
    text-transform: capitalize;
    border: 1px solid ${color.primary};
    border-radius: 8px 0 8px 8px; 
`;

const OpTrackerVideo = styled.video`
      border-radius: 0 0 8px 8px;
    //   margin-top: 5rem;
      width: 60vw;
      height: auto;

      @media only screen and (max-width: 735px) {
        display: none;
      }
`;


const WelcomeVideoContainer = () => {

    const [tabValue,setTabValue] = useState("welcome");

    return(
        <WelcomeVideoMainContainer>
                    <TabBtnContainer>
                        <TabBtn onClick={()=>setTabValue("welcome")}>Welcome</TabBtn>
                        <TabBtn onClick={()=>setTabValue("demo")}>Demo</TabBtn>
                    </TabBtnContainer>
                    {tabValue === "welcome"? <WelcomeNote>one place to track all your opportunities</WelcomeNote>:
                    <OpTrackerVideo  muted autoPlay loop>
                        <source src="OpTracker_intro.mp4" type="video/mp4" />
                    </OpTrackerVideo>
                    }
        </WelcomeVideoMainContainer>
    )
}

export default WelcomeVideoContainer;