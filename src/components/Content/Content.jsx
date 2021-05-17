import React from 'react';
import Profile from '../Profile/Profile';
import s from './Content.module.css'
function Content(){
  return (
    <div className={s.content}>
       <div className={s.content__image}>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
      </div>
      <div className="content-body">
        <Profile></Profile>
      </div>
    </div>
  )
  }

export default Content;

