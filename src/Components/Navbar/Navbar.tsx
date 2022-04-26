import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' className={style.active}>Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/dialogs' className={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' className={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' className={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' className={style.active}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/friends' className={style.active}>Friends
                <div>

                </div>
                </NavLink>
            </div>
        </nav>
    )
}
export default Navbar;