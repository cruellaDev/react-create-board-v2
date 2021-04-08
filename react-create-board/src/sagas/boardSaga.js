import { all, call, fork, put, take } from 'redux-saga/effects';
import { boardActions } from '../slices/boardSlice';
import axios from '../utils/axios';

// api 서버 연결 주소
function apiSelectBoard(boardId) {
    return axios.get(`boards/${boardId}`);
}

function apiSelectBoardList() {
    return axios.get(`boards`);
}

// api 서버 연결 후 action 호출
function* asyncSelectBoardList() {
    try {
        const response = yield call(apiSelectBoardList);
        if (response.status === 200) {
            yield put(boardActions.selectBoardListSccs(response));
        } else {
            yield put(boardActions.selectBoardListFail(response));
        }
    } catch(e) {
        yield put(boardActions.selectBoardListFail(e.response));
    }
}

// action 호출을 감시하는 watch 함수
function* watchSelectBoardList() {
    while(true) {
        yield take(boardActions.selectBoardList);
        yield call(asyncSelectBoardList);
    }
}

export default function* boardSaga()
{
    yield all([fork(watchSelectBoardList)]);
}