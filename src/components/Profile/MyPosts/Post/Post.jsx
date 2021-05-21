import React from 'react';
import s from './Post.module.css';


function Post(props) {
  return (
    <div>
      <div className={s.item}>
        <img src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg" alt="" />
        {props.message}
       <div>
          <span>Like {props.likes}</span>
        </div>
      </div>
    </div>
  )
}

export default Post;

