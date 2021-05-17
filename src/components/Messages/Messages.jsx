import React from 'react';
import s from './Messages.module.css'

const Messages = (props) =>{
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialog_items}>
          <div className={s.dialog}>
            <img src="https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg" alt="" />
            user1
          </div>
          <div className={s.dialog}>
            <img src="https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg" alt="" />
            user2
          </div>
          <div className={s.dialog}>
            <img src="https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg" alt="" />
            user3
          </div>
          <div className={s.dialog}>
            <img src="https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg" alt="" />
            user4
          </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>
            <div className={s.message__img}>
              <img src="https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg" alt="" />
            </div>
            <div className={s.message__content}>
              Hi
            </div>
          </div>
          <div className={s.message}>
            <div className={s.message__img}>
              <img src="https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg" alt="" />
            </div>
            <div className={s.message__content}>
              In inventore molestias quibusdam fugit voluptatibus similique explicabo ipsam dolorem quo pariatur, ipsum illum, asperiores totam amet quidem! Laborum fugiat minima modi.
            </div>
          </div>
          <div className={s.message}>
            <div className={s.message__img}>
              <img src="https://www.slazzer.com/static/images/demo/photographer-image-upload.jpg" alt="" />
            </div>
            <div className={s.message__content}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }

export default Messages;

