import React from 'react';
import {useAppSelector} from "../../../hooks/hooks";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

export const Description = () => {
    const profile = useAppSelector(state => state.profilePage.profile)

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img src={profile.photos.large} alt="avatar"/>

            <ProfileStatus/>

            <h2>{profile.fullName}</h2>
            <p>
                <b>About me: </b>
            </p>
            <p>
                <b>Looking for a job: </b>
                {profile.lookingForAJob ? <span>{profile.lookingForAJobDescription}</span> : <span>no</span>}
            </p>
        </div>
    )
}
