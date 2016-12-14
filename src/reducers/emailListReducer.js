export default function reducer(state={
    emailList: []
  }, action){
    if(action.type === "SET_EMAIL_LIST"){
      var msg = action.payload;
      if(msg!== null && msg.length !== 0){
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(atob(msg.textContent), "text/xml");
    		var taskObject = {};
    		var variables = xmlDoc.getElementsByTagName("variable");
        if(variables.length > 0){
          for (var index in variables) {
              var variable = variables[index];
              var isValuePresent = !!variable.getElementsByTagName && !!variable.getElementsByTagName("value")[0] && !!variable.getElementsByTagName("name")[0];
              if (isValuePresent) {
                taskObject[variable.getElementsByTagName("name")[0].innerHTML] = variable.getElementsByTagName("value")[0].innerHTML;
              }
            }
        }
      }
      state = {
        ...state,
        emailList: state.emailList.concat(taskObject)
      }
    }
  return state;
}
