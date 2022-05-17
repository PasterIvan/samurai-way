import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {ACType, PostsType} from '../../../redux/store';
import {addPostAC, changeNewPostTextAC} from "../../../redux/profileReducer";

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action:ACType)=>void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElement = props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={newTextChangeHandler}
                             />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;