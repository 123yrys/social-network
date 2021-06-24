import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
   _callSubscriber ()  {
    console.log("state changed");
  },
  _state : {
    profilePage: {
      PostsObj: [
        { id: 1, content: "Hi? How are you?", like: 21 },
        { id: 2, content: "Its my new post", like: 1 },
        { id: 3, content: "Write me", like: 43 },
        { id: 4, content: "lorem", like: 223456 },
        { id: 5, content: "Write me Write me Write me Write me", like: 22 },
      ],
      newPostText: "react test",
    },
    messagesPage: {
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
    },
    sidebar: {
      friends: [
        { friend_name: "Alesha" },
        { friend_name: "Sergei" },
        { friend_name: "Viktor" },
        { friend_name: "Nikita" },
      ],
    },
  },
  getState(){
    return this._state;
  },

  dispatch(action){
    this._state.profilePage = postReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
  subscribe (observer)  {
    this._callSubscriber = observer;
  },
}


export default store;
window.store=store;
