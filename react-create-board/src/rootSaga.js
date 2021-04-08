import { map } from 'ramda';
import { all, fork  } from "redux-saga/effects"
import articleSaga from "./sagas/articleSaga";
import boardSaga from "./sagas/boardSaga";

let combineSagas = {};
combineSagas = Object.assign(combineSagas, { articleSaga, boardSaga });

export default function* rootSaga() {
    yield all(map(fork, combineSagas));
}