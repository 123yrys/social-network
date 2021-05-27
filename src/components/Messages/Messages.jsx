import React from 'react';
import s from './Messages.module.css';
import MessageContent from './MessageContent/MessageContent'
import MessageItems from './MessageItem/MessageItem';



const Messages = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <MessageItems store={props.store}/>
        <MessageContent store={props.store}/>
      </div>
    </div>
  )
}

export default Messages;

