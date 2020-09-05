
import * as actionTypes from './actionTypes';
import { actionType } from '../types';

export const fetchQuiz = () => {
    return (dispatch:any) => {
        fetch('https://opentdb.com/api.php?amount=30&category=20&type=multiple')
        .then( res => res.json())
        .then( results => {
            console.log(results)
            dispatch(updateQuestions(results))
        })
        .catch(er => dispatch(er))
    }
}

const updateQuestions =( data:any ):actionType => {
    return {
        type: actionTypes.FETCHQUIZ,
        data: data
    }
}

export const startQuiz = ():actionType => {
    return {
        type: actionTypes.STARTQUIZ,
        active: true
    }
}

export const concludeQuiz = ():actionType => {
    return {
        type: actionTypes.CONCLUDEQUIZ
    }
}

export const playAgain = (): actionType => {
    return {
        type: actionTypes.PLAYAGAIN,
    }
}


export const answeredCorrect = (): actionType => {
    return {
        type:actionTypes.ANSWERED_CORRECT,
    }
}

export const answeredWrong = (): actionType => {
    return {
        type: actionTypes.ANSWERED_WRONG,
    }
}

export const getReady = (): actionType => {
    return {
        type: actionTypes.GETREADY,
    }
}

export const resetClock = (): actionType => {
    return {
        type: actionTypes.RESET_CLOCK
    }
}

export const updateCount = (count: number) => {
    return {
        type: actionTypes.UPDATE_COUNT,
        count: count
    }
}

export const startCountdown = (type: 'begin' | 'playagain'): any => {
    return (dispatch: any):any => {
        type === 'begin'? dispatch(startQuiz()) : dispatch(playAgain());
        let count = 10;
        dispatch(updateCount(count));

        const timer = setInterval(()=> {
            if (count === 0) {
                clearInterval(timer);
                dispatch(resetClock())
                dispatch(concludeQuiz());
            }
            else {
                count--;
                dispatch(updateCount(count));
            }
        }, 1000)
    }     
}
