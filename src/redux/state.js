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
          img: "https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg",
        },
        {
          id: 2,
          name: "Sveta",
          img: "https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg",
        },
        {
          id: 3,
          name: "Serg",
          img: "https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg",
        },
        {
          id: 4,
          name: "Lera",
          img: "https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg",
        },
      ],
  
      MessagesContent: [
        {
          id: 1,
          text: "Hi man",
          img: "https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg",
        },
        {
          id: 2,
          text: "In inventore molestias quibusdam fugit voluptatibus similique explicabo ipsam dolorem quo pariatur, ipsum illum, asperiores totam amet quidem! Laborum fugiat minima modi.",
          img: "https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          img: "https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg",
        },
        {
          id: 4,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          img: "https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg",
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
    if(action.type==="ADD-POST"){
      let newPost = {
        id: 6,
        content: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.PostsObj.push(newPost);
      this._callSubscriber(this._state);
    }
    else if(action.type==="UPDATE-POST"){
      this._state.profilePage.newPostText = action.newTxt;
    this._callSubscriber(this._state);
    }
    else if(action.type==="ADD-MSG"){
      let newMessage = {
        id: 5,
        text: this._state.messagesPage.newMessAdd,
        img: "https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg",
      };
      this._state.messagesPage.MessagesContent.push(newMessage);
      this._callSubscriber(this._state);
    }
    else if(action.type==="UPDATE-MSG"){
      this._state.messagesPage.newMessAdd = action.newMess;
      this._callSubscriber(this._state);
    }
  },
  subscribe (observer)  {
    this._callSubscriber = observer;
  },
}

export default store;
window.store=store;
