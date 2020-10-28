import React from 'react';
import styled from 'styled-components/macro';


const Card = ({image, name}) => {
    return(
        <Container>
            <ImageContainer>
                <Image src= {image}/>
            </ImageContainer>

            <Name>{name}</Name>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 400px; 
    height: 200px;
    margin: 5px;
    border: 1px solid gray;
    
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 151px;
    width: 380px;
`;
const Image = styled.img`
    display: flex;
    max-width: 100%;
    max-height: 100%;

`
const Name = styled.p`
    text-align: center;    
    margin: 0px;
    font-weight: bold;
    font-size: 25px;
    color: #C2C2C2;
`
export default Card;