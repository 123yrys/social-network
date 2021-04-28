import React from 'react';
import Profile from '../Profile';

function Content(){
  return (
    <div className="content">
       <div className="content__image">
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
      </div>
      <div className="content-body">
        <Profile></Profile>
      </div>
    </div>
  )
  }

export default Content;

