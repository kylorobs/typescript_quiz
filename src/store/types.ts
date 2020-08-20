
export type actionType = { type: string, active?: boolean }

export interface quizState {
    quizdata: question[];
    correct: number;
    currentIndex: number;
    concluded: boolean;
    active: boolean;
    bestScore: number;
}


export interface question {
    question: string;
    options: {
        option: string;
        text: string;
    }[];
    answer: string;
    submitted: boolean;
}