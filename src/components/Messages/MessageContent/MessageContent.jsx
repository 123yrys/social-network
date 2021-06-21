import React from 'react';
import s from './MessageContent.module.css'
import {addMessagePost, updateMessagePostActionCreator} from "../../../redux/state"


const Message = (props) => {
  return (
    <div className={s.message}>
      <div className={s.message__img}>
        <img src={props.img_url} alt="" />
      </div>
      <div className={s.message__content}>
        {props.txt}
      </div>
    </div>
  )
}

const MessageContent = (props) => {

  //let newMessage = React.createRef();
  let addMessage = () => {
    let text = "";
    props.store.dispatch(addMessagePost());
    props.store.dispatch(updateMessagePostActionCreator(text));
  }
  let updateMess = (e) => {
    let body = e.target.value
    props.store.dispatch(updateMessagePostActionCreator(body));
  }
  
  let MesageContEl = props.store.getState().messagesPage.MessagesContent.map(c => <Message txt={c.text} img_url={c.img} />)
  return (
    <div className={s.messages}>
      {MesageContEl}
      <div className={s.addText}>
        <textarea placeholder="Написать сообщение" onChange={updateMess} value={props.store.getState().messagesPage.newMessAdd}></textarea>
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>

  )
}

export default MessageContent;

