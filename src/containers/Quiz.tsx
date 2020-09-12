import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import NoticeBoard from './NoticeBoard';
import Button from '../components/Button';
import * as actions from '../store/actions';
import { quizState } from '../store/types';
import Dashboard from './Dashboard';
import { useHistory } from "react-router-dom";

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
        color: ${props => props.theme.colors.primary};
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
    const count = useSelector((state:quizState) => state.count);

    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        if (quizdata.length < 1) dispatch(actions.fetchQuiz());
        else if (active) history.push(`/quiz/q/${current+1}`)
        else history.push(`/quiz`)
    }, [dispatch, quizdata, current, active, concluded, history]);


    const submitanswer = (submitted: string) : void => {
        if (submitted === quizdata[current].answer) dispatch(actions.answeredCorrect())
        else dispatch(actions.answeredWrong());
    }

    let quizBoard:any;

    if (!active || concluded){
        quizBoard = (
            <Container>
                <NoticeBoard
                    concluded={concluded}
                    correct={correct}
                ></NoticeBoard>
            </Container>
        )
    }
    else if (active && count === -1) quizBoard = (<p>Loading....</p>)

    else quizBoard = (
        <Container> 
            <Question>
                <h4>{quizdata[current].question}</h4>
            </Question>
            <Options>
                {quizdata[current].options
                    .map((choice:string) => <Button primary clicked={() => submitanswer(choice)}>{choice}</Button>)
                }
            </Options>
        </Container>
    )

    return (
        <React.Fragment>
            <Dashboard />
             { quizBoard }
        </React.Fragment>
    )
}

export default Quiz;