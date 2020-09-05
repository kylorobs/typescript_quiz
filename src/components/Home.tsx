import React from 'react';
import styled from 'styled-components';


const H1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@800&display=swap');

    font-size: 8rem;
    color: ${props => props.theme.colors.primary};
    margin: 4rem auto;
    text-align: center;
    font-family: 'Grandstander', cursive;
`

const home: React.FC = () => (
    <H1>Quickster Quiz App!</H1>
);

export default home;