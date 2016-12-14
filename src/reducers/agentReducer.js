export default function reducer(state={
    loggedIn: false,
    connection: null,
    name: "ravi"
  }, action){
    if(action.type === "SET_LOGIN_STATE"){
      state = {
        ...state,
        loggedIn: action.payload,
        name: "Ravi Chaudhary"
      }
    }
  return state;
}
