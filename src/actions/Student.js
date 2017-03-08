import {
    FETCH_STUDENT_LIST
} from './types';

export const getStudentsList = () => {
    return ({
        type: FETCH_STUDENT_LIST
    });
}