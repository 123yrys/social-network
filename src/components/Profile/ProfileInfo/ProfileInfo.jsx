import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo() {
  return (
    <div>
      <div className={s.content__image}>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
      </div>
      <div className={s.desckBlock}>
        Avatar+desc
      </div>
    </div>
  )
}

export default ProfileInfo;

