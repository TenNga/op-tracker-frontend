import React from 'react';
import styled from 'styled-components';

import { color, text } from '../theme';

const TopSection = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem auto;

    @media only screen and (max-width: 600px) {
        margin: 0.3rem 0.5rem;
    }
`;

const SearchContainer = styled.div` 
    display: flex;
    width: 30rem;
    height: 2rem;
    padding-left: 0.5rem;
    text-align: left;
    border-radius: 0.9rem;
    border: 0.09rem solid gray;

    
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
    border-left: 0.09rem solid gray;
    margin-right: 0.5rem;
    cursor: pointer;
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

    @media only screen and (max-width: 600px) {
        font-size: 1rem;
        margin-left: 0.5rem;
        width: 3rem;
        
`;

const SearchBar = ({handleOnChange, setModal}) => {
    return(
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
        )
}

export default SearchBar;