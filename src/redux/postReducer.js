const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

const postReducer =(state, action)=>{
  if(action.type===ADD_POST){
    let newPost = {
      id: 6,
      content: state.newPostText,
      like: 0,
    };
    state.PostsObj.push(newPost);
    state.newPost="";
    return state;
  }
  else if(action.type===UPDATE_POST){
    state.newPostText = action.newTxt;
  return state;
  }
  return state;
}

export const addPostActionCreator=()=>{
  return {
    type: ADD_POST,
  }
} 

export const UpdateNewPostTextActionCreator = (text) =>{
return {
  type : UPDATE_POST,
  newTxt: text,
}
}
export default postReducer;