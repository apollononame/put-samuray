import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import classNames from 'classnames';
import { updateNewPostText } from '../../../redux/store';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {

    let newPostElement = React.createRef();

   let onAddPost = () => {
    props.addPost();
    
   }

   let onPostChange = () => {
    let text = newPostElement.current.value;
  props.updateNewPostText (text);
   }

    let postsElements = 
    props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <a  className={s.button} onClick={ onAddPost }   >
                        <span className={classNames(s.buttonLine, s.buttonLineTop)}></span>
                        <span className={ classNames(s.buttonLine, s.buttonLineBottom) }></span>
                        <span className={ classNames(s.buttonLine, s.buttonLineRight)}></span>
                        <span className={ classNames(s.buttonLine, s.buttonLineLeft)}></span>
                        Add Post
                        </a>    
                    
                    {/* <button onClick={ addPost  }>Add Post</button> */}
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    ); 

}

export default MyPosts;