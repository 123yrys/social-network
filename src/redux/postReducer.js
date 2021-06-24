const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

let initialState = {
  PostsObj: [
    { id: 1, content: "Hi? How are you?", like: 21 },
    { id: 2, content: "Its my new post", like: 1 },
    { id: 3, content: "Write me", like: 43 },
    { id: 4, content: "lorem", like: 223456 },
    { id: 5, content: "Write me Write me Write me Write me", like: 22 },
  ],
  newPostText: "react test",
}
const postReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        content: state.newPostText,
        like: 0,
      };
      state.PostsObj.push(newPost);
      state.newPost = "";
      return state;

    case UPDATE_POST:
      state.newPostText = action.newTxt;
      return state;

    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const UpdateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_POST,
    newTxt: text,
  };
};
export default postReducer;
