import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';


const Header = styled.header`

    h1, h2 {
    @import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@800&display=swap');
    text-align: center;
    font-family: 'Grandstander', cursive;
    }
    h1 {
        padding-top: 4rem;
        margin-top: 0;
        color: ${props => props.theme.colors.primary};
        font-size: 8rem;
    }
    h2 {
        margin: 2rem auto;
        color: ${props => props.theme.colors.secondary};
        font-size: 3rem;
    }
`

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
`



const home: React.FC = () => {
    
    // useEffect(()=>{
    //     fetch()
    //       .then(res=> res.json())
    //       .then(results => dispatch())
    //       .catch(er =>  console.log(er))
    //   }, [])

    return (
    <Header>
        <h1>Quickster Quiz
            <br></br> App!</h1>
        <h2> Select your topic. Switch the light on upstairs. And get ready to go as fast as you can.</h2>
        <Container>
            The topics go here.
        </Container>
    </Header>

)};

export default home;