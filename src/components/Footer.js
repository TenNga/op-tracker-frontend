import React from 'react';

import styled from 'styled-components';
import { color } from '../theme';

const FooterContainer = styled.footer`
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 1rem;
    width: 100vw;
    background-color: ${color.primary};
    color: ${color.white};

    @media only screen and (max-width: 600px) {
        font-size: 0.6rem;
      }

`;

const Footer = () => {
    return(
        <FooterContainer>
            Copyright 2020 Kevin Karma. All rights reserved.
        </FooterContainer>
    )
}

export default Footer;