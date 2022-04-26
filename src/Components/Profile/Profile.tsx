import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: ()=>void
    changeNewPostText: (newText: string)=>void
}

const Profile: React.FC <ProfilePropsType>  = (props) => {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 addPost={props.addPost}
                 changeNewPostText={props.changeNewPostText}
                 />
    </div>
}
export default Profile;