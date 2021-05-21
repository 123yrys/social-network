import React from 'react';
import Friend from './Friend/Friend'
import s from './Friends.module.css'

const Friends = (props) => {
  // let fr=props.friends.map(f=><Friend name={f.props.sidebar.friends.friend_name}/>)
  return (
    <div >
      <Friend friend={props.friends.sidebar.friends}/>
    </div>
  )
}

export default Friends;

