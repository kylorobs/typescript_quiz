import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { appState } from '../store/types';

const Container  = styled.section`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    width: 100%;
    height: 20vh;
    padding: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

const Column = styled.div`
    text-align: center;
`


const Dashboard: React.FC = () => {
    const correct = useSelector((state:appState) => state.quiz.correct);
    const quizdata = useSelector((state:appState) => state.quiz.quizdata);
    const current = useSelector((state:appState) => state.quiz.currentIndex) + 1;
    const bestScore = useSelector((state:appState) => state.user.bestScore);
    const count = useSelector((state:appState) => state.quiz.count);

    return (
    <Container>
        <Column>
            <h3>Question</h3>
            <p>{current} out of {quizdata.length}</p>
        </Column>
        <Column>
            <h3>Correct Answers:</h3>
            <p>{correct}</p>
        </Column>
        <Column>
            <h3>Time Remaining</h3>
            {count >= 0? <p> {count} </p> : ' - '}
        </Column>
        <Column>
            <h3>Your Best Score</h3>
            <p>{bestScore? bestScore : ' - '}</p>
        </Column>
    </Container>
    )
}

export default Dashboard;