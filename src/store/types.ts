
export interface actionType { 
    type: string,
    [prop: string]: any, 
}

export interface quizState {
    quizdata: question[];
    correct: number;
    currentIndex: number;
    concluded: boolean;
    active: boolean;
    count: number;
}

export interface user {
    bestScore: number;
    selectedTopic: string;
    prevTopics: string[];
}

export interface appState {
    quiz: quizState,
    user: user
}


export interface question {
    question: string;
    options: string[];
    answer: string;
    submitted: boolean;
}


export interface APIquizresponse {
        "category": string,
        "type": string,
        "difficulty": string,
        "question": string,
        "correct_answer": string,
        "incorrect_answers": string[]
}