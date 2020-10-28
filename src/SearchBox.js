import React from 'react';
import styled from 'styled-components/macro';

const SearchBox = ({searchChange}) => {
    
    return(
    <div>
        <Input 
            type='search' 
            placeholder='search image' 
            onChange={searchChange}
        />
    </div>
    );
};

const Input = styled.input`
    border: black;
    height: 30px;
    width: 160px;
    font-size: 20px;
    color: #191919;
`;
export default SearchBox;