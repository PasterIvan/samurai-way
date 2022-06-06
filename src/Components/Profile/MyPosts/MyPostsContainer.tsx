import {addPost, PostType, ProfileReducerActionType, updateNewPostText} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StoreType} from "../../../redux/ReduxStore";

export type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}
export type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    })
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return ({
            addPost: () => {
                dispatch(addPost())
            },
            updateNewPostText: (text) => {
                dispatch(updateNewPostText(text))
            }
        }
    )
}
export default connect<mapStateToPropsType,mapDispatchToPropsType,{},StoreType>(mapStateToProps, mapDispatchToProps)(MyPosts)