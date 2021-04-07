import { map } from 'ramda';
import { all, fork  } from "redux-saga/effects"
import articleSaga from "./sagas/articleSaga";

let combineSagas = {};
combineSagas = Object.assign(combineSagas, articleSaga);

export default function* rootSaga() {
    yield all(map(fork, combineSagas));
}