import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/ReduxStore";
import {addPost, ProfileType, setUserProfile, updateNewPostText} from "../../redux/profileReducer";
import {Params, useParams} from 'react-router-dom';

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    setUserProfile: (profile: ProfileType) => void
}

export type WithUrlDataContainerComponentType = mapStateToPropsType & mapDispatchToPropsType

type ProfileRequestContainerType = WithUrlDataContainerComponentType & {
    params: Params
}

class ProfileRequestContainer extends React.Component<ProfileRequestContainerType> {

    componentDidMount() {
        const {userId} = this.props.params;
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile, addPost, updateNewPostText
})(WithUrlDataContainerComponent)
