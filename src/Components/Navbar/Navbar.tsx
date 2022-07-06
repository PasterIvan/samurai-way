import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navbar.module.css'
import {useAppSelector} from "../../hooks/hooks";

type ActionType = {
    [key: string]: boolean
}

const Navbar = () => {
    const authUserId = useAppSelector(state => state.auth.id)

    const setAction = ({isActive}: ActionType) => isActive ? style.active : style.item
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={'/profile/'+authUserId}  className={setAction}>Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/dialogs'  className={setAction}>Messages</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/users'  className={setAction}>Users</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/news'  className={setAction}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music'  className={setAction}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' className={setAction}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/friends' className={setAction}>Friends</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;