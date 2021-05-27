import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



function Profile(props) {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts store={props.store}></MyPosts>
    </div>
  )
}

export default Profile;

