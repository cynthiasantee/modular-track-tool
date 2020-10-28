import React from 'react';
import styled from 'styled-components/macro';
import Checkbox from './Checkbox';

const CheckboxList = ({taglist, checkedTags, onBoxClick}) => {
    return(
        <Container>
                {
                    taglist.map((l) => {
                    return (
                        <Checkbox 
                            tagName={l}
                            checkedTags={checkedTags.includes(l)}
                            onBoxClick={onBoxClick}
                         />
                    );
                })
            }
        </Container>
    );
};

const Container = styled.div`

`;

export default CheckboxList;