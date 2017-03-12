import {
    FETCH_QUESTION_LIST
} from './types';

export const getQuestionsList = () => {
    return ({
        type: FETCH_QUESTION_LIST
    });
}