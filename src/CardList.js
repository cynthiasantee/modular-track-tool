import React from 'react';
import Card from './Card.js';
import styled from 'styled-components/macro';


const CardList = ( {list} ) => {
        return (
            <Container>
                {
                    list.map((l) => {
                    return (
                        <Card 
                            image={l.image} 
                            name={l.name} 
                            />
                    );
                })
            }
       </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 190px;
`;

export default CardList;