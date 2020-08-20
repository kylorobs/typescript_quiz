import React from 'react';
import styled from 'styled-components';
import {Colors} from '../constants/colors';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import Button from './Button';


const Background = styled.div`
    background-color: ${Colors.secondary};
    color: ${Colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 18px;
    height: 40%;
    width: 40%;
    padding: 3em;
`

interface NoticeBoardProps {
    concluded: boolean;
    correct: number;
} 

const NoticeBoard:React.FC<NoticeBoardProps> = props => {

    const dispatch = useDispatch();
    
    let content;

    const beginQuiz = () => {
        console.log('GAME BEGIN')
        dispatch(actions.startQuiz())
    }

    const playAgain = () => {
        console.log('GAME BEGINs AGAIN')
        dispatch(actions.playAgain())
    }


    if (props.concluded){
        content = (
            <React.Fragment>
                <h3>Oh no, you have run out of time!</h3>
                <p> You have scored a total of {props.correct}</p>
                <Button btntype='secondary' clicked={() => playAgain()}>PLAY AGAIN</Button>
            </React.Fragment>
        )
    }

    else {
        content = (
            <React.Fragment>
                <h2> Welcome to the Quickster Quiz Challenge!</h2>
                <p>Are you ready to find out how good you are at quizes? See how many you can answer correctly in 1 minute!</p>
                <Button btntype='primary' clicked={() => beginQuiz()}>Begin Quiz</Button>
            </React.Fragment>
        )
    }

    return (
        <Background>
            {content}
        </Background>
    )
}

export default NoticeBoard;