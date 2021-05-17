import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


function Profile(){
  return (
    <div>
      <div className={s.content__image}>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
      </div>
      <div className="avatar">
        Avatar
      </div>
      <MyPosts></MyPosts>
    </div>
  )
  }

export default Profile;

