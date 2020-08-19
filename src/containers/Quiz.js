import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {Colors} from '../constants/colors';
import NoticeBoard from '../components/NoticeBoard';
import Button from '../components/Button';
import * as actions from '../store/actions';

const Container = styled.section`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
`

const Question = styled.div`
    padding: 1em;

    h4 {
        color: ${Colors.primary};
        font-size: 3em;
        text-align: center;
    }
`

const Options = styled.div`
    display: flex;
    justify-content: center;
`

const Quiz = () => {
    const quizdata = useSelector(state => state.quizdata);
    const active = useSelector(state => state.active);
    const current = useSelector(state => state.currentIndex)
    const correct = useSelector(state => state.correct);
    const concluded = useSelector(state => state.concluded);
    
    const dispatch = useDispatch();

    const submitanswer = (submitted) => {
        if (submitted === quizdata[current].answer) dispatch(actions.answeredCorrect())
        else dispatch(actions.answeredWrong())
    }

    const 

    if (!active){
        return (
            <Container>
                <NoticeBoard
                    concluded={concluded}
                    current={current}
                    active={active}
                    correct={correct}
                ></NoticeBoard>
            </Container>
        )
    }

    else if (concluded){
        return (
            <Container>
                <NoticeBoard
                    concluded={concluded}
                    current={current}
                    active={active}
                    correct={correct}
                ></NoticeBoard>
            </Container>
        )
    }

    else return (
        <Container> 
            <Question>
                <h4>{quizdata[current].question}</h4>
            </Question>
            <Options>
                {quizdata[current].options
                    .map(option => <Button type='primary' clicked={() => submitanswer(option.option)}>{option.text}</Button>)
                }
            </Options>
        </Container>
    )
}

export default Quiz;