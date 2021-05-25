import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
  let newPost = React.createRef();
  let addPost = () => {
    props.addPost();
    props.updatePost('')
  }
  let onPostChange = () => {
    let text = newPost.current.value;
    props.updatePost(text);
  }
  let PostEl = props.posts.map(p => <Post message={p.content} likes={p.like}></Post>)
  return (
    <div>
      <h3>My posts</h3>
      <div className="new-post">
        <div className={s.postForm}>
          <textarea placeholder="Ваш пост" className={s.textarea} onChange={onPostChange} ref={newPost} value={props.newPostText}></textarea>
          <button onClick={addPost}>Отправить</button>
        </div>
      </div>
      <div className="posts-list">
        {PostEl}
      </div>
    </div>
  )
}

export default MyPosts;

