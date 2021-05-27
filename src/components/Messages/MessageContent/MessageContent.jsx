import React from 'react';
import s from './MessageContent.module.css'


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

  let newMessage = React.createRef();
  let addMessage = () => {
    props.store.dispatch({type:"ADD-MSG"});
    props.store.dispatch({type:"UPDATE-MSG", newMess:""});
  }
  let updateMess = () => {
    let text = newMessage.current.value;
    props.store.dispatch({type:"UPDATE-MSG", newMess:text});
  }
  
  let MesageContEl = props.store.getState().messagesPage.MessagesContent.map(c => <Message txt={c.text} img_url={c.img} />)
  return (
    <div className={s.messages}>
      {MesageContEl}
      <div className={s.addText}>
        <textarea placeholder="Написать сообщение" ref={newMessage} onChange={updateMess} value={props.store.getState().messagesPage.newMessAdd}></textarea>
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>

  )
}

export default MessageContent;

