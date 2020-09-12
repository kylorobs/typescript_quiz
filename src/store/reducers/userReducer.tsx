import { user, actionType } from '../types';
import * as actionTypes from '../actions/actionTypes';

const initialState:user = {
   bestScore: -1,
   selectedTopic: '',
   prevTopics: []
}

const userReducer = (state = initialState, action: actionType ): user => {
    switch (action.type){
        case actionTypes.UPDATE_BEST :
            return {
                ...state,
                bestScore: action.score
            };
        case actionTypes.CHANGE_TOPIC :
            return {
                ...state,
                selectedTopic: action.topic,
                prevTopics: state.prevTopics.includes(state.selectedTopic) ? [...state.prevTopics] : [...state.prevTopics, state.selectedTopic]
            }
        default: return initialState;   
    }
} 

export default userReducer;