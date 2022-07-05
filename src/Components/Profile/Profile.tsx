import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {getStatus, getUserProfile} from "../../redux/profileReducer";
import {MyPosts} from "./MyPosts/MyPosts";
import {useAppDispatch} from "../../hooks/hooks";
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export const ProfileForRedirect  = () => {

    const dispatch = useAppDispatch()
    const params = useParams()

    let {userId} = params
    userId && dispatch(getUserProfile(+userId))
    userId && dispatch(getStatus(+userId))

    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}
export const Profile = withAuthRedirect(ProfileForRedirect)


