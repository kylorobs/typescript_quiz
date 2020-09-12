import { actionType } from '../types';
import * as actionTypes from './actionTypes';

export const changeTopic = (topic: string): actionType => {
    return {
        type: actionTypes.CHANGE_TOPIC,
        topic
    }
};

export const updateBest = (score: number): actionType => {
    return {
        type: actionTypes.UPDATE_BEST,
        score
    }
}



