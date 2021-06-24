const ADD_MSG = "ADD-MSG";
const UPDATE_MSG = "UPDATE-MSG";

let initialState = {
  MessagesObj: [
    {
      id: 1,
      name: "Yrys",
      img: "https://html5css.ru/howto/img_avatar2.png",
    },
    {
      id: 2,
      name: "Sveta",
      img: "https://html5css.ru/howto/img_avatar2.png",
    },
    {
      id: 3,
      name: "Serg",
      img: "https://html5css.ru/howto/img_avatar2.png",
    },
    {
      id: 4,
      name: "Lera",
      img: "https://html5css.ru/howto/img_avatar2.png",
    },
  ],

  MessagesContent: [
    {
      id: 1,
      text: "Hi man",
      img: "https://html5css.ru/howto/img_avatar2.png",
    },
    {
      id: 2,
      text: "In inventore molestias quibusdam fugit voluptatibus similique explicabo ipsam dolorem quo pariatur, ipsum illum, asperiores totam amet quidem! Laborum fugiat minima modi.",
      img: "https://html5css.ru/howto/img_avatar2.png",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img: "https://html5css.ru/howto/img_avatar2.png",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      img: "https://html5css.ru/howto/img_avatar2.png",
    },
  ],
  newMessAdd: "New message",
}
const messageReducer = (state = initialState, action) =>{
  switch(action.type){
    case ADD_MSG:
      let newMessage = {
        id: 5,
        text: state.newMessAdd,
        img: "https://html5css.ru/howto/img_avatar2.png",
      };
      state.MessagesContent.push(newMessage);
      state.newMess="";
      return state;

  case UPDATE_MSG:
   state.newMessAdd = action.newMess;
    return state;
  
  default:
    return state;
}
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