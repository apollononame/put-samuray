import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>

        <div><img src='https://assets-cdn.123rf.com/index/static/assets/home/ttisection-img-1-v4.jpg'/></div>
        <div className={s.descriptionBlock}> ava + description</div>

    </div>
}

export default ProfileInfo;