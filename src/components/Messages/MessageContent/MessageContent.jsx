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
    props.addMessage();
    props.updateMessage('');
  }
  let updateMess = () => {
    let text = newMessage.current.value;
    props.updateMessage(text);
  }
  
  let MesageContEl = props.messagesProps.map(c => <Message txt={c.text} img_url={c.img} />)
  return (
    <div className={s.messages}>
      {MesageContEl}
      <div className={s.addText}>
        <textarea placeholder="Написать сообщение" ref={newMessage} onChange={updateMess} value={props.newMessAdd}></textarea>
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>

  )
}

export default MessageContent;

