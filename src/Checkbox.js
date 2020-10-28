import React from 'react';
import styled from 'styled-components/macro';

const Checkbox = ({tagName, checkedTags, onBoxClick}) => {
    
    
    return(
        <Container>
            <Input type="checkbox" defaultChecked={checkedTags} onClick={() => onBoxClick(tagName)}></Input>
            <P>{tagName}</P>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 15px;
    align items: center;
`;
const Input = styled.input `
`;

const P = styled.p`
    margin: 0px;
    color: #C2C2C2;
    font-size: 20px;
    margin-left: 5px;
`;

export default Checkbox;