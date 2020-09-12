import * as actionTypes from '../actions/actionTypes';
import { quizState, actionType, question, APIquizresponse } from '../types';

const initialState:quizState = {
    quizdata: [],        
    correct: 0,
    currentIndex: 0,
    concluded: false,
    active: false,
    count: -1
};


const quizReducer = (state:quizState = initialState, action:actionType ) : quizState => {
    switch(action.type){
        case actionTypes.FETCHQUIZ :
            const data:question[] = action.data.results.map( (obj: APIquizresponse) => {
                return {
                    question: obj.question,
                    options: [...obj.incorrect_answers, obj.correct_answer],
                    answer: obj.correct_answer,
                    submitted: false
                }
            })
            return {...state, quizdata: data};
        case actionTypes.STARTQUIZ:
            return {
                ...state,
                active: true
            }
        case actionTypes.CONCLUDEQUIZ:
            return {
                ...state,
                active: false,
                concluded: true
            }
        case actionTypes.PLAYAGAIN:
            return {
                ...state,
                active: true,
                currentIndex: 0,
                correct: 0,
                concluded: false
        }
        case actionTypes.ANSWERED_CORRECT:
            const index = state.currentIndex + 1 
            const updatedIndex = index >= state.quizdata.length ? -1 : index;

            return {
                ...state,
                correct: state.correct + 1,
                currentIndex: updatedIndex,
                concluded: updatedIndex === -1
            }
        case actionTypes.ANSWERED_WRONG:
            const ind = state.currentIndex + 1; 
            const updatedIn = ind >= state.quizdata.length ? -1 : ind;

            return {
                ...state,
                currentIndex: updatedIn,
                concluded: updatedIn === -1
            }
        case actionTypes.RESET_CLOCK:
            return {
                ...state,
                count: -1
            }
        case actionTypes.UPDATE_COUNT:
            return {
                ...state,
                count: action.count
            }
        default: return state
    }
}

export default quizReducer;