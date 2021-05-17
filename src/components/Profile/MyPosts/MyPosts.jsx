import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(){
  return (
    <div>
      My posts
     <div className="new-post">
        <form className={s.postForm}>
          <textarea placeholder="Your post" className={s.textarea}></textarea>
          <button>Send</button>
        </form> 
      </div>
      <div className="posts-list">
        <Post message="Hi? How are you?" likes="1"></Post>
        <Post message="Its my new post" likes="12"></Post>
        <Post message="Write me" likes="13"></Post>
      </div>
    </div>
  )
  }

export default MyPosts;

