import React, {useState} from 'react';
import styled from 'styled-components';


const WelcomeVideoContainer = styled.div`
      display: block;
      margin-top: 5rem;

      @media only screen and (max-width: 735px) {
        display: none;
      }
`;

const WelcomeVideoContainer = () => {
    return(
        <WelcomeVideoContainer>
                    <TabBtnContainer>
                        <TabBtn onClick={()=>setTabValue("welcome")}>Welcome</TabBtn>
                        <TabBtn onClick={()=>setTabValue("demo")}>Demo</TabBtn>
                    </TabBtnContainer>
                    {tabValue === "welcome"? <WelcomeNote>one place to track all your opportunities</WelcomeNote>:
                    <OpTrackerVideo  muted autoPlay loop>
                        <source src="OpTracker_intro.mp4" type="video/mp4" />
                    </OpTrackerVideo>
                    }
                    
        </WelcomeVideoContainer>
    )
}

export default WelcomeVideoContainer;