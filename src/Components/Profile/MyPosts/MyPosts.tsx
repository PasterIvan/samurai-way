import {Post} from "./MyPost/Post";
import style from "./MyPosts.module.css"
import {useAppSelector} from "../../../hooks/hooks";
import {NewPost} from "./MyPost/NewPost";


export const MyPosts = () => {
    const posts = useAppSelector(state => state.profilePage.posts)

    const postsElement = posts.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)

    return (
        <>
            <div className={style.postsBlock}>
                <h3>My posts</h3>
                <NewPost/>
                <div className={style.posts}>
                    {postsElement}
                </div>
            </div>
        </>
    )
}
