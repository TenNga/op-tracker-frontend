import React, {useState}  from 'react';

import styled from 'styled-components';
import {color} from '../theme';
import NewListModal from '../components/css/NewListModal';

const MainContainer = styled.div`

`;

const TopSection = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem auto;
`;

const SearchContainer = styled.div` 
    display: flex;
    width: 30rem;
    height: 2rem;
    padding-left: 0.5rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 0.1rem solid gray;
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
    background-color: ${color["sky-blue"]};
    margin: auto;
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
`;

const ListContainer = () => {

    const [modal, setModal] = useState(false);

    return(
        <MainContainer>
            {modal? <NewListModal /> : null}
            <TopSection>
                <SearchContainer>
                    <SearchInput name="name" type="text" placeholder="Search" />
                    <SearchBtn>
                        Submit
                    </SearchBtn>
                </SearchContainer>
                <AddBtn onClick={()=>setModal(true)}>
                    +
                </AddBtn>
            </TopSection>
        </MainContainer>
    )
}

export default ListContainer;