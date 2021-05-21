import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MessageItem.module.css'

const MessagesItems = (props) => {
  let userPath = '/messages/' + props.id;

  return (
    <div className={s.dialog}>
      <img src={props.image} alt="" />
      <NavLink to={userPath} className={s.user__name}>{props.name}</NavLink>
    </div>
  )
}

const MessageItems = (props) => {

  let MessagesEl = props.messageItmProps.map(m => <MessagesItems name={m.name} id={m.id} image={m.img} />);
  return (
    <div className={s.dialog_items}>
      {MessagesEl}
    </div>

  )
}

export default MessageItems;

