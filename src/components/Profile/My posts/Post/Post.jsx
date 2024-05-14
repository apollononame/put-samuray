import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return  <div className={s.item}> 
    <img src="https://sun6-22.userapi.com/s/v1/ig2/4kDrDZOajKk0L8wBkpU6bQnal8FbD1g_hilvozuiK5jDGLYzqC_tXkLlMFZGLhWErKerl8TscnMonLJc0AYKZcPJ.jpg?size=1075x1075&quality=96&crop=2,2,1075,1075&ava=1" alt="" />
    { props.message }
    <div>
      <span>Like </span> {props.likeCount}
      </div>
    
    </div>
    
    
}

export default Post;