import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import Button from '../components/Button';


const Background = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
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
    const [startingIn, setStartingIn] = useState(-1);
    
    let content;

    const beginQuiz = (type:'begin'|'playagain') => {
        let startCountDown:number = 3;
        setStartingIn(startCountDown);
        const timer = setInterval(() => {
            if (startCountDown === 0) {
                clearInterval(timer);
                dispatch(actions.startCountdown(type));
                setStartingIn(-1)
            }
            startCountDown--
            setStartingIn(startCountDown)

        }, 1000);
    }

    const playAgain = () => {
        console.log('GAME BEGINs AGAIN')
        beginQuiz('playagain');
    }




    if (startingIn !== -1 ) {
        content = (
            <React.Fragment>
                <h2> Get Ready!</h2>
                <p>{startingIn}</p>
            </React.Fragment>
        )
    }

    else if (props.concluded){
        content = (
            <React.Fragment>
                <h3>Oh no, you have run out of time!</h3>
                <p> You have scored a total of {props.correct}</p>
                <Button secondary clicked={() => playAgain()}>PLAY AGAIN</Button>
            </React.Fragment>
        )
    }

    else {
        content = (
            <React.Fragment>
                <h2> Welcome to the Quickster Quiz Challenge!</h2>
                <p>Are you ready to find out how good you are at quizes? See how many you can answer correctly in 1 minute!</p>
                <Button primary clicked={() => beginQuiz('begin')}>Begin Quiz</Button>
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