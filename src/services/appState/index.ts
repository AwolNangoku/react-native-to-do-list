import {combineReducers} from 'redux';
import todosList from './todosList/reducer';

const rootReducer = combineReducers({todosList});

export default rootReducer;
