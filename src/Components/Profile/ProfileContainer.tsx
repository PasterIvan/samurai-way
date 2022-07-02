import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux/ReduxStore";
import {addPost, getUserProfile, updateNewPostText} from "../../redux/profileReducer";
import {Params, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "../Dialogs/Dialogs";

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    getUserProfile: (profile: number) => void
}

export type WithUrlDataContainerComponentType = mapStateToPropsType & mapDispatchToPropsType

type ProfileRequestContainerType = WithUrlDataContainerComponentType & {
    params: Params
}

class ProfileRequestContainer extends React.Component<ProfileRequestContainerType> {

    componentDidMount() {
        const userId = this.props.params;
        userId && this.props.getUserProfile(+userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         updateNewPostText={this.props.updateNewPostText}
                         addPost={this.props.addPost}
                         newPostText={this.props.newPostText}
                         posts={this.props.posts}/>
            </div>
        )
    }
}

const mapStateToProps = (state: StoreType) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let WithUrlDataContainerComponent = (props: WithUrlDataContainerComponentType) => {
    return <ProfileRequestContainer  {...props} params={useParams()}/>
}

let AuthRedirectComponent = withAuthRedirect(WithUrlDataContainerComponent)

export const ProfileContainer = connect(mapStateToProps, {
    addPost, updateNewPostText, getUserProfile
})(AuthRedirectComponent)
