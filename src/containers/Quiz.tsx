import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {Colors} from '../constants/colors';
import NoticeBoard from '../components/NoticeBoard';
import Button from '../components/Button';
import * as actions from '../store/actions';
import { quizState } from '../store/types';

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

const Quiz: React.FC = () => {
    const quizdata = useSelector((state:quizState)=> state.quizdata);
    const active = useSelector((state:quizState) => state.active);
    const current = useSelector((state:quizState) => state.currentIndex)
    const correct = useSelector((state:quizState) => state.correct);
    const concluded = useSelector((state:quizState) => state.concluded);
    
    const dispatch = useDispatch();

    const submitanswer = (submitted: string) => {
        if (submitted === quizdata[current].answer) dispatch(actions.answeredCorrect())
        else dispatch(actions.answeredWrong())
    }


    if (!active){
        return (
            <Container>
                <NoticeBoard
                    concluded={concluded}
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
                    .map(choice => <Button btntype='primary' clicked={() => submitanswer(choice.option)}>{choice.text}</Button>)
                }
            </Options>
        </Container>
    )
}

export default Quiz;