import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts=(props)=> {
  let newPost = React.createRef();
  let addPost =()=>{
    let text = newPost.current.value;
    props.addPost(text)
  }
  let PostEl = props.posts.map(p => <Post message={p.content} likes={p.like}></Post>)
  return (
    <div>
      <h3>My posts</h3>
      <div className="new-post">
        <form className={s.postForm}>
          <textarea placeholder="Ваш пост" className={s.textarea} ref={newPost}></textarea>
          <button onClick={addPost}>Отправить</button>
        </form>
      </div>
      <div className="posts-list">
        {PostEl}
      </div>
    </div>
  )
}

export default MyPosts;

