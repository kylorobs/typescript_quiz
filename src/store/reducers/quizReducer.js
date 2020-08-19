import * as actionTypes from '../actions/actionTypes';

const initialState = {
    quizdata: [
        {
            question: 'WHat is your name?', 
            options: [{option: 'a', text: 'Kyle'}, {option: 'b', text: 'Kylo'}],
            answer: 'b',
            submitted: null
        },
        {
            question: 'Who is Genghis Khan?', 
            options: [{option: 'a', text: 'who cares'}, {option: 'b', text: 'famous warrios'}],
            answer: 'b',
            submitted: null
        },
        {
            question: 'What year did humans visit the moon?', 
            options: [{option: 'a', text: '1970'}, {option: 'b', text: '1967'}],
            answer: 'b',
            submitted: null
        },
    ],        
    correct: 0,
    currentIndex: 0,
    concluded: false,
    active: false,
    bestScore: null
};

const quizReducer = (state = initialState, action ) => {
    switch(action.type){
        case actionTypes.FETCHQUIZ :
            return state;
        case actionTypes.STARTQUIZ:
            return {
                ...state,
                active: true
            }
        case actionTypes.PLAYAGAIN:
            const best = state.correct > state.bestScore ? state.correct : state.bestScore;
            return {
                ...state,
                active: true,
                currentIndex: 0,
                correct: 0,
                bestScore: best,
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
        default: return state
    }
}

export default quizReducer;