import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ProfileType} from "../../redux/profileReducer";
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePropsType = {
    profile: ProfileType
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profile, posts, newPostText, addPost, updateNewPostText}) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPosts posts={posts} addPost={addPost} newPostText={newPostText} updateNewPostText={updateNewPostText}/>
        </div>
    )
}
