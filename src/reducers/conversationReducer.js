
export default function reducer(state={
    conversation: [],
    visible: false
  }, action){
    if(action.type === "SET_CONVERSATION"){
      state = {
        ...state,
        conversation: action.payload
      }
    }
    if(action.type === "SEND_EMAIL"){
      state = {
        ...state,
        conversation: state.conversation.concat({text: action.payload})
      }
    }
  return state;
}
