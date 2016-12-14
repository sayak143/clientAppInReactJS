import {combineReducers} from 'redux';
import agent from './agentReducer';
import emailList from './emailListReducer';
import conversation from './conversationReducer';

export default combineReducers({agent, emailList, conversation});
