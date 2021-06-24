import React from 'react';
import s from './Friend.module.css'
import sidebarReducer from '../../../redux/sidebarReducer';

const FriendSing = (props) => {
  return <div>
    {props.name}
  </div>
}
const Friend = (props) => {
  let fr = props.store.getState().sidebarReducer.map(f => <FriendSing name={f.friend_name} />)
  return (
    <div>
      {fr}
    </div>
  )
}

export default Friend;

