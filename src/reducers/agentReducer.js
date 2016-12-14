export default function reducer(state={
    loggedIn: false,
    connection: null
  }, action){
    if(action.type === "SET_LOGIN_STATE"){
      state = {
        ...state,
        loggedIn: action.payload
      }
    }
  return state;
}
