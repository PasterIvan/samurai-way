import {mapDispatchToPropsType, mapStateToPropsType} from "./MyPostsContainer"
import {Post} from "./MyPost/Post";
import {ChangeEvent} from "react";
import style from "./MyPosts.module.css"


type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, newPostText, addPost, updateNewPostText}) => {

    const postsElement = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        updateNewPostText(text)
    }

    return (
        <>
            <div className={style.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea value={newPostText}
                              onChange={onNewPostText}
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
        </>
    )
}
