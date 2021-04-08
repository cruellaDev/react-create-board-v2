import { combineReducers } from 'redux';
import { articleReducer } from './slices/articleSlice';
import { boardReducer } from './slices/boardSlice';

const rootReducer = combineReducers({ articleReducer, boardReducer });

export default rootReducer;