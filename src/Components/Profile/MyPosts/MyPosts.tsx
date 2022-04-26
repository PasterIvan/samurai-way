import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {PostsType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postText: string)=>void
    changeNewPostText: (newText: string)=>void
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElement = props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

    const fnAddPost = () => {
        props.addPost(props.newPostText)
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewPostText(e.currentTarget.value)
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
                    <button onClick={fnAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;