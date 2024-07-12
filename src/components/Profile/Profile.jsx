import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./My posts/ProfileInfo/ProfilenInfo";
import MyPostsContainer from './My posts/MyPostsContainer';
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer   />
    </div>
}

export default Profile;