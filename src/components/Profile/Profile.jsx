import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



function Profile(props) {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profile.profilePage.PostsObj} newPostText={props.profile.profilePage.newPostText} updatePost={props.updatePost} addPost={props.addPost}></MyPosts>
    </div>
  )
}

export default Profile;

