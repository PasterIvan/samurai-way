import React from 'react';
import style from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";

type ProfileInfoPropsType = {
    profile:ProfileType
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {
    if(!profile) {
        return <Preloader/>
    }

    return <div>
        <div>
            <img
                src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/68848765_2102524146519205_6916601228805799936_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=aSA2oWbB_BUAX8alYB5&_nc_ht=scontent-waw1-1.xx&oh=00_AT_m7VN8bKOyC70F1sNGA1BDT7BvYylOMLzOh4JSAx5T8g&oe=62733B40"
                alt=""/>
        </div>
        <div className={style.descriptionBlock}>
            <img src={profile.photos.large}/>
            ava + desctiption
        </div>

    </div>
}
export default ProfileInfo;