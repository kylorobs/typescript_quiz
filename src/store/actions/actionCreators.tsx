
import * as actionTypes from './actionTypes';
import { actionType } from '../types';

export const fetchQuiz = (): actionType => {
    return {
        type: actionTypes.FETCHQUIZ
    }
}       

export const startQuiz = ():actionType => {

    return {
        type: actionTypes.STARTQUIZ,
        active: true
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

export const startCountdown = (duration: number, type: 'begin' | 'getready'): actionType => {

    if (type === 'begin' && duration > 0) getReady();

    return {
            type: actionTypes.ANSWERED_WRONG,
    }
    

}