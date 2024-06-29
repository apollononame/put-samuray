import React from 'react';
import s from './Profile.module.css'
import MyPosts from './My posts/MyPosts';
import ProfileInfo from "./My posts/ProfileInfo/ProfilenInfo";
import MyPostsContainer from './My posts/MyPostsContainer';


const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer   />
    </div>
}

export default Profile;