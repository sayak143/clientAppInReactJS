export default function reducer(state={
    emailList: []
  }, action){
    if(action.type === "SET_EMAIL_LIST"){
      state = {
        ...state,
        emailList: state.emailList.concat(action.payload)
      }
    }
  return state;
}
