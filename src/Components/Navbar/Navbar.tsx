import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile'  className={({ isActive }) =>(isActive ? `${style.active}` : "")}>Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/dialogs'  className={({ isActive }) =>(isActive ? `${style.active}` : "")}>Messages</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to='/news'  className={({ isActive }) =>(isActive ? `${style.active}` : "")}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music'  className={({ isActive }) =>(isActive ? `${style.active}` : "")}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' className={({ isActive }) =>(isActive ? `${style.active}` : "")}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/friends' className={({ isActive }) =>(isActive ? `${style.active}` : "")}>Friends
                <div>

                </div>
                </NavLink>
            </div>
        </nav>
    )
}
export default Navbar;