import {addPostAC, PostType, ProfileReducerActionType, updateNewPostTextAC} from "../../../redux/profileReducer";
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
                dispatch(addPostAC())
            },
            updateNewPostText: (text) => {
                dispatch(updateNewPostTextAC(text))
            }
        }
    )
}
export default connect<mapStateToPropsType,mapDispatchToPropsType,{},StoreType>(mapStateToProps, mapDispatchToProps)(MyPosts)