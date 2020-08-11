import React from 'react';

import styled from 'styled-components';
import { color } from '../theme';

const FooterContainer = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 1rem;
    width: 100vw;
    background-color: ${color.primary};
    color: ${color.white};
`;

const Footer = () => {
    return(
        <FooterContainer>
            <h1>Footer here</h1>
        </FooterContainer>
    )
}

export default Footer;