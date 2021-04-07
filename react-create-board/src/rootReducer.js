import { combineReducers } from 'redux';
import { articleReducer } from './slices/articleSlice';

const rootReducer = combineReducers({ articleReducer });

export default rootReducer;