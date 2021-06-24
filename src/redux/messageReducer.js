const ADD_MSG = "ADD-MSG";
const UPDATE_MSG = "UPDATE-MSG";

const messageReducer = (state, action) =>{
  if(action.type===ADD_MSG){
    let newMessage = {
      id: 5,
      text: state.newMessAdd,
      img: "https://html5css.ru/howto/img_avatar2.png",
    };
    state.MessagesContent.push(newMessage);
    state.newMess="";
    return state;
  }
  else if(action.type===UPDATE_MSG){
   state.newMessAdd = action.newMess;
    return state;
  }
  return state;
}

export const addMessagePost = () =>{
  return {
    type : ADD_MSG,
  }
}

export const updateMessagePostActionCreator = (text) => {
  return {
    type: UPDATE_MSG,
    newMess:text,
  }
}
export default messageReducer;