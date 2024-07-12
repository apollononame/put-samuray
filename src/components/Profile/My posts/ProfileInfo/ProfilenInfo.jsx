import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return <div>

        <div><img src='https://assets-cdn.123rf.com/index/static/assets/home/ttisection-img-1-v4.jpg'/></div>
        <div className={s.descriptionBlock}>
            <img src="props.profile.photos.large" />
            ava + description
        </div>

    </div>
}

export default ProfileInfo;