
import * as actionTypes from './actionTypes';

export const fetchQuiz = () => {
    return {
        type: actionTypes.FETCHQUIZ
    }
}       

export const startQuiz = () => {

    return {
        type: actionTypes.STARTQUIZ,
        active: true
    }
}

export const playAgain = () => {
    return {
        type: actionTypes.PLAYAGAIN,
    }
}


export const answeredCorrect = () => {
    return {
        type:actionTypes.ANSWERED_CORRECT,
    }
}

export const answeredWrong = () => {
    return {
        type: actionTypes.ANSWERED_WRONG,
    }
}

export const getReady = () => {
    return {
        type: actionTypes.GETREADY,
    }
}

export const startCountdown = (duration, type) => {

    if (type === 'start') getReady();

    return {
        type: actionTypes.ANSWERED_WRONG,
    }
}