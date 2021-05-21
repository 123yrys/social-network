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
  let newMessage=React.createRef();
  let addMessage =()=>{
    let text = newMessage.current.value;
    alert(text);
  }
  let MesageContEl = props.messagesProps.map(c => <Message txt={c.text} img_url={c.img} />)
  return (
        <div className={s.messages}>
          {MesageContEl}
          <div className={s.addText}>
          <textarea placeholder="Написать сообщение" ref={newMessage}></textarea>
          <button onClick={addMessage}>Отправить</button>
          </div>
        </div>

  )
}

export default MessageContent;

