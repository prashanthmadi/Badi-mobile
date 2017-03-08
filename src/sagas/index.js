import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects'
import {
    FETCH_STUDENT_LIST_FAILED,
    FETCH_STUDENT_LIST_SUCCESS,
    FETCH_STUDENT_LIST
} from '../actions/types'

function* fetchStudentList(action) {
    try {
        var Student = Parse.Object.extend("Student");
        var query = new Parse.Query(Student);
        query.limit(10);

        const findQuery = () => new Promise((resolve, reject) => query.find({
            success: results => resolve(results),
            error: error => reject(error)
        }));

        try {
            const results = yield call(findQuery);
            yield put({
                type: FETCH_STUDENT_LIST_SUCCESS,
                students: results
            })
        } catch (error) {
            yield put({
                type: FETCH_STUDENT_LIST_FAILED,
                message: error.message
            });
        }

    } catch (error) {
        yield put({
            type: FETCH_STUDENT_LIST_FAILED,
            message: error.message
        });
    }
}

function* mySaga() {
    yield takeEvery(FETCH_STUDENT_LIST, fetchStudentList);
}

export default mySaga;