import { combineReducers, createStore } from 'redux';
import postReducer from "./postReducer";
import messageReducer from "./messageReducer";



let reducers = combineReducers({
  profilePage:postReducer,
  messagesPage:messageReducer,
});

let store = createStore(reducers);
export default store;