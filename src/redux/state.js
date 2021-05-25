import {rerenderEntireTree} from '../render'
let state ={
  profilePage:{
     PostsObj : [
      {id:1, content: 'Hi? How are you?', like: 21 },
      {id:2,  content: 'Its my new post', like: 1 },
      { id:3, content: 'Write me', like: 43 },
      { id:4, content: 'lorem', like: 223456 },
      {id:5,  content: 'Write me Write me Write me Write me', like: 22 },
    ],
    newPostText:'react test',
  },
   messagesPage:{
    MessagesObj : [
      { id: 1, name: 'Yrys', img: 'https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg' },
      { id: 2, name: 'Sveta', img: 'https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg' },
      { id: 3, name: 'Serg', img: 'https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg' },
      { id: 4, name: 'Lera', img: 'https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg' },
    ],
    
     MessagesContent : [
      { id: 1, text: 'Hi man', img: 'https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg' },
      { id: 2, text: 'In inventore molestias quibusdam fugit voluptatibus similique explicabo ipsam dolorem quo pariatur, ipsum illum, asperiores totam amet quidem! Laborum fugiat minima modi.', img: 'https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg' },
      { id: 3, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', img: 'https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg' },
      { id: 4, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.', img: 'https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg' },
    ],
    newMessAdd:'New message',
   },
  sidebar:{
    friends:[
      {friend_name:'Alesha'},
      {friend_name:'Sergei'},
      {friend_name:'Viktor'},
      {friend_name:'Nikita'},
    ]
  }
  
}
export let addPost=()=>{

let newPost=
  {
    id:6,
    content: state.profilePage.newPostText,
    like:0,
  } 
state.profilePage.PostsObj.push(newPost);
rerenderEntireTree(state);
}

export let updatePost=(newTxt)=>{
  state.profilePage.newPostText=newTxt;
  rerenderEntireTree(state);
}

export let addMessage=()=>{

  let newMessage=
    {
      id:5,
      text: state.messagesPage.newMessAdd,
      img:'https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg',
    } 
  state.messagesPage.MessagesContent.push(newMessage);
  rerenderEntireTree(state);
  }
  
  export let updateMessage=(newMess)=>{
    state.messagesPage.newMessAdd=newMess;
    rerenderEntireTree(state);
  }
export default state;