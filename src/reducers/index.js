import {combineReducers} from 'redux';
import agent from './agentReducer';
import emailList from './emailListReducer';
export default combineReducers({agent, emailList});
