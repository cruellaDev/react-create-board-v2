import { all, call, fork, put, take } from 'redux-saga/effects';
import { articleActions } from '../slices/articleSlice';
import axios from '../utils/axios';
import qs from "query-string";

// api 서버 연결 주소
function apiSelectArticle(articleId) {
    return axios.get(`articles/${articleId}`);
}

function apiSelectArticleList(reqestParams) {
    return axios.get(`articles?${qs.stringify(reqestParams)}`);
}

// api 서버 연결 후 action 호출
function* asyncSelectArticleList(action) {
    try {
        const response = yield call(apiSelectArticleList, { boardId: action.payload });
        if (response.status === 200) {
            yield put(articleActions.selectArticleListSccs(response));
        } else {
            yield put(articleActions.selectArticleListFail(response));
        }
    } catch(e) {
        yield put(articleActions.selectArticleListFail(e.response));
    }
}

// action 호출을 감시하는 watch 함수
function* watchSelectArticleList() {
    while(true) {
        const action = yield take(articleActions.selectArticleList);
        yield call(asyncSelectArticleList, action);
    }
}

export default function* articleSaga()
{
    yield all([fork(watchSelectArticleList)]);
}